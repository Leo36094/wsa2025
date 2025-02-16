<template>
  <div class="home-banner">
    <main class="home-banner-container">
      <div :class="['main-banner-container']">
        <Swiper class="banner" v-bind="swiperConfig">
          <SwiperSlide v-for="index in 3" :key="index" class="slide">
            <div :class="['banner-img', `banner-img-${index}`]"></div>
          </SwiperSlide>
          <div class="banner-pagination"></div>
          <div class="filter"></div>
        </Swiper>
        <HomeBannerTitle class="banner__title" />
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import HomeBannerTitle from './HomeBannerTitle.vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const swiperConfig = {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: true,
  modules: [Autoplay, Pagination],
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
        @for $i from 1 through 3 {
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

      :deep(.swiper-pagination) {
        position: absolute;
        bottom: 0.32rem;
        .swiper-pagination-bullet {
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
