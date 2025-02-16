<template>
  <div class="page-wrapper">
    <div class="page-tab-container">
      <div class="page-tab">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          class="page-tab__item"
          :class="{ active: tab.value === activeTab }"
          @click="handleTabClick(tab.value)"
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
import { PageSectionEnum } from '@/types/page_section'

defineProps<{
  tabs: {
    label: string
    value: PageSectionEnum
  }[]
  activeTab: PageSectionEnum
}>()

const emit = defineEmits<{
  (e: 'update:activeTab', value: PageSectionEnum): void
}>()

const handleTabClick = (value: PageSectionEnum) => {
  emit('update:activeTab', value)
}
</script>

<style lang="scss" scoped>
$tab-text-color: #455861;
.page-wrapper {
  width: 100%;
}
.page-tab-container {
  width: 12.8rem;
  margin: 0.4rem auto;
  @include flexCenter;
  border-bottom: 0.01rem solid rgba(#101e24, 0.1);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
.page-tab {
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 100;
  &__item {
    padding: 0.16rem;
    text-align: center;
    min-width: 1.8rem;
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
  }
}
</style>
