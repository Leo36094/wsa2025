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
      <div class="scene-card-border"></div>
      <div class="scene-card-background">
        <img
          v-if="backgroundImageUrl"
          :src="backgroundImageUrl"
          alt=""
          class="scene-card-ellipse"
        />
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
  // Special cards (closing, competition) are clickable even without folders
  return item.id === 'closing' || item.id === 'competition'
}
</script>

<style lang="scss" scoped>
.scene-card-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.24rem;
  width: 100%;
  max-width: 12.8rem;
  margin: 0 auto;

  @include tablet() {
    padding: 0 0.16rem;
  }

  @include mobile() {
    padding: 0 0.16rem;
  }
}

.scene-card {
  position: relative;
  background-color: #18475b;
  border-radius: 0.06rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.97rem;
  overflow: hidden;
  box-sizing: border-box;
  transition: opacity 0.2s ease;
  flex: 1 1 calc(50% - 0.12rem);
  min-width: calc(50% - 0.12rem);

  // Last card (5th card) - centered
  &.scene-card-last {
    flex: 0 0 6.28rem;
    min-width: 6.28rem;
    margin: 0 auto;
  }

  &.scene-card-clickable {
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .scene-card-border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 0.1rem);
    height: calc(100% - 0.1rem);
    border: 1px solid #ffffff;
    border-radius: 0.04rem;
    opacity: 0.6;
    pointer-events: none;
  }

  .scene-card-background {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2.53rem;
    height: 2.53rem;
    pointer-events: none;

    .scene-card-ellipse {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: scale(1.59);
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
    flex: 1 1 100%;
    min-width: 100%;
    padding: 0.32rem;
    min-height: 0.8rem;

    &.scene-card-last {
      flex: 1 1 100%;
      min-width: 100%;
      margin: 0;
    }

    .scene-card-title {
      font-size: 0.24rem;
    }

    .scene-card-background {
      width: 2rem;
      height: 2rem;
    }
  }

  // Mobile responsive
  @include mobile() {
    flex: 1 1 100%;
    min-width: 100%;
    padding: 0.24rem;
    min-height: 0.7rem;

    &.scene-card-last {
      flex: 1 1 100%;
      min-width: 100%;
      margin: 0;
    }

    .scene-card-title {
      font-size: 0.2rem;
    }

    .scene-card-background {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
