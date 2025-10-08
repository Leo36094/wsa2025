<template>
  <section class="media-theme-ad" id="theme-ad" :aria-labelledby="`${$t('media.theme_ad_title')}`">
    <!-- Coming Soon Display -->
    <div class="coming-soon-container">
      <h2 class="coming-soon-title">{{ $t('media.theme_ad_coming_soon') }}</h2>
      <p class="coming-soon-subtitle">{{ $t('media.theme_ad_coming_soon_subtitle') }}</p>
    </div>

    <!-- Original content - commented out -->
    <!--
    <BaseTitle class="media-theme-ad-title" :title="$t('media.theme_ad_title')" />
    <div class="media-theme-ad-container">
      <AdItem
        v-for="item in adList"
        :key="item.imgUrl"
        :imgUrl="item.imgUrl"
        :title="item.title"
        :desc="item.desc"
      />
    </div>
    -->
  </section>
</template>

<script lang="ts" setup>
// Temporarily commented out for Coming Soon display
/*
import { computed } from 'vue'

import BaseTitle from '@/components/BaseTitle.vue'
import AdItem from '@/components/Media/AdItem.vue'

const adList = computed(() =>
  Array(6)
    .fill(0)
    .map((_, index) => ({
      imgUrl: `https://dummyimage.com/393x221/000/fff&text=${index + 1}`,
      title: `Comming Soon...`,
      desc: `臺北流行音樂中心是臺北市成立的第一個行政法人，位於台灣臺北市南港區的流行音樂園區。園區內包括表演廳、流行音樂文化館、產業區及戶外開放空間。`,
    })),
)
*/
</script>

<style lang="scss" scoped>
.media-theme-ad {
  // Coming Soon Styles
  .coming-soon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.2rem;  // 40px 20px (was 400px 200px)
    text-align: center;
    min-height: 50vh;
  }

  .coming-soon-title {
    font-size: 0.32rem;  // 32px (was 250px)
    font-weight: bold;
    color: #333;
    margin-bottom: 0.16rem;  // 16px (was 100px)
  }

  .coming-soon-subtitle {
    font-size: 0.18rem;  // 18px (was 120px)
    color: #666;
    opacity: 0.8;
  }

  // Original styles - commented out
  /*
  .media-theme-ad-title {
    margin-bottom: 0.72rem;
  }
  .media-theme-ad-container {
    @include flexCenter(row);
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  */
}
</style>
