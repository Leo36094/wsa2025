<template>
  <div class="section-sponsor" data-aos="fade-up">
    <!-- <div class="coming-soon-container">
      <h2 class="coming-soon-title">{{ $t('involved.sponsorship_coming_soon') }}</h2>
    </div> -->
    <div class="section-sponsor__desc">
      <img :src="sponsorImg" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const sponsorImg = computed(() => {
  if (locale.value === 'en') {
    return import.meta.env.BASE_URL + 'images/sponsors/sponsor_all_en.png'
  }
  return import.meta.env.BASE_URL + 'images/sponsors/sponsor_all_zh.png'
})
</script>

<style lang="scss" scoped>
.section-sponsor {
  padding-top: 0.1rem;
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
