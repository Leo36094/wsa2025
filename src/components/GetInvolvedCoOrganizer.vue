<template>
  <div class="section-co-organizer" data-aos="fade-up">
    <div class="section-co-organizer__desc">
      <div class="image-container">
        <!-- Loading skeleton -->
        <div v-if="imageLoading" class="image-skeleton">
          <div class="skeleton-shimmer"></div>
        </div>
        <!-- Actual image -->
        <img
          :src="coOrganizerImg"
          :class="{ 'image-loaded': !imageLoading }"
          @load="onImageLoad"
          @error="onImageError"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const imageLoading = ref(true)

const coOrganizerImg = computed(() => {
  if (locale.value === 'en') {
    return import.meta.env.BASE_URL + 'images/sponsors/co-organizer_en.png'
  }
  return import.meta.env.BASE_URL + 'images/sponsors/co-organizer_zh.png'
})

// Reset loading state when image source changes
watch(coOrganizerImg, () => {
  imageLoading.value = true
})

// Handle image load event
const onImageLoad = () => {
  imageLoading.value = false
}

// Handle image error event
const onImageError = () => {
  imageLoading.value = false
  console.error('Failed to load co-organizer image')
}
</script>

<style lang="scss" scoped>
.section-co-organizer {
  padding-top: 0.1rem;
  min-height: 100svh;
  .get-involved__title {
    margin: 0.2rem auto 0.2rem auto;
  }

  // Image loading styles
  .image-container {
    position: relative;
    width: 100%;
    min-height: 4rem; // Minimum height for skeleton
  }

  .image-skeleton {
    position: absolute;
    top: 0.4rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 0.08rem;
    overflow: hidden;
  }

  .skeleton-shimmer {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
    animation: shimmer 1.5s infinite;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
  }

  img.image-loaded {
    opacity: 1;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
}
@include tablet {
  .section-co-organizer {
    .get-involved__title {
      margin: 0.24rem auto;
    }
  }
}
@include mobile {
  .section-co-organizer {
    .get-involved__title {
      margin: 0.16rem auto;
    }
  }
}
</style>

