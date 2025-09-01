<template>
  <div class="page-wrapper">
    <div class="page-tab-container">
      <div class="page-tab" role="tablist" :aria-label="$t('page_tab_aria_label')" ref="tabContainerRef">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          class="page-tab__item"
          :class="{ active: tab.value === activeTab }"
          @click="handleTabClick(tab.value)"
          @keydown="handleKeyDown($event, tab.value)"
          role="tab"
          tabindex="0"
          :aria-label="tab.label"
          :ref="el => setTabRef(el as HTMLElement, tab.value)"
        >
          <span>
            {{ tab.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { type PageValue } from '@/types/page_section'

const props = defineProps<{
  tabs: {
    label: string
    value: PageValue
  }[]
  activeTab: PageValue
}>()

const emit = defineEmits<{
  (e: 'update:activeTab', value: PageValue): void
}>()

const handleTabClick = (value: PageValue) => {
  emit('update:activeTab', value)
}
const handleKeyDown = (event: KeyboardEvent, value: PageValue) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    emit('update:activeTab', value)
  }
}

// Refs for scrolling functionality
const tabContainerRef = ref<HTMLElement>()
const tabRefs = ref<Map<PageValue, HTMLElement>>(new Map())

// Set tab refs
const setTabRef = (el: HTMLElement | null, value: PageValue) => {
  if (el) {
    tabRefs.value.set(value, el)
  }
}

// Auto scroll to active tab on mobile
const scrollToActiveTab = async () => {
  await nextTick()

  const activeTabElement = tabRefs.value.get(props.activeTab)
  const container = tabContainerRef.value

  if (activeTabElement && container) {
    // Check if we're on mobile (you can adjust this breakpoint as needed)
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
      // Calculate scroll position to center the active tab
      const scrollLeft = activeTabElement.offsetLeft - (container.offsetWidth / 2) + (activeTabElement.offsetWidth / 2)

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
    }
  }
}

// Watch for activeTab changes
watch(() => props.activeTab, () => {
  scrollToActiveTab()
}, { immediate: true })

</script>

<style lang="scss" scoped>
$tab-text-color: #455861;
.page-wrapper {
  width: 100%;
}
.page-tab-container {
  width: 12.8rem;
  margin: 0.24rem auto;
  @include flexCenter;
  border-bottom: 0.01rem solid rgba(#101e24, 0.1);
}
.page-tab {
  display: flex;
  width: 100%;
  align-items: center;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 5;
  &__item {
    flex-shrink: 0;
    cursor: pointer;
    padding: 0.16rem;
    text-align: center;
    width: auto;
    font-size: 0.18rem;
    color: $tab-text-color;
    transition: all 0.3s ease;
    border-bottom: 0.04rem solid transparent;
    &.active {
      font-weight: 700;
      color: $black-primary;
      border-bottom: 0.04rem solid $green-primary;
    }
  }
}
@include tablet {
  .page-tab-container {
    width: 6.64rem;
    margin: 0.2rem auto;
  }
  .page-tab {
    &__item {
      padding: 0.1rem 0.16rem 0.06rem 0.16rem;
    }
  }
}
@include mobile {
  .page-tab-container {
    width: auto;
    .page-tab {
      align-items: stretch;
      padding-right: 0.16rem;
      padding-left: 0.16rem;
      &__item {
        min-width: unset;
        font-size: 0.16rem;
        @include flexCenter;
      }
    }
  }
}
</style>
