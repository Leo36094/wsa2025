<template>
  <section class="members" :aria-labelledby="$t('competition.members_title')" id="members">
    <div class="members-container">
      <div class="title-group">
        <BaseTitle class="members__title" :title="$t('competition.members_title')" />
        <p class="members__desc">
          {{ $t('competition.members_desc') }}
        </p>
      </div>
      <div class="members__content">
        <div class="countries-grid">
          <div v-for="country in countries" :key="country.code" class="country-flag">
            <Flag
              :waving="waving"
              :flag="country.flag"
              :name="lang === 'en' ? country.nameEn : country.name"
              :link="country.link"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseTitle from '@/components/BaseTitle.vue'
import Flag from '@/components/Flag.vue'

import { COUNTRIES_MAP } from './constants'

const { locale } = useI18n()
const isMobile = inject('isMobile') as Ref<boolean>
const lang = computed(() => {
  return locale.value === 'en' ? 'en' : 'zh-TW'
})

const waving = computed(() => {
  return !isMobile.value
})

// Convert to array for easier iteration
const countries = Object.entries(COUNTRIES_MAP).map(([code, info]) => ({
  code,
  name: info.name,
  flag: info.flag,
  link: info.link,
  nameEn: info.nameEn,
}))
</script>

<style lang="scss" scoped>
@use "sass:map";
$block-bg-color: #fff;
$note-bg-color: #c8e14b;
$title-bg-color: #fafcf2;

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

.members {
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  background: $white-bg;
  .members-container {
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
      .members__desc {
        font-size: map.get($font-size-info, pc);
        font-weight: 400;
        text-align: center;
      }
    }
  }
  .members__title {
    margin-bottom: 0.4rem;
  }
  .members__content {
    margin-top: 0.4rem;
    .countries-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.24rem;
    }
  }
}
@include tablet {
  .members {
    .members-container {
      width: 100%;
      padding: 0 0.4rem;
      .title-group {
        padding: 0.24rem;
        .members__title {
          margin-bottom: 0.24rem;
        }
        .members__desc {
          font-size: map.get($font-size-info, tablet);
        }
      }
    }
    .members__title {
      margin-bottom: 0.4rem;
    }
    .members__content {
      .countries-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.24rem;
      }
    }
  }
}
@include mobile {
  .members {
    .members-container {
      width: 100%;
      padding: 0 0.24rem;
      .title-group {
        padding: 0.16rem;
        .members__title {
          margin-bottom: 0.16rem;
        }
        .members__desc {
          font-size: map.get($font-size-info, mobile);
        }
      }
    }
    .members__content {
      .countries-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.16rem;
      }
    }
  }
}
@include listStyle();
</style>
