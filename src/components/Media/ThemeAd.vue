<template>
  <section class="media-theme-ad" id="theme-ad" :aria-labelledby="`${$t('media.theme_ad_title')}`">
    <!-- Original content - commented out -->

    <div class="media-theme-ad-container">
      <AdItem embed-id="MADffwpeixI" />
      <AdItem embed-id="vI3ynWG0XxI" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import AdItem from '@/components/Media/AdItem.vue'
</script>

<style lang="scss" scoped>
.media-theme-ad {
  @include withContainer();
  min-height: 50vh;

  .media-theme-ad-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    width: 100%;

    // Desktop: 3 columns
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.4rem;
    }

    // Tablet: 2 columns
    @include tablet() {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.32rem;
      padding: 0 0.16rem;
    }

    // Mobile: 1 column
    @include mobile() {
      grid-template-columns: 1fr;
      gap: 0.24rem;
      padding: 0 0.16rem;
    }

    // Small mobile: 1 column with smaller gaps
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 0.2rem;
      padding: 0 0.12rem;
    }
  }

  // Coming Soon Styles (backup)
  .coming-soon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.2rem;
    text-align: center;
    min-height: 50vh;
  }

  .coming-soon-title {
    font-size: 0.32rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.16rem;

    @include mobile() {
      font-size: 0.28rem;
    }
  }

  .coming-soon-subtitle {
    font-size: 0.18rem;
    color: #666;
    opacity: 0.8;

    @include mobile() {
      font-size: 0.16rem;
    }
  }
}
</style>
