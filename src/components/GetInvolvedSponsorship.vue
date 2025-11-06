<template>
  <div class="section-sponsor" data-aos="fade-up">
    <!-- <div class="coming-soon-container">
      <h2 class="coming-soon-title">{{ $t('involved.sponsorship_coming_soon') }}</h2>
    </div> -->
    <div class="section-sponsor__desc">
      <div class="image-container">
        <!-- Loading skeleton -->
        <div v-if="imageLoading" class="image-skeleton">
          <div class="skeleton-shimmer"></div>
        </div>
        <!-- Actual image -->
        <img
          :src="sponsorImg"
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

const sponsorImg = computed(() => {
  if (locale.value === 'en') {
    return import.meta.env.BASE_URL + 'images/sponsors/sponsor_all_en.png'
  }
  return import.meta.env.BASE_URL + 'images/sponsors/sponsor_all_zh.png'
})

// Reset loading state when image source changes
watch(sponsorImg, () => {
  imageLoading.value = true
})

// Handle image load event
const onImageLoad = () => {
  imageLoading.value = false
}

// Handle image error event
const onImageError = () => {
  imageLoading.value = false
  console.error('Failed to load sponsor image')
}
</script>

<style lang="scss" scoped>
.section-sponsor {
  padding-top: 0.1rem;
  min-height: 100svh;
  .get-involved__title {
    margin: 0.2rem auto 0.2rem auto;
  }
  // Coming Soon Styles
  .coming-soon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.2rem; // 40px 20px
    text-align: center;
    min-height: 50vh;
  }

  .coming-soon-title {
    font-size: 0.32rem; // 32px
    font-weight: bold;
    color: #333;
    margin-bottom: 0.16rem; // 16px
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
  .section-sponsor {
    .get-involved__title {
      margin: 0.24rem auto;
    }
  }
}
@include mobile {
  .section-sponsor {
    .get-involved__title {
      margin: 0.16rem auto;
    }
  }
}
</style>
