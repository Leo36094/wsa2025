<template>
  <div class="section-tour" aria-labelledby="tour-title" data-aos="fade-up">
    <BaseTitle class="section-tour__title" :title="$t('involved.tour_title')" />
    <img class="section-tour__dm" :src="dmImg" alt="dm" />
    <div class="step-block" v-for="item in visaMethodList" :key="item.title">
      <h2 class="step-block__title">{{ item.title }}</h2>
      <div class="step-block__desc" v-html="item.desc" role="region" :aria-label="item.title"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { locale } = useI18n()

const dmImg = computed(() => {
  if (locale.value === 'en') {
    return import.meta.env.BASE_URL + 'images/getInvolved/tour/tour_dm_en_old.jpg'
  }
  return import.meta.env.BASE_URL + 'images/getInvolved/tour/tour_dm_zh_old.jpg'
})
const visaMethodList = computed(() => [
  {
    title: t('involved.tour_article_main_title'),
    desc: t('involved.tour_article_main_desc'),
  },
])
</script>

<style lang="scss" scoped>
$block-bg-color: #fafcf2;

.section-tour {
  width: 100%;
  a {
    text-decoration: underline;
  }
  &__title {
    margin: 0.4rem auto;
  }
  &__desc {
    margin-bottom: 0.16rem;
    font-size: 0.16rem;
  }
  &__dm {
    width: 100%;
    height: auto;
    margin-bottom: 0.24rem;
  }
  .step-block {
    padding: 0.24rem;
    border-radius: 0.08rem;
    background-color: $block-bg-color;
    margin-bottom: 0.16rem;
    font-size: 0.16rem;
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      margin-bottom: 0.08rem;
      font-weight: 700;
      text-align: center;
    }
    &__desc {
      @include flexCenter(column);
      align-items: flex-start;
    }
    :deep(a) {
      cursor: pointer;
      text-decoration: underline;
    }
    :deep(.group) {
      margin-bottom: 0.08rem;
    }
  }
}
@include tablet {
  .section-tour {
    &__title {
      margin: 0.24rem auto;
    }
    &__desc {
      margin-bottom: 0.16rem;
    }
    :deep(.group) {
      margin-bottom: 0.16rem;
    }
  }
}
@include mobile {
  .section-tour {
    &__title {
      margin: 0 auto 0.16rem auto;
      font-size: 0.24rem;
    }
    &__desc {
      font-size: 0.16rem;
    }
    .step-block {
      padding: 0.16rem;
      &__title {
        font-size: 0.16rem;
      }
      &__desc {
        font-size: 0.16rem;
      }
      :deep(.group) {
        margin-bottom: 0.08rem;
      }
    }
  }
}
</style>
