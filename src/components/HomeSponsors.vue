<template>
  <div class="home-sponsors">
    <div class="sponsors-container">
      <div class="sponsors">
        <div class="sponsors__title">
          {{ $t('home.sponsors_title') }}
        </div>
        <div class="sponsors-row">
          <Swiper class="sponsors-list" v-bind="swiperConfig">
            <SwiperSlide v-for="(slide, slideIdx) in sponsors" :key="slideIdx" class="slide">
              <div class="sponsors-item" :style="{ backgroundImage: `url(${slide})` }"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
const sponsors = Array(10)
  .fill(0)
  .map(() => {
    return `https://fakeimg.pl/176x144/`
  })

const swiperConfig = {
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  spaceBetween: 8,
  slidesPerView: 2.3,
  breakpoints: {
    744: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 7,
    },
  },
  modules: [Autoplay],
}
</script>
<style lang="scss" scoped>
.home-sponsors {
  margin: auto;
  margin-bottom: 2.16rem;
  .sponsors {
    max-width: 14.4rem;
    margin: 0 auto;
    border-radius: 0.1rem;
  }
  .sponsors__title {
    @include withContainer;
    color: #000;
    padding-left: 0.94rem;
    font-size: 0.48rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .sponsors-row {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    &:not(:last-child) {
      margin-bottom: 0.4rem;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .sponsors-list {
    white-space: nowrap;
    @include flexCenter;
    gap: 0.32rem;
    padding-left: 0.94rem;
    &:hover {
      animation-play-state: paused;
    }
    &--reverse {
      animation-direction: reverse;
    }

    .sponsors-item {
      flex-shrink: 0;
      background-color: #f5f5f5;
      border-radius: 0.08rem;
      @include flexCenter;
      @include bgCenter(cover);
      color: #000;
      width: 1.76rem;
      height: 1.44rem;
    }
  }
}
@include tablet {
  .home-sponsors {
    padding-top: 0.96rem;
    margin-bottom: 0.96rem;
    .sponsors {
      max-width: 7.44rem;
      padding: 0.4rem 0;
    }
    .sponsors__title {
      font-size: 0.48rem;
      padding-left: 0.4rem;
      margin-bottom: 0.4rem;
    }
    .sponsors-row {
      &:not(:last-child) {
        margin-bottom: 0.16rem;
      }
    }
    .sponsors-list {
      gap: 0.32rem;
      padding-left: 0.4rem;
      .sponsors-item {
        width: 1.72rem;
        height: 1.43rem;
      }
    }
  }
}

@include mobile {
  .home-sponsors {
    padding-top: 0.72rem;
    margin-bottom: 0.72rem;
    .sponsors {
      width: 100%;
      border-radius: 0;
      padding: 0.24rem 0;
    }
    .sponsors__title {
      padding-left: 0.24rem;
      font-size: 0.36rem;
      line-height: 0.43rem;
      margin-bottom: 0.24rem;
    }
    .sponsors-row {
      &:not(:last-child) {
        margin-bottom: 0.24rem;
      }
    }
    .sponsors-list {
      gap: 0.08rem;
      padding-left: 0.24rem;
      .sponsors-item {
        width: 1.27rem;
        height: 1.05rem;
      }
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
