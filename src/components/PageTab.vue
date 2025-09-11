<template>
  <div class="page-wrapper">
    <div class="page-tab-container">
      <button
        v-if="showLeftArrow"
        class="scroll-arrow scroll-arrow--left"
        @click="scrollLeft"
        aria-label="Scroll left"
      >
        ←
      </button>
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
      <button
        v-if="showRightArrow"
        class="scroll-arrow scroll-arrow--right"
        @click="scrollRight"
        aria-label="Scroll right"
      >
        →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue'
import { type PageValue } from '@/types/page_section'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

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

// Arrow visibility state
const showLeftArrow = ref(false)
const showRightArrow = ref(false)

// Set tab refs
const setTabRef = (el: HTMLElement | null, value: PageValue) => {
  if (el) {
    tabRefs.value.set(value, el)
  }
}

// Scroll functions
const scrollLeft = () => {
  const container = tabContainerRef.value
  if (container) {
    const scrollAmount = container.offsetWidth * 0.8
    container.scrollTo({
      left: container.scrollLeft - scrollAmount,
      behavior: 'smooth'
    })
  }
}

const scrollRight = () => {
  const container = tabContainerRef.value
  if (container) {
    const scrollAmount = container.offsetWidth * 0.8
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    })
  }
}

// Update arrow visibility based on scroll position
const updateArrowVisibility = () => {
  const container = tabContainerRef.value
  if (!container) return

  const { scrollLeft, scrollWidth, clientWidth } = container

  // Show left arrow if we can scroll left
  showLeftArrow.value = scrollLeft > 0

  // Show right arrow if we can scroll right
  showRightArrow.value = scrollLeft < scrollWidth - clientWidth - 1
}

// Handle scroll events
const handleScroll = () => {
  updateArrowVisibility()
}

// Handle resize events
const handleResize = () => {
  updateArrowVisibility()
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

watch(() => locale.value, () => {
  nextTick(() => {
    updateArrowVisibility()
  })
})

// Initialize arrow visibility and event listeners
onMounted(() => {
  nextTick(() => {
    updateArrowVisibility()

    const container = tabContainerRef.value
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    window.addEventListener('resize', handleResize)
  })
})

// Cleanup event listeners
onUnmounted(() => {
  const container = tabContainerRef.value
  if (container) {
    container.removeEventListener('scroll', handleScroll)
  }

  window.removeEventListener('resize', handleResize)
})

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
  position: relative;
  align-items: center;
}
.scroll-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 0.01rem solid rgba(#455861, 0.2);
  border-radius: 50%;
  width: 0.32rem;
  height: 0.32rem;
  @include flexCenter;
  cursor: pointer;
  font-size: 0.16rem;
  color: $tab-text-color;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: $black-primary;
    border-color: rgba(#455861, 0.4);
  }

  &--left {
    left: -0.16rem;
  }

  &--right {
    right: -0.16rem;
  }
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
  .scroll-arrow {
    width: 0.28rem;
    height: 0.28rem;
    font-size: 0.14rem;

    &--left {
      left: -0.14rem;
    }

    &--right {
      right: -0.14rem;
    }
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

  .scroll-arrow {
    width: 0.24rem;
    height: 0.24rem;
    font-size: 0.12rem;

    &--left {
      left: 0.04rem;
    }

    &--right {
      right: 0.04rem;
    }
  }
}
</style>
