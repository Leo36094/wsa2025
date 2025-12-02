<template>
  <div class="scene-card-list-container">
    <!-- First row: 2 cards -->
    <div class="scene-card-row double-card">
      <div
        v-for="(item, index) in items.slice(0, 2)"
        :key="index"
        class="scene-card"
        :class="{ 'scene-card-clickable': item.folder }"
        :aria-label="item.title"
        @click="item.folder ? $emit('card-click', item.id) : undefined"
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
    <!-- Second row: 2 cards -->
    <div class="scene-card-row double-card">
      <div
        v-for="(item, index) in items.slice(2, 4)"
        :key="index + 2"
        class="scene-card"
        :class="{ 'scene-card-clickable': item.folder }"
        :aria-label="item.title"
        @click="item.folder ? $emit('card-click', item.id) : undefined"
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
    <!-- Third row: 1 card (centered) -->
    <div class="scene-card-row single-card">
      <div
        class="scene-card"
        :class="{ 'scene-card-clickable': items[4].folder }"
        :aria-label="items[4].title"
        @click="items[4].folder ? $emit('card-click', items[4].id) : undefined"
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
        <p class="scene-card-title">{{ items[4].title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface SceneItem {
  id: string
  title: string
  folder: string | null
}

interface Props {
  items: SceneItem[]
  backgroundImageUrl?: string
}

defineProps<Props>()

defineEmits<{
  'card-click': [sceneId: string]
}>()
</script>

<style lang="scss" scoped>
.scene-card-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.24rem;
  width: 100%;
  max-width: 12.8rem;
  margin: 0 auto;

  // Tablet: 2 columns
  @include tablet() {
    gap: 0.24rem;
    padding: 0 0.16rem;
  }

  // Mobile: 1 column
  @include mobile() {
    gap: 0.24rem;
    padding: 0 0.16rem;
  }
}

.scene-card-row {
  display: flex;
  gap: 0.24rem;
  width: 100%;

  &.single-card {
    justify-content: center;

    .scene-card {
      flex: 0 0 auto;
      width: 6.28rem;
    }
  }

  &.double-card {
    .scene-card {
      flex: 1 0 0;
    }
  }

  // Tablet responsive
  @include tablet() {
    flex-direction: column;

    &.single-card .scene-card {
      width: 100%;
    }
  }

  // Mobile responsive
  @include mobile() {
    flex-direction: column;

    &.single-card .scene-card {
      width: 100%;
    }
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

  &.scene-card-clickable {
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .scene-card-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    padding: 0.32rem;
    min-height: 0.8rem;

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
    padding: 0.24rem;
    min-height: 0.7rem;

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

