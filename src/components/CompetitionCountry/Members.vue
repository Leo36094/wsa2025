<template>
  <section class="members" :aria-labelledby="$t('competition.members_title')" id="members">
    <div class="members-container">
      <div class="member-header">
        <div class="header-content">
          <div class="title-group">
            <h2 class="members__title">{{ $t('competition.members_title') }}</h2>
            <p class="members__desc">
              {{ $t('competition.members_desc') }}
            </p>
          </div>
          <div class="wsa-icon">
            <img src="/images/competition/wsa_logo.png" alt="wsa-icon" />
          </div>
        </div>
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
@use 'sass:map';
$block-bg-color: #fff;
$note-bg-color: #c8e14b;

$primary-dark: #18475b;

$font-size-title: (
  pc: 0.36rem,
  tablet: 0.2rem,
  mobile: 0.16rem,
);

$font-size-info: (
  pc: 0.16rem,
  tablet: 0.16rem,
  mobile: 0.16rem,
);

.members {
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  background: $white-bg;
  .members-container {
    width: 12rem;
    margin: 0 auto;
    .member-header {
      display: flex;
      border-radius: 0.25rem;
      background: $primary-dark;
      padding: 0.08rem;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0.8rem;
        width: 2.45rem;
        height: 2.45rem;
        background: url(/images/competition/background_circle.png);
        @include bgCenter(contain);
      }
    }
    .header-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.17rem;
      border: 0.01rem solid #fff;
      padding: 0.35rem 0.72rem;
      .title-group {
        width: 8.17rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        text-align: left;
        color: #fff;
        .members__title {
          font-weight: 700;
          margin-bottom: 0.24rem;
          font-size: map.get($font-size-title, pc);
        }
        .members__desc {
          font-size: map.get($font-size-info, pc);
          font-weight: 400;
        }
      }
      .wsa-icon {
        width: 1.83rem;
        height: 1.59rem;
        opacity: 0.4;
        img {
          width: 100%;
          height: 100%;
        }
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
      .member-header {
        &:before {
          width: 2.67rem;
          height: 2.67rem;
          left: 0.4rem;
        }
      }
      .header-content {
        padding: 0.32rem;
        .title-group {
          width: 4.18rem;
          .members__title {
            margin-bottom: 0.16rem;
          }
          .members__desc {
            font-size: map.get($font-size-info, tablet);
          }
        }
        .wsa-icon {
          width: 1.26rem;
          height: 1.09rem;
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
      .member-header {
        &:before {
          width: 1.82rem;
          height: 1.82rem;
          left: 0.45rem;
        }
        width: 100%;
      }
      .header-content {
        padding: 0.16rem;
        flex-direction: column;
        .title-group {
          width: 100%;
          .members__title {
            margin-bottom: 0.16rem;
          }
          .members__desc {
            margin-bottom: 0.16rem;
            font-size: map.get($font-size-info, mobile);
          }
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
