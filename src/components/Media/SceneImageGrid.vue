<template>
  <div class="scene-image-grid-container">
    <div class="grid-header">
      <button class="back-button" @click="$emit('back')" aria-label="返回">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <h2 class="grid-title">{{ title }}</h2>
      <slot name="header-extra"></slot>
    </div>
    <div class="image-grid">
      <div
        v-for="(imageUrl, index) in images"
        :key="index"
        class="image-grid-item"
        @click="showLightbox(index)"
      >
        <img
          :src="imageUrl"
          :alt="`${title} - 圖片 ${index + 1}`"
          loading="lazy"
        />
      </div>
    </div>
    <CloudAlbumLink class="cloud-album-link" :albumUrl="linkUrl" />

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="lightboxImages"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useEasyLightbox } from 'vue-easy-lightbox'
import CloudAlbumLink from './CloudAlbumLink.vue'

interface Props {
  title: string
  images: string[]
  linkUrl: string
}

const props = defineProps<Props>()

defineEmits<{
  back: []
}>()

// Setup lightbox
const lightboxImages = computed(() => props.images)

const { show, onHide, visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: lightboxImages.value,
  initIndex: 0,
})

// Update lightbox images when images change
watch(
  () => props.images,
  (newImages) => {
    imgsRef.value = newImages
  },
)

// Show lightbox at specific index
const showLightbox = (index: number) => {
  indexRef.value = index
  show()
}
</script>

<style lang="scss" scoped>
.scene-image-grid-container {
  width: 100%;
  max-width: 12.8rem;
  margin: 0 auto;
  .cloud-album-link {
    margin-top: 0.4rem;
  }

  .grid-header {
    display: flex;
    align-items: center;
    gap: 0.24rem;
    margin-bottom: 0.24rem;
    flex-wrap: wrap;
    position: relative;

    .back-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0.48rem;
      height: 0.48rem;
      border: none;
      background: transparent;
      color: #101e24;
      cursor: pointer;
      padding: 0;
      transition: opacity 0.2s ease;
      flex-shrink: 0;

      &:hover {
        opacity: 0.7;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .grid-title {
      font-family: 'Inter', 'Noto Sans JP', sans-serif;
      font-weight: 700;
      font-size: 0.36rem;
      line-height: normal;
      color: #101e24;
      margin: 0;
      flex: 1;
      min-width: 0;
    }
  }

  .image-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    gap: 0.2rem;

    .image-grid-item {
      position: relative;
      width: 100%;
      width: 2.36rem;
      height: 1.42rem; // Fixed height to maintain 16:9 aspect ratio (2.36 / 16 * 9 ≈ 1.33)
      overflow: hidden;
      border-radius: 0.04rem;
      background-color: #899ca4;
      cursor: pointer;
      transition: transform 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        transform: scale(1.02);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }
  }

  // Tablet responsive
  @include tablet() {
    .grid-header {
      margin-bottom: 0.2rem;

      .back-button {
        width: 0.4rem;
        height: 0.4rem;
      }

      .grid-title {
        font-size: 0.28rem;
      }
    }

    .image-grid {
      justify-content: center;
      gap: 0.16rem;
    }
  }

  // Mobile responsive
  @include mobile() {
    .grid-header {
      margin-bottom: 0.16rem;

      .back-button {
        width: 0.32rem;
        height: 0.32rem;
      }

      .grid-title {
        font-size: 0.24rem;
      }
    }

    .image-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.16rem;
    }
  }
}
</style>

