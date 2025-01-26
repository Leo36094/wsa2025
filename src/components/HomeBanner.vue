<template>
  <div class="home-banner">
    <main class="home-banner-container" @click="manualSwitch">
      <Transition name="fade" mode="out-in">
        <template v-if="currentView === 0">
          <div class="main-banner-container">
            <div class="filter"></div>
            <div class="banner">
              <div
                class="banner-img"
                :style="{ backgroundImage: `url(/images/wsa_banner.jpg)` }"
              ></div>
              <HomeBannerTitle class="banner__title" />
            </div>
          </div>
        </template>
        <div class="home-banner__slide" v-else>
          <header class="slide-header">
            <HomeBannerTitle class="title" />
            <p class="slide-desc">
              {{ $t('home.banner_desc') }}
            </p>
          </header>
          <div class="photos">
            <div class="photos__row photos__row--top">
              <div class="photos__row-container">
                <div
                  class="photo-item"
                  v-for="photo in rowPhotos.slice(0, 5)"
                  :key="photo"
                  :style="{ backgroundImage: `url(${photo})` }"
                ></div>
              </div>
            </div>
            <div class="photos__row photos__row--bottom">
              <div class="photos__row-container">
                <div
                  class="photo-item"
                  v-for="photo in rowPhotos.slice(5)"
                  :key="photo"
                  :style="{ backgroundImage: `url(${photo})` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import HomeBannerTitle from './HomeBannerTitle.vue'

const currentView = ref(0)
const slideInterval = ref<null | ReturnType<typeof setInterval>>(null)

const rowPhotos = Array(10)
  .fill(0)
  .map(() => {
    // return `/images/banner${idx + 1}.png`
    return `https://fakeimg.pl/480x311/`
  })
function switchView() {
  currentView.value = currentView.value === 0 ? 1 : 0
}

function manualSwitch() {
  if (slideInterval.value) clearInterval(slideInterval.value)
  switchView()
  slideInterval.value = setInterval(switchView, 10000)
}

onMounted(() => {
  slideInterval.value = setInterval(switchView, 10000)
})
</script>
<style lang="scss" scoped>
.home-banner {
  position: relative;
  overflow: hidden;
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
    height: 9.74rem;
    position: relative;
  }
  .home-banner-container {
    height: 9.74rem;
    position: relative;
  }
  .banner {
    @include flexCenter;
    height: 100%;
    position: relative;
    .banner-img {
      @include bgCenter(cover);
      height: 9.74rem;
      width: 100%;
    }
    &__title {
      position: absolute;
      bottom: 0.63rem;
      width: 100%;
      text-align: center;
      left: 1rem;
      z-index: 2;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &__slide {
    .slide-header {
      width: 12.45rem;
      padding-top: 0.55rem;
      margin: 0 auto 0.58rem auto;
      .title {
        margin-bottom: 0.3rem;
      }
      .slide-desc {
        width: 4.8rem;
        font-size: 0.16rem;
        line-height: 0.193rem;
      }
    }
    .photos {
      @include flexCenter(column);
      .photos__row {
        overflow: auto;
        width: 14.4rem;
        margin-bottom: 0.25rem;

        &--top {
          margin-left: 2rem;
        }

        &--bottom {
          margin-right: 2rem;
        }
      }
      .photos__row-container {
        width: 100%;
        @include flexCenter;
      }

      .photo-item {
        @include bgCenter;
        flex-shrink: 0;
        width: 4.8rem;
        height: 3.11rem;
      }
    }
  }
}
</style>
