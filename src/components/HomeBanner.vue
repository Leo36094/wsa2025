<template>
  <div class="home-banner">
    <main class="home-banner-container">
      <div :class="['main-banner-container']">
        <div class="filter"></div>

        <div class="banner">
          <div class="banner-img"></div>
        </div>
        <HomeBannerTitle class="banner__title" />
      </div>
    </main>
  </div>

  <div class="home-banner__slide">
    <div class="photo-row" data-aos="fade-up">
      <div class="photo-item"></div>
      <div class="photo-item photo-item-1"></div>
      <div class="photo-item photo-item-2"></div>
    </div>
    <div class="slide-header">
      <div class="split-titles title">
        <span>{{ $t('home.split_title1') }}</span>
        <span>{{ $t('home.split_title2') }}</span>
        <span>{{ $t('home.split_title3') }}</span>
        <span class="year">{{ $t('home.year') }}</span>
        <div class="title-light"></div>
      </div>
      <p data-aos="fade-down" class="slide-desc">
        {{ $t('home.banner_desc') }}
      </p>
    </div>
    <div class="photo-row" data-aos="fade-up">
      <div class="photo-item photo-item-3"></div>
      <div class="photo-item photo-item-4"></div>
      <div class="photo-item photo-item-5"></div>
    </div>
    <div class="mb-photo-list" data-aos="fade-up">
      <div class="photo-item"></div>
      <div class="photo-item photo-item-3"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HomeBannerTitle from './HomeBannerTitle.vue'
</script>
<style lang="scss" scoped>
.home-banner {
  position: relative;
  top: 0;
  pointer-events: none;
  .filter {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
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
      background-image: url('/images/wsa_2025.jpg');
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

.home-banner__slide {
  background: linear-gradient(0deg, #18475b 1.87%, #002635 100%);
  padding-top: 1.6rem;
  .slide-header {
    @include flexCenter;
    @include withContainer;
    margin: 0.3rem auto;
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
      .title-light {
        position: absolute;
        top: -1rem;
        left: 0rem;
        width: 6.3rem;
        height: 6.3rem;
        background-image: url('/images/host/circle-blue.png');
        @include bgCenter(cover);
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
  .photo-row {
    position: relative;
    @include withContainer;
    @include flexCenter;
    margin: auto;
  }

  .photo-item {
    @include bgCenter(cover);
    flex-shrink: 0;
    width: 4rem;
    height: 2.43rem;
    &:not(:last-child) {
      margin-right: 0.8rem;
    }

    background-image: url('/images/wsa/homepage_s01_02.jpg');
    @for $i from 1 through 5 {
      &-#{$i} {
        background-image: url('/images/wsa/homepage_s01_0#{$i + 2}.jpg');
      }
      &-3 {
        background-image: url('/images/wsa/homepage_s01_00.png');
      }
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
    padding-top: 0.84rem;
    overflow: hidden;
    .slide-header {
      padding: 0;
      .title {
        width: 2.66rem;
        font-size: 0.48rem;
        margin-right: 0.16rem;
        span {
          line-height: 0.58rem;
        }
        .title-light {
          width: 5rem;
          height: 5rem;
          top: -0.5rem;
          left: -1rem;
        }
      }
      .slide-desc {
        width: 3.98rem;
        line-height: 0.19rem;
        font-size: 0.16rem;
        padding: 0.16rem;
      }
    }
    .photo-item {
      width: 33%;
      background-size: cover;
      height: 1.8rem;
      &:not(:last-child) {
        margin-right: 0.1rem;
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
    .photo-row {
      display: none;
    }
  }
}
</style>
