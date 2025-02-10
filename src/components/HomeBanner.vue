<template>
  <div class="home-banner">
    <main class="home-banner-container">
      <div :class="['main-banner-container', { hide: scrollNow > 5 }]">
        <div class="filter"></div>

        <div class="banner">
          <div class="banner-img"></div>
        </div>
        <HomeBannerTitle v-if="scrollNow < 5" class="banner__title" />
      </div>
    </main>
  </div>

  <div class="home-banner__slide">
    <header ref="header" class="slide-header">
      <div class="split-titles title">
        <span>{{ $t('home.split_title1') }}</span>
        <span>{{ $t('home.split_title2') }}</span>
        <span>{{ $t('home.split_title3') }}</span>
        <span class="year">{{ $t('home.year') }}</span>
      </div>
      <p data-aos="fade-down" class="slide-desc">
        {{ $t('home.banner_desc') }}
      </p>
    </header>
    <div class="slide-container">
      <div class="photos">
        <div class="photo-item" data-aos="fade-down"></div>
        <div class="photo-item photo-item-1" data-aos="fade-up-left" data-aos-offset="100"></div>
        <div class="photo-item photo-item-2" data-aos="fade-up-right" data-aos-offset="100"></div>
        <div class="photo-item photo-item-3" data-aos="fade-up" data-aos-offset="100"></div>
        <div class="photo-item photo-item-4" data-aos="fade-up"></div>
        <div class="photo-item photo-item-5" data-aos="fade-up-left" ref="lastPhoto"></div>
      </div>
    </div>
    <div class="mb-photo-list" data-aos="fade-down">
      <div class="photo-item" data-aos="fade"></div>
      <div class="photo-item photo-item-3" data-aos="fade-up" data-aos-offset="100"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HomeBannerTitle from './HomeBannerTitle.vue'

const SCROLL_WIDTH = 743
const scrollNow = ref(0)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
  htmlElement.style.setProperty(
    '--scroll',
    Math.min(100, percentOfScreenHeightScrolled * 100).toString(),
  )
  scrollNow.value = Math.min(100, percentOfScreenHeightScrolled * 100)
}
function checkMobile() {
  if (window.innerWidth < SCROLL_WIDTH) {
    window.removeEventListener('scroll', setScrollVar)
  } else {
    window.addEventListener('scroll', setScrollVar)
  }
}

function getScrollPosition() {
  if (window.innerWidth < SCROLL_WIDTH) {
    scrollNow.value = document.documentElement.scrollTop
  }
}

onMounted(() => {
  if (window.innerWidth > SCROLL_WIDTH) {
    window.addEventListener('scroll', setScrollVar)
  } else {
    window.addEventListener('scroll', getScrollPosition)
  }
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  if (window.innerWidth > SCROLL_WIDTH) {
    window.removeEventListener('scroll', setScrollVar)
  } else {
    window.removeEventListener('scroll', getScrollPosition)
  }
  window.removeEventListener('resize', checkMobile)
})
</script>
<style lang="scss" scoped>
.home-banner {
  position: sticky;
  top: 0;
  pointer-events: none;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(16, 35, 36, 0) 0%, #102324 89.74%);
    z-index: 1;
  }
  .main-banner-container {
    height: 100vh;
    transition: opacity 0.5s ease;
    position: relative;
    &.hide {
      opacity: 0;
    }
  }
  .banner {
    @include flexCenter;
    height: 100%;
    position: relative;
    .banner-img {
      @include bgCenter(cover);
      height: 100%;
      width: 100%;
      background-color: $main-bg;
      background-image: url('/images/wsa/homepage_s01_01.jpg');
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
      bottom: 1.16rem;
      transform: translate(-50%);
      white-space: nowrap;
    }
  }
  background-color: transparent;
}

