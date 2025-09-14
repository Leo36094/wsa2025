<template>
  <section class="media-theme-ad" id="theme-ad" :aria-labelledby="`${$t('media.theme_ad_title')}`">
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
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import BaseTitle from '@/components/BaseTitle.vue'
import AdItem from '@/components/Media/AdItem.vue'

const adList = computed(() =>
  Array(6)
    .fill(0)
    .map((_, index) => ({
      imgUrl: `https://dummyimage.com/393x221/000/fff&text=${index + 1}`,
      title: `title ${index + 1}`,
      desc: `臺北流行音樂中心是臺北市成立的第一個行政法人，位於台灣臺北市南港區的流行音樂園區。園區內包括表演廳、流行音樂文化館、產業區及戶外開放空間。 ${index + 1}`,
    })),
)
</script>

<style lang="scss" scoped>
.media-theme-ad {
  .media-theme-ad-title {
    margin-bottom: 0.72rem;
  }
  .media-theme-ad-container {
    @include flexCenter(row);
    flex-wrap: wrap;
    gap: 0.4rem;
  }
}
</style>
