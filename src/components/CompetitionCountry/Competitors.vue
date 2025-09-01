<template>
  <section
    class="competitors"
    :aria-labelledby="$t('competition.competitors_title')"
    id="competitors"
  >
    <div class="competitors-container">
      <div class="title-group">
        <BaseTitle
          :style="{ color: '#fff' }"
          class="competitors__title"
          :title="$t('competition.competitors_title')"
        />
        <p class="competitors__desc">
          {{ $t('competition.competitors_desc') }}
        </p>
      </div>
      <div class="competitors__content">
        <div class="countries-grid">
          <div v-for="country in countries" :key="country.code" class="country-flag">
            <Flag :waving="waving" :flag="country.flag" :name="lang === 'en' ? country.nameEn : country.name" :link="country.link" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Flag from '@/components/Flag.vue'
import BaseTitle from '@/components/BaseTitle.vue'

import { PARTICIPATING_COUNTRIES } from './constants'

const { locale } = useI18n()
const isMobile = inject('isMobile') as Ref<boolean>
const lang = computed(() => {
  return locale.value === 'en' ? 'en' : 'zh-TW'
})

const waving = computed(() => {
  return !isMobile.value
})

// Convert to array for easier iteration
const countries = Object.entries(PARTICIPATING_COUNTRIES).map(([code, info]) => ({
  code,
  name: info.name,
  nameEn: info.nameEn,
  flag: info.flag,
  link: info.link,
}))
</script>

<style lang="scss" scoped>
$block-bg-color: #fff;
$note-bg-color: #c8e14b;
$title-bg-color: #18475b;

$font-size-title: (
  pc: 0.28rem,
  tablet: 0.2rem,
  mobile: 0.16rem,
);

$font-size-info: (
  pc: 0.16rem,
  tablet: 0.14rem,
  mobile: 0.12rem,
);

.competitors {
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  background: $white-bg;
  .competitors-container {
    width: 12rem;
    margin: 0 auto;

    .title-group {
      display: flex;
      padding: 0.64rem;
      flex-direction: column;
      align-items: center;
      align-self: stretch;
      border-radius: 0.4rem;
      background: $title-bg-color;
      border-radius: 40px;
      color: #fff;
      .competitors__title h2 {
        color: #fff !important;
        margin-bottom: 0.4rem;
      }
      .competitors__desc {
        text-align: center;
        font-size: map-get($font-size-info, pc);
        font-weight: 400;
      }
    }
  }
  .competitors__title {
    margin-bottom: 0.4rem;
  }
  .competitors__content {
    margin-top: 0.4rem;
    .countries-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.24rem;
    }
  }
}
@include tablet {
  .competitors {
    .competitors-container {
      width: 100%;
      padding: 0 0.4rem;
      .title-group {
        padding: 0.4rem;
        .competitors__title {
          margin-bottom: 0.24rem;
        }
        .competitors__desc {
          font-size: map-get($font-size-info, tablet);
        }
      }
    }
    .competitors__content {
      .countries-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.24rem;
      }
    }
  }
}
@include mobile {
  .competitors {
    .competitors-container {
      width: 100%;
      padding: 0 0.24rem;
      .title-group {
        padding: 0.16rem;

        .competitors__title {
          margin-bottom: 0.16rem;
        }
        .competitors__desc {
          font-size: map-get($font-size-info, mobile);
        }
      }
    }
    .competitors__content {
      .countries-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.16rem;
      }
    }
  }
}
@include listStyle();
</style>