.slide-header {
  translate: 0 calc(1% * (max(var(--scroll), 25) - 25) * 100 / 55);
  @include flexCenter;
  @include withContainer;
  margin: auto;
  justify-content: center;
  position: relative;
  z-index: 20;
  .title,
  .split-titles {
    display: flex;
    flex-direction: column;
    font-size: 0.88rem;
    font-weight: 700;
    width: 4.87rem;
    margin-right: 0.92rem;
    span {
      line-height: 1.06rem;
    }
    .year {
      color: #c8e14b;
    }
  }
  .slide-desc {
    width: 4.8rem;
    font-size: 0.16rem;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%);
    line-height: 0.193rem;
    backdrop-filter: blur(0.4rem);
    padding: 0.56rem;
    text-align: justify;
  }
}
.home-banner__slide {
  .slide-container {
    position: relative;
    @include withContainer;
    height: 100svh;
    margin: auto;
    @include flexCenter;
  }

  .photo-item {
    @include bgCenter;
    flex-shrink: 0;
    width: 4rem;
    height: 2.31rem;
    position: absolute;
    top: 0.32rem;
    left: 0.64rem;
    translate: 0 calc(-1% * (max(var(--scroll), 1) - 25) * 100 / 150);
    background-image: url('/images/wsa/homepage_s01_02.jpg');
    @for $i from 1 through 5 {
      &-#{$i} {
        translate: 0 calc(-1% * (max(var(--scroll), 1) - 25) * 100 / 200);
        background-image: url('/images/wsa/homepage_s01_0#{$i + 2}.jpg');
      }
    }
    &-1 {
      top: 4.56rem;
      left: 2.96rem;
    }
    &-2 {
      top: 7.38rem;
      left: 0.4rem;
    }
    &-3 {
      top: 1.3rem;
      left: 9.76rem;
    }
    &-4 {
      top: 6.16rem;
      left: 10rem;
    }
    &-5 {
      top: 7.66rem;
      left: 7.58rem;
    }
  }
  .mb-photo-list {
    display: none;
  }
}

@include tablet() {
  .home-banner {
    position: relative;
    top: 0;
    pointer-events: none;
    .banner {
      @include flexCenter;
      height: 100%;
      position: relative;
      &__title {
        white-space: normal;
        text-align: left;
        left: 0.56rem;
        bottom: 0.56rem;
        transform: none;
      }
    }
  }
  .home-banner__slide {
    padding-top: 0;
    overflow: hidden;
    .slide-header {
      padding: 0;
      translate: 0 calc(1% * (max(var(--scroll), 50) - 0) * 120 / 100);
      .title {
        width: 2.66rem;
        font-size: 0.48rem;
        margin-right: 0.16rem;
        span {
          line-height: 0.58rem;
        }
      }
      .slide-desc {
        width: 3.98rem;
        height: 4.12rem;
        line-height: 0.19rem;
        font-size: 0.16rem;
        padding: 0.16rem;
      }
    }
    .photo-item {
      width: 2.96rem;
      height: 1.8rem;
      top: 2.02rem;
      left: -0.14rem;
      translate: 0 calc(-1% * (max(var(--scroll), 25)) * 100 / 100);
      @for $i from 1 through 5 {
        &-#{$i} {
          translate: 0 calc(-1% * (max(var(--scroll), 25)) * 100 / 100);
        }
      }
      &-1 {
        top: 5.22rem;
        left: 0.7rem;
      }
      &-2 {
        top: 7.31rem;
        left: -0.32rem;
      }
      &-3 {
        top: 2.81rem;
        left: 5.33rem;
      }
      &-4 {
        top: 6.4rem;
        left: 5.51rem;
      }
      &-5 {
        top: 7.51rem;
        left: 3.72rem;
      }
    }
  }
}
@include mobile {
  .home-banner {
    .banner {
      &__title {
        left: 0.24rem;
        bottom: 0.68rem;
      }
    }
  }
  .home-banner__slide {
    padding-top: 0.76rem;
    .slide-container {
      display: none;
    }
    .slide-header {
      translate: 0;
      flex-direction: column;
      padding: 0 0.24rem;
      height: 100%;
      .title {
        width: 100%;
        font-size: 0.36rem;
        margin-right: 0rem;
        margin-bottom: 0.16rem;
        span {
          line-height: 0.43rem;
        }
      }
      .slide-desc {
        width: 100%;
        height: 100%;
        padding: 0;
        background: none;
      }
    }
    .mb-photo-list {
      @include flexCenter;
      height: 1.1rem;
      position: relative;
      margin-top: 0.32rem;
      margin-bottom: 0.99rem;
      .photo-item {
        position: relative;
        translate: 0;
        top: 0;
        left: 0;
        width: 1.62rem;
        height: 1.1rem;
        @include bgCenter(cover);
      }
    }
    .photos {
      display: none;
    }
  }
}
</style>
