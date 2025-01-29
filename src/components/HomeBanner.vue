<template>
  <div class="home-banner">
    <main
      class="home-banner-container"
      :style="
        scrollNow >= 10 && {
          opacity: 0,
        }
      "
    >
      <div class="main-banner-container">
        <div class="filter"></div>
        <div class="banner">
          <Transition name="fade" mode="out-in">
            <div v-if="scrollNow >= 20" class="banner-img"></div>
            <div v-else class="banner-img"></div>
          </Transition>
        </div>
      </div>
    </main>

    <HomeBannerTitle v-if="scrollNow < 5" class="banner__title" />
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
        <div
          class="photo-item"
          data-aos="fade-down"
          :style="{
            backgroundImage: `url(${'https://fakeimg.pl/400x243/'})`,
          }"
        ></div>
        <div
          class="photo-item photo-item-1"
          data-aos="fade-up-left"
          data-aos-offset="100"
          :style="{
            backgroundImage: `url(${'https://fakeimg.pl/400x243/'})`,
          }"
        ></div>
        <div
          class="photo-item photo-item-2"
          data-aos="fade-up-right"
          data-aos-offset="100"
          :style="{
            backgroundImage: `url(${'https://fakeimg.pl/400x243/'})`,
          }"
        ></div>
        <div
          class="photo-item photo-item-3"
          data-aos="fade-up"
          data-aos-offset="100"
          :style="{
            backgroundImage: `url(${'https://fakeimg.pl/400x243/'})`,
          }"
        ></div>
        <div
          class="photo-item photo-item-4"
          data-aos="fade-up"
          :style="{
            backgroundImage: `url(${'https://fakeimg.pl/400x243/'})`,
          }"
        ></div>
        <div
          class="photo-item photo-item-5"
          data-aos="fade-up-left"
          ref="lastPhoto"
          :style="{
            backgroundImage: `url(${'https://fakeimg.pl/400x243/'})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HomeBannerTitle from './HomeBannerTitle.vue'
const scrollNow = ref(0)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
  console.log(Math.min(100, percentOfScreenHeightScrolled * 100))
  htmlElement.style.setProperty(
    '--scroll',
    Math.min(100, percentOfScreenHeightScrolled * 100).toString(),
  )
  scrollNow.value = Math.min(100, percentOfScreenHeightScrolled * 100)
}

onMounted(() => {
  window.addEventListener('scroll', setScrollVar)
})
onUnmounted(() => {
  window.removeEventListener('scroll', setScrollVar)
})
</script>
<style lang="scss" scoped>
.home-banner {
  position: sticky;
  top: 0;
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
      background-image: url('/images/wsa_banner.jpg');
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
      top: 8.01rem;
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
    translate: 0 calc(-1% * (max(var(--scroll), 1) - 25) * 100 / 50);
    translate: 0 calc(-1% * (max(var(--scroll), 1) - 25) * 100 / 150);
    @for $i from 1 through 5 {
      &-#{$i} {
        translate: 0 calc(-1% * (max(var(--scroll), 1) - 25) * 100 / 200);
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
}
</style>
