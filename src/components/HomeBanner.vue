<template>
  <main class="home-banner" :aria-label="$t('home.aria_banner_region')">
    <div class="home-banner-container">
      <div :class="['main-banner-container']">
        <Swiper class="banner" v-bind="swiperConfig" :aria-label="$t('home.aria_banner_swiper')">
          <SwiperSlide
            class="slide"
            role="group"
            :aria-label="$t('home.aria_banner_swiper_slide', { index: 0 })"
            tabindex="0"
          >
            <div
              :class="['banner-img', `banner-img-0`]"
              role="img"
              :aria-label="$t('home.aria_banner_swiper_slide', { index: 0 })"
            ></div>
          </SwiperSlide>
          <SwiperSlide
            v-for="index in 7"
            :key="index"
            class="slide"
            role="group"
            :aria-label="$t('home.aria_banner_swiper_slide', { index })"
            tabindex="0"
          >
            <div
              :class="['banner-img', `banner-img-${index}`]"
              role="img"
              :aria-label="$t('home.aria_banner_swiper_slide', { index })"
            ></div>
          </SwiperSlide>
          <div class="banner-pagination"></div>
          <div class="filter" aria-hidden="true"></div>
        </Swiper>
        <HomeBannerTitle class="banner__title" />
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import HomeBannerTitle from './HomeBannerTitle.vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const { t } = useI18n()

const swiperConfig = {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.banner-pagination',
    clickable: true,
    horizontalClass: 'swiper-pagination-horizontal', // 添加這行
    renderBullet: function (index: number, className: string) {
      return `<div class="${className}"></div>`
    },
  },
  a11y: {
    enabled: true,
    prevSlideMessage: t('home.aria_banner_swiper_prev'),
    nextSlideMessage: t('home.aria_banner_swiper_next'),
    firstSlideMessage: t('home.aria_banner_swiper_first'),
    lastSlideMessage: t('home.aria_banner_swiper_last'),
    paginationBulletMessage: t('home.aria_banner_swiper_pagination', { index: '{index}' }),
  },
  modules: [Autoplay, Pagination, A11y],
}
</script>
<style lang="scss" scoped>
$swiper-bullet-color: $white-bg;
$swiper-bullet-active-color: #455861;

.home-banner {
  position: relative;
  top: 0;
  .filter {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 89.74%);
    z-index: 1;
  }
  .main-banner-container {
    height: 100vh;
    transition: opacity 0.5s ease;
    position: relative;
    &.hide {
      opacity: 0;
    }
    .banner {
      @include flexCenter;
      height: 100%;
      position: relative;
      .banner-img {
        @include bgCenter(cover);
        height: 100%;
        width: 100%;
        &-0 {
          background-image: url('/images/wsa/homepage_herosection_01.png');
        }
        @for $i from 1 through 7 {
          &-#{$i} {
            background-image: url('/images/wsa/homepage_herosection_0#{$i}.jpg');
          }
        }
      }
      .title-container {
        @include withContainer;
        position: relative;
        margin: auto;
      }
      &__title {
        position: absolute;
        text-align: center;
        z-index: 2;
        left: 50%;
        bottom: 0.76rem;
        transform: translate(-50%);
        white-space: nowrap;
        pointer-events: none;
      }
      .banner-pagination {
        position: absolute;
        bottom: 0.32rem;
        top: unset;
        @include flexCenter;
        z-index: 5;
        :deep(.swiper-pagination-bullet) {
          opacity: 1;
          width: 0.12rem;
          height: 0.12rem;
          background: $swiper-bullet-color;
          &.swiper-pagination-bullet-active {
            background: $swiper-bullet-active-color;
          }
        }
      }
    }
  }
}

@include tablet() {
  .home-banner {
    position: relative;
    top: 0;
    .main-banner-container {
      .filter {
        height: 50%;
        pointer-events: none;
      }
      .banner {
        @include flexCenter;
        height: 100%;
        position: relative;
        &__title {
          white-space: normal;
          text-align: left;
          transform: translateX(0);
          line-height: normal;
          left: 0.56rem;
          bottom: 0.56rem;
        }
      }
    }
  }
}
@include mobile {
  .home-banner {
    .main-banner-container {
      .banner {
        &__title {
          left: 0.24rem;
          bottom: 0.44rem;
        }
      }
    }
  }
}
</style>
