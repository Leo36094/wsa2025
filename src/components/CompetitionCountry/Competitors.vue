<template>
  <section
    class="competitors"
    :aria-labelledby="$t('competition.competitors_title')"
    id="competitors"
  >
    <div class="competitors-container">
      <div class="member-header">
        <div class="header-content">
          <div class="title-group">
            <h2 class="members__title" v-html="$t('competition.competitors_title')"></h2>
            <p class="members__desc">
              {{ $t('competition.competitors_desc') }}
            </p>
          </div>
          <div class="wsa-icon">
            <img src="/images/host/wsa.png" alt="wsa-icon" />
          </div>
        </div>
      </div>
      <div class="competitors__content">
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
@use 'sass:map';
$block-bg-color: #fff;
$note-bg-color: #c8e14b;

$primary-dark: #18475b;

$font-size-title: (
  pc: 0.36rem,
  tablet: 0.36rem,
  mobile: 0.36rem,
);

$font-size-info: (
  pc: 0.16rem,
  tablet: 0.16rem,
  mobile: 0.16rem,
);

.competitors {
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  background: $white-bg;
  .competitors-container {
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
      padding: 0.64rem 0.72rem;
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
          :deep(.title_tag) {
            color: $note-bg-color;
          }
        }
        .members__desc {
          font-size: map.get($font-size-info, pc);
          font-weight: 400;
        }
      }
      .wsa-icon {
        width: 2.89rem;
        height: 2.2rem;
        position: absolute;
        right: 0.08rem;
        bottom: 0.08rem;
        transform: rotateY(180deg);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .competitors__title {
    margin-bottom: 0.4rem;
  }
  .competitors__content {
    width: 100%;
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
          width: 3.93rem;
          .members__title {
            margin-bottom: 0.16rem;
          }
          .members__desc {
            font-size: map.get($font-size-info, tablet);
          }
        }
        .wsa-icon {
          width: 1.83rem;
          height: 1.39rem;
          bottom: 0.08rem;
          top: unset;
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

      .member-header {
        &:before {
          width: 1.82rem;
          height: 1.82rem;
          left: 0.45rem;
        }
      }

      .header-content {
        padding: 0.16rem;
        flex-direction: column;
        .title-group {
          width: 100%;
          min-height: 2.92rem;
          margin-bottom: auto;
          .members__title {
            margin-bottom: 0.16rem;
          }
          .members__desc {
            margin-bottom: 1rem;
            font-size: map.get($font-size-info, mobile);
          }
        }
        .wsa-icon {
          width: 1.3rem;
          height: 0.99rem;
          bottom: 0.08rem;
          top: unset;
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
