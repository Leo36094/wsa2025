<template>
  <div class="home-banner" :aria-label="$t('home.aria_banner_region')">
    <div class="home-banner-container">
      <div :class="['main-banner-container']">
        <Swiper
          class="banner"
          v-bind="swiperConfig"
          @slideChange="handleSlideChange"
          :aria-label="$t('home.aria_banner_swiper')"
        >
          <SwiperSlide
            v-for="index in bannerImages.length"
            :key="index"
            class="slide"
            role="group"
            :aria-label="$t('home.aria_banner_swiper_slide', { index: index - 1 })"
            tabindex="0"
          >
            <img
              :src="getImageSrc(index - 1)"
              :alt="$t('home.aria_banner_swiper_slide', { index: index - 1 })"
              loading="lazy"
            />
          </SwiperSlide>
          <div class="banner-pagination" tabindex="0"></div>
          <Transition name="fade">
            <HomeBannerTitle v-if="activeIndex !== 0" class="banner__title" />
          </Transition>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import HomeBannerTitle from '@/components/HomeBannerTitle.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
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
      return `<button class="${className}" aria-label="${t('home.aria_banner_swiper_pagination', { index })}"></button>`
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
const activeIndex = ref(0)
const handleSlideChange = (swiper: SwiperType) => {
  activeIndex.value = swiper.realIndex
}

const bannerImgWidthPrefx = (path: string) => `${import.meta.env.BASE_URL}images/wsa/${path}`;

const bannerImages = [
  bannerImgWidthPrefx('homepage_herosection_00.png'),
  bannerImgWidthPrefx('homepage_herosection_01.jpg'),
  bannerImgWidthPrefx('homepage_herosection_03.jpg'),
  bannerImgWidthPrefx('homepage_herosection_04.jpg'),
  bannerImgWidthPrefx('homepage_herosection_05.jpg'),
  bannerImgWidthPrefx('homepage_herosection_07.jpg'),
]

const getImageSrc = (index: number) => {
  return bannerImages[index]
}
</script>
<style lang="scss" scoped>
$swiper-bullet-color: $white-bg;
$swiper-bullet-active-color: #455861;

.home-banner {
  position: relative;
  padding-top: 0.76rem;
  max-width: 19.2rem;
  margin: auto;
  .main-banner-container {
    transition: opacity 0.5s ease;
    position: relative;
    width: 100%;
    min-height: 600px;
    &.hide {
      opacity: 0;
    }
    .banner {
      @include flexCenter;
      object-fit: contain;
      position: relative;
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
      img {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 16/9;
      }
      .banner-pagination {
        position: absolute;
        bottom: 0.24rem;
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
    padding-top: 0rem;

    .main-banner-container {
      // Maintain 16:9 aspect ratio for tablet
      height: auto;
      min-height: auto;

      .banner {
        @include flexCenter;
        height: 100%;
        position: relative;

        .slide {
          aspect-ratio: 16 / 9;
          width: 100%;
          height: auto;
          outline: 2px solid #fff;
          position: relative;
          @include flexCenter;
          padding-top: 56.25%;
          img {
            position: absolute;
            aspect-ratio: 16 / 9;
            @include autoCenter;
            width: 100%;
            height: 100%;
          }
        }

        &__title {
          white-space: normal;
          text-align: left;
          transform: translateX(0);
          line-height: normal;
          left: 0.56rem;
          bottom: 0.2rem;
          font-size: 0.48rem;
          :deep(.splits) {
            font-size: 0.32rem;
          }
          :deep(.banner-year) {
            line-height: 0.32rem;
          }
        }
        .banner-img {
          @include bgCenter(contain);
          background-position: center center;
          background-color: #000;
          height: 100%;
          width: 100%;
          min-height: 500px;
        }
        .banner-pagination {
          bottom: 0.1rem;
          :deep(.swiper-pagination-bullet) {
            opacity: 1;
            width: 0.06rem;
            height: 0.06rem;
          }
        }
      }
    }
  }
}
@include mobile {
  .home-banner {
    .home-banner-container {
      height: auto;
    }

    .main-banner-container {
      .banner {
        .slide {
          width: 100%;
        }

        &__title {
          left: 0.24rem;
          bottom: 0.1rem;
          width: 2.3rem;
          :deep(.date) {
            font-size: 0.12rem;
            line-height: 0.12rem;
          }
          :deep(.splits) {
            font-size: 0.22rem;
          }
          :deep(.banner-year) {
            font-size: 0.22rem;
            line-height: 0.22rem;
          }
        }

        .banner-img {
          @include bgCenter(contain);
          background-position: center center;
          background-color: #000;
          min-height: 400px;
        }
      }
    }
  }
}
</style>
