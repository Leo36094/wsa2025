<template>
  <div class="scene-card-list-container">
    <div
      v-for="(item, index) in i18nItems"
      :key="index"
      class="scene-card"
      :class="{
        'scene-card-clickable': isCardClickable(item),
        'scene-card-last': index === items.length - 1,
      }"
      :aria-label="item.title"
      @click="isCardClickable(item) ? $emit('card-click', item.id) : undefined"
    >
      <div class="scene-card-background-wrapper">
        <img
          v-if="backgroundImageUrl"
          :src="backgroundImageUrl"
          alt=""
          class="scene-card-background-img"
        />
        <div class="scene-card-overlay"></div>
      </div>
      <p class="scene-card-title">{{ item.title }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
interface SceneItem {
  id: string
  title: string
  titleEn: string
  folder: string | null
}

interface Props {
  items: SceneItem[]
  backgroundImageUrl?: string
}

const props = defineProps<Props>()

defineEmits<{
  'card-click': [sceneId: string]
}>()

const { locale } = useI18n()

const i18nItems = computed(() => {
  return props.items.map((item: SceneItem) => {
    return {
      ...item,
      title: locale.value === 'en' ? item.titleEn : item.title,
    }
  })
})

// Check if a card should be clickable
const isCardClickable = (item: SceneItem): boolean => {
  // Cards with folders are clickable
  if (item.folder) return true
  // Special cards (closing, competition, works) are clickable even without folders
  return item.id === 'closing' || item.id === 'competition' || item.id === 'works'
}
</script>

<style lang="scss" scoped>
.scene-card-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  width: 100%;
  margin: 0 auto;

  @include tablet() {
    padding: 0 0.16rem;
    justify-content: space-between;
    gap: 0.3rem;
  }

  @include mobile() {
    padding: 0 0.16rem;
  }
}

.scene-card {
  position: relative;
  border-radius: 0.06rem;
  padding: 0.32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
  width: 4rem;
  height: 2.46rem;


  &.scene-card-clickable {
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .scene-card-background-wrapper {
    position: absolute;
    inset: 0;
    border-radius: 0.06rem;
    overflow: hidden;
    pointer-events: none;

    .scene-card-background-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }

    .scene-card-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(24, 71, 91, 0.85);
    }
  }

  .scene-card-title {
    position: relative;
    z-index: 1;
    flex: 1 0 0;
    font-family: 'Inter', 'Noto Sans JP', sans-serif;
    font-weight: 700;
    font-size: 0.28rem;
    line-height: normal;
    color: #ffffff;
    text-align: center;
    white-space: pre-wrap;
    margin: 0;
    min-height: 1px;
    min-width: 1px;
  }

  // Tablet responsive
  @include tablet() {
    width: 3rem;
    height: 1.92rem;
    padding: 0.32rem;


    .scene-card-title {
      font-size: 0.24rem;
    }
  }

  // Mobile responsive
  @include mobile() {
    width: 100%;
    height: auto;
    aspect-ratio: 554 / 332; // Use aspect-ratio for responsive to maintain proportion
    padding: 0.24rem;

    .scene-card-title {
      font-size: 0.2rem;
    }
  }
}
</style>
