<template>
  <section class="media-theme-ad" id="theme-ad" :aria-labelledby="`${$t('media.theme_ad_title')}`">
    <!-- Original content - commented out -->

    <div class="media-theme-ad-container">
      <AdItem
        v-for="video in videoList"
        :key="video.id"
        :embed-id="video.embedId"
        :title="video.title"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AdItem from '@/components/Media/AdItem.vue'

const { locale } = useI18n()

const videos = [
  { id: 6, embedId: '6plkbO0C7qw', title: '2025亞洲技能競賽形象影片「技能在手，未來看我」' },
  { id: 1, embedId: 'MADffwpeixI', title: '2025亞洲技能競賽 宣傳動畫  星火點燃：亞洲舞台的序曲' },
  { id: 2, embedId: 'vI3ynWG0XxI', title: '2025亞洲技能競賽 宣傳動畫  光影鑄就：巔峰技藝的刻印' },
  { id: 3, embedId: 'mL4wucM_Gd0', title: '2025亞洲技能競賽 宣傳動畫  競逐榮耀：夢想綻放的篇章' },
  { id: 4, embedId: 'u_e0AQ8zmKs', title: '2025亞洲技能競賽 宣傳動畫  熱浪不息：超越勝負的傳承' },
  { id: 5, embedId: 'ZlkJbbDhYcY', title: '2025亞洲技能競賽 宣傳動畫  聚光燈下：決戰時刻的屏息' },
]
const videosEn = [
  {
    id: 6,
    embedId: 'GB_lAKBUnpI',
    title: '2025 WorldSkills Asia Competition Image Video “Hands on, Future on”',
  },
  { id: 1, embedId: 'MADffwpeixI', title: '2025亞洲技能競賽 宣傳動畫  星火點燃：亞洲舞台的序曲' },
  { id: 2, embedId: 'vI3ynWG0XxI', title: '2025亞洲技能競賽 宣傳動畫  光影鑄就：巔峰技藝的刻印' },
  { id: 3, embedId: 'mL4wucM_Gd0', title: '2025亞洲技能競賽 宣傳動畫  競逐榮耀：夢想綻放的篇章' },
  { id: 4, embedId: 'u_e0AQ8zmKs', title: '2025亞洲技能競賽 宣傳動畫  熱浪不息：超越勝負的傳承' },
  { id: 5, embedId: 'ZlkJbbDhYcY', title: '2025亞洲技能競賽 宣傳動畫  聚光燈下：決戰時刻的屏息' },
]

const videoList = computed(() => {
  return locale.value === 'en' ? videosEn : videos
})
</script>

<style lang="scss" scoped>
.media-theme-ad {
  @include withContainer();
  min-height: 50vh;

  .media-theme-ad-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
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
