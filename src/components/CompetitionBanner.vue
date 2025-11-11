<template>
  <div class="second-slide" :id="SECTION_ID.Competition">
    <div class="image-row" id="topRow">
      <div data-aos="fade-up" class="top-first-rest" ref="topFirstRest">
        <img class="image-item" :src="competitionImages[0]" alt="banner0" />
        <img class="image-item" :src="competitionImages[2]" alt="banner2" />
        <img class="image-item" :src="competitionImages[3]" alt="banner3" />
      </div>
    </div>
    <div class="host-copy">
      <div data-aos="example-anim1" class="welcome-img"></div>
      <div class="welcome-title" data-aos="fade-right" data-aos-delay="500">
        <h2 class="title">{{ $t('competition.title_tag') }}</h2>
        <h2 class="subtitle">{{ $t('competition.title_competition') }}</h2>
      </div>
      <p class="welcome-desc" v-html="$t('competition.content')"></p>
    </div>
    <div class="image-row" ref="bottomRow">
      <div data-aos="fade-up" class="bottom-rest" ref="bottomRest">
        <img class="image-item" :src="competitionImages[4]" alt="banner4" />
        <img class="image-item" :src="competitionImages[5]" alt="banner5" />
        <img class="image-item" :src="competitionImages[1]" alt="banner6" />
      </div>
    </div>

    <!-- Venue Map Swiper -->
    <!-- <div class="venue-swiper-container" data-aos="fade-up">
      <Swiper class="venue-swiper" v-bind="swiperConfig">
        <SwiperSlide v-for="(image, index) in venueImages" :key="index" class="venue-slide">
          <img
            :src="image"
            :alt="`Venue floor plan ${index + 1}`"
            class="venue-image"
            @click="showLightbox(index)"
          />
        </SwiperSlide>
      </Swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
      :max-zoom="1.2"
      :min-zoom="1"
      teleport="body"
    /> -->
  </div>
</template>

<script lang="ts" setup>
// import { computed, watch } from 'vue'
// import { useI18n } from 'vue-i18n'
// import { useEasyLightbox } from 'vue-easy-lightbox'
// import 'swiper/css'
// import 'swiper/css/autoplay'
// import 'swiper/css/navigation'
// import { A11y, Autoplay, Navigation } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import { SECTION_ID } from '@/types/page_section'

// const { locale } = useI18n({ useScope: 'global' })

const competitionImages = Array.from(
  { length: 6 },
  (_, i) =>
    `${import.meta.env.BASE_URL}images/wsa/competition_section01_${(i + 1).toString().padStart(2, '0')}.jpg`,
)

// Venue images based on language
// const venueImages = computed(() => {
//   const lang = locale.value === 'tw' ? 'zh' : 'en'
//   return [
//     `${import.meta.env.BASE_URL}images/competition/hall1_1f_${lang}.png`,
//     `${import.meta.env.BASE_URL}images/competition/hall2_1f_${lang}.png`,
//     `${import.meta.env.BASE_URL}images/competition/hall2_4f_${lang}.png`,
//   ]
// })

// const swiperConfig = {
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
//   },
//   navigation: {
//     prevEl: '.swiper-button-prev',
//     nextEl: '.swiper-button-next',
//   },
//   modules: [Autoplay, Navigation, A11y],
// }

// Lightbox setup
// const {
//   show,
//   onHide,
//   visibleRef,
//   indexRef,
//   imgsRef
// } = useEasyLightbox({
//   imgs: venueImages.value,
//   initIndex: 0
// })

// // Update lightbox images when language changes
// watch(venueImages, (newImages) => {
//   imgsRef.value = newImages
// })

// // Show lightbox at specific index
// const showLightbox = (index: number) => {
//   indexRef.value = index
//   show()
// }
</script>
<style lang="scss" scoped>
.host-copy {
  max-width: 14.4rem;
  margin: auto;
  @include flexCenter;
  overflow: hidden;
  .welcome-img {
    width: 4.8rem;
    height: 3.66rem;
    align-self: flex-end;
    @include bgCenter(100% 100%);
    background-image: url('/images/host/wsa.png');
  }
  .welcome-title {
    font-weight: 700;
    margin-right: 0.4rem;
    margin-left: auto;
    .title {
      font-size: 0.28rem;
    }
    .subtitle {
      font-size: 0.48rem;
    }
  }
  :deep(.welcome-desc) {
    width: 5.2rem;
    font-size: 0.16rem;
    font-weight: 400;
    margin-right: auto;
    text-align: left;
    line-height: 1.5;
    margin: 0.2rem auto 0.2rem 0;
  }
}
.second-slide {
  width: 100%;
  @include withContainer;
  &:last-child {
    padding-bottom: 1.2rem;
  }
  .image-row {
    display: flex;
    justify-content: space-between;
    @include withContainer;
    max-width: 19.2rem;
    .image-item {
      width: 4.8rem;
      height: 2.9rem;
      object-fit: cover;
      flex: 1;
      aspect-ratio: 16/9;
    }
  }
  #topFirst {
    transform: translate(30%, -100%);
    opacity: 0;
    scale: 1.2;
  }

  .top-first-rest {
    display: flex;
    justify-content: space-between;
  }
  .bottom-rest {
    display: flex;
    justify-content: space-between;
  }
}

