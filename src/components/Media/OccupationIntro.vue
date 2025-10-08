<template>
  <section
    class="media-occupation-intro"
    id="occupation-intro"
    :aria-labelledby="`${$t('media.occupation_intro_title')}`"
  >
    <!-- <BaseTitle class="media-occupation-intro-title" :title="$t('media.occupation_intro_title')" /> -->

    <!-- Coming Soon Display -->
    <div class="coming-soon-container">
      <h2 class="coming-soon-title">{{ $t('media.occupation_intro_coming_soon') }}</h2>
      <p class="coming-soon-subtitle">{{ $t('media.occupation_intro_coming_soon_subtitle') }}</p>
    </div>

    <!-- Original content - commented out -->
    <!--
    <div class="media-occupation-intro-container">
      <div class="media-occupation-intro-item">
        <div class="media-occupation-intro-item-img"></div>
        <div class="media-occupation-intro-item-title">
          <h4>Comming Soon...</h4>
        </div>
      </div>
    </div>
    -->
  </section>
</template>

<script lang="ts" setup>
// import BaseTitle from '@/components/BaseTitle.vue'
</script>
<style lang="scss" scoped>
.media-occupation-intro {
  .media-occupation-intro-title {
    margin-bottom: 0.72rem;
  }

  // Coming Soon Styles
  .coming-soon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.2rem;  // 40px 20px
    text-align: center;
    min-height: 50vh;
  }

  .coming-soon-title {
    font-size: 0.32rem;  // 32px
    font-weight: bold;
    color: #333;
    margin-bottom: 0.16rem;  // 16px
  }

  .coming-soon-subtitle {
    font-size: 0.18rem;  // 18px
    color: #666;
    opacity: 0.8;
  }

  // Original styles - commented out
  /*
  .media-occupation-intro-container {
    @include flexCenter(row);
    flex-wrap: wrap;
    height: 50vh;
    gap: 0.4rem;
  }
  */
}
</style>
