<template>
  <div class="home-banner__slide">
    <div class="gallery-bg"></div>
    <div class="photo-row first-row" data-aos="fade-up">
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
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.home-banner__slide {
  background: $white-bg;
  height: 100%;
  position: relative;
  .gallery-bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    background-image: url('/images/wsa/line.png');
    @include bgCenter(cover);
  }
  .slide-header {
    @include flexCenter;
    @include withContainer;
    margin: 0.32rem auto;
    justify-content: center;
    position: relative;
    color: $black-primary;

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
    }
    .slide-desc {
      width: 4.8rem;
      font-size: 0.16rem;
      background: #0000000d;
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
    &.first-row {
      padding-top: 1.6rem;
    }
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
}
@include tablet() {
  .home-banner__slide {
    overflow: hidden;
    .gallery-bg {
      background-position: 0% 85%;
      background-size: 100% auto;
    }
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
    .photo-row {
      width: 100%;
      &.first-row {
        padding-top: 0.72rem;
      }
    }
    .photo-item {
      width: 33.33%;
      background-size: cover;
      height: 1.8rem;
      &:not(:last-child) {
        margin-right: 0rem;
      }
    }
  }
}
@include mobile {
  .home-banner__slide {
    .slide-container {
      display: none;
    }
    .gallery-bg {
      background-position: top;
      top: 1.9rem;
      height: 7.56rem;
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
    .photo-row {
      .photo-item {
        height: 1rem;
        width: 50%;
        &.photo-item-2,
        &.photo-item-5 {
          display: none;
        }
      }
    }
  }
}
</style>