.venue-swiper-container {
  @include withContainer;
  max-width: 19.2rem;
  padding: 1.2rem 0;

  .venue-swiper {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    position: relative;

    .venue-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .venue-image {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 0.12rem;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);

    &::after {
      font-size: 0.2rem;
      font-weight: 700;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  :deep(.swiper-button-prev) {
    left: 0.24rem;
  }

  :deep(.swiper-button-next) {
    right: 0.24rem;
  }

  :deep(.swiper-button-disabled) {
    opacity: 0.3;
  }
}

@include tablet {
  .competition-banner {
    width: 100%;
    .first-slide {
      width: 7.5rem;
      max-width: 100%;
      &__photos {
        padding: 0 0.4rem;
        flex-direction: column;
      }
      &__title {
        margin: 1.1rem auto 0.32rem auto;
        h2 {
          font-size: 0.48rem;
        }
      }
      .left-photo-container,
      .right-photo-container {
        width: 100%;
        height: 2.7rem;
        display: flex;
      }
      .right-photo-container {
        justify-content: flex-end;
      }
      .photo-item {
        width: 4.8rem;
        height: 2.7rem;
      }
    }
  }
  .host-copy {
    flex-direction: column;
    align-items: flex-start;
    width: 6.16rem;
    padding: 0.32rem 0;
    margin: 0 auto;
    .welcome-img {
      display: none;
    }
    .welcome-title {
      display: flex;
      align-items: center;
      margin-left: 0;
      margin-bottom: 0.24rem;
      .title {
        margin-right: 0.05rem;
      }
      .title,
      .subtitle {
        font-size: 0.36rem;
        font-weight: 700;
      }
    }
    :deep(.welcome-desc) {
      font-size: 0.16rem;
      width: 100%;
      margin: 0 auto;
    }
  }
  .second-slide {
    width: 100%;
    &:last-child {
      padding-bottom: 0.8rem;
    }
    .image-row {
      display: flex;
      justify-content: space-between;
      max-width: 100%;
      overflow: hidden;
      .image-item {
        width: 2.48rem;
        height: 1.7rem;
        object-fit: cover;
        flex: 1;
        aspect-ratio: 16/9;
      }
    }
  }

  .venue-swiper-container {
    max-width: 90%;
    padding: 0.8rem 0.24rem;

    .venue-swiper {
      max-width: 100%;
    }

    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      width: 0.4rem;
      height: 0.4rem;

      &::after {
        font-size: 0.18rem;
      }
    }

    :deep(.swiper-button-prev) {
      left: -0.2rem;
    }

    :deep(.swiper-button-next) {
      right: -0.2rem;
    }
  }
}

@include mobile {
  .host-copy {
    max-width: 100%;
    padding: 0 0.24rem 0.24rem 0.24rem;
    .welcome-title {
      margin-top: 0.24rem;
      margin-bottom: 0.16rem;
      flex-wrap: wrap;
      justify-content: center;
      .title {
        margin-right: 0.05rem;
      }
      .title,
      .subtitle {
        font-size: 0.36rem;
        font-weight: 700;
        line-height: normal;
      }
    }
    .welcome-desc {
      font-size: 0.16rem;
      width: 100%;
      margin: 0 auto;
    }
  }
  .second-slide {
    &:last-child {
      padding-bottom: 0.24rem;
    }
    .image-row {
      border: 1px solid #fff;
      border-left: none;
      border-right: none;
      .image-item {
        border-radius: 0.1rem;
        width: 1.61rem;
        height: 0.97rem;
      }
    }
    #topRow {
      .image-item:last-child {
        display: none;
      }
    }
    #secondLast {
      display: none;
    }
    #topFirst {
      transform: translate(0, 0);
      opacity: 1;
      scale: 1;
    }
  }

  .venue-swiper-container {
    padding: 0.24rem 0rem;
    .venue-swiper {
      max-width: 100%;
    }
    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      display: none;

      &::after {
        font-size: 0.16rem;
      }
    }
  }
}

@keyframes fadedown {
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
[data-aos='example-anim1'] {
  transform: translateX(-100%);
  &.aos-animate {
    animation: SpinFadeInFromLeft 1s ease forwards;
  }
}

@keyframes SpinFadeInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(-360deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}
</style>
