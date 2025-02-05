<template>
  <div class="host-banner">
    <div class="first-slide__title">
      <h1>{{ $t('host.title') }}</h1>
    </div>
    <div class="first-slide" id="firstSlide">
      <div class="first-slide__photos">
        <div class="left-photo-container">
          <div
            ref="leftPhoto"
            id="leftphoto"
            class="photo-item photo-item--left"
            :style="{ backgroundImage: `url(${hostImages[0]})` }"
          ></div>
        </div>
        <div class="right-photo-container">
          <div
            ref="rightPhoto"
            id="rightPhoto"
            class="photo-item photo-item--right"
            :style="{ backgroundImage: `url(${hostImages[1]})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="second-slide" id="secondSlide">
    <div class="image-row" ref="topRow" id="topRow">
      <img ref="topFirst" id="topFirst" class="image-item" :src="hostImages[0]" alt="banner2" />
      <div data-aos="fade-up" data-aos-delay="500" class="top-first-rest" ref="topFirstRest">
        <img class="image-item" :src="hostImages[2]" alt="banner2" />
        <img class="image-item" :src="hostImages[3]" alt="banner3" />
      </div>
    </div>
    <div class="host-copy">
      <div data-aos="example-anim1" data-aos-delay="500" class="welcome-img"></div>
      <div class="welcome-title" data-aos="fade-right" data-aos-delay="500">
        <h4 class="title">{{ $t('host.welcome') }}</h4>
        <h2 class="subtitle">{{ $t('host.welcome_sub') }}</h2>
      </div>
      <p class="welcome-desc">{{ $t('host.content') }}</p>
    </div>
    <div class="image-row" ref="bottomRow">
      <div data-aos="fade-up" data-aos-offset="100" class="bottom-rest" ref="bottomRest">
        <img class="image-item" :src="hostImages[4]" alt="banner4" />
        <img class="image-item" :src="hostImages[5]" alt="banner5" />
      </div>
      <img id="secondLast" ref="secondLast" class="image-item" :src="hostImages[1]" alt="banner5" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const leftPhoto = ref<null | HTMLElement>(null)
const rightPhoto = ref<null | HTMLElement>(null)
const topRow = ref<null | HTMLElement>(null)
const bottomRow = ref<null | HTMLElement>(null)

const topFirst = ref<null | HTMLElement>(null)
const secondLast = ref<null | HTMLElement>(null)
const topFirstRest = ref<null | HTMLElement>(null)
const bottomRest = ref<null | HTMLElement>(null)

const hostImages = Array.from(
  { length: 6 },
  (_, i) =>
    `${import.meta.env.BASE_URL}images/wsa/host_section01_${(i + 1).toString().padStart(2, '0')}.jpg`,
)
console.log(hostImages)
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 1024px)': function () {
      gsap.from(leftPhoto.value, { duration: 1, opacity: 0, y: 150 })
      gsap.from(rightPhoto.value, { duration: 1, opacity: 0, y: 150 })
      // second section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-slide',
          start: '20% 100%',
          end: '50% 50%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      })
      tl.to(
        leftPhoto.value,
        {
          scale: 0.5,
          duration: 0.15,
          opacity: 0,
          y: 100,
          onComplete: () => {
            leftPhoto.value!.style.opacity = '0'
          },
          onReverseComplete: () => {
            leftPhoto.value!.style.opacity = '1'
          },
        },
        '#leftphoto',
      )
      tl.to(
        rightPhoto.value,
        {
          scale: 0.5,
          duration: 0.15,
          opacity: 0,
          y: 1000,
          onComplete: () => {
            leftPhoto.value!.style.opacity = '0'
          },
          onReverseComplete: () => {
            leftPhoto.value!.style.opacity = '1'
          },
        },
        '#rightPhoto',
      )
      gsap.to(topFirst.value, {
        scrollTrigger: {
          trigger: topFirst.value,
          start: 'top top',
          end: '100% 50%',
          scrub: 1,
        },
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
      })
      if (secondLast.value) {
        gsap.from(secondLast.value, {
          y: -500,
          scale: 1.2,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: secondLast.value,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        })
      }
    },
  })
})
</script>
<style lang="scss" scoped>
.host-banner {
  @include withContainer;
  max-width: 19.2rem;
  margin-bottom: 3rem;
  .first-slide {
    margin: auto;
    max-width: 14.4rem;
    &__title {
      overflow: hidden;
      text-align: center;
      height: 1.07rem;
      margin: 1.44rem auto;
      h1 {
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 14.29%, #ffffff 80.52%);
        font-size: 0.88rem;
        font-weight: 700;
        animation: title-slide-up 0.5s forwards;
      }
    }
    p {
      margin: auto;
      width: 6.7rem;
      font-size: 0.16rem;
      line-height: 0.2rem;
    }
    &__photos {
      padding: 0 0.6rem;
      display: flex;
      justify-content: space-between;
      position: relative;
      .left-photo-container {
        position: relative;
        @include bgCenter;
        width: 6.25rem;
        height: 3.5rem;
        max-width: 19.2rem;
      }
      .right-photo-container {
        position: relative;
        @include bgCenter;
        width: 6.25rem;
        height: 3.5rem;
      }
      .photo-item {
        @include bgCenter(cover);
        width: 6.25rem;
        height: 3.5rem;
        &--right {
          margin-top: 0.64rem;
        }
      }
    }
  }
}
.host-copy {
  max-width: 14.4rem;
  margin: auto;
  @include flexCenter;
  overflow: hidden;
  .welcome-img {
    width: 4.8rem;
    height: 3.66rem;
    @include bgCenter(100% 100%);
    background-image: url('/images/host/wsa.png');
  }
  .welcome-title {
    font-weight: 700;
    margin-right: 0.4rem;
    .title {
      font-size: 0.28rem;
    }
    .subtitle {
      font-size: 0.48rem;
    }
  }
  .welcome-desc {
    width: 5.2rem;
    font-size: 0.16rem;
    font-weight: 400;
    margin-right: auto;
  }
}
.second-slide {
  width: 100%;
  margin-bottom: 1.6rem;
  .image-row {
    display: flex;
    justify-content: space-between;
    @include withContainer;
    max-width: 14.4rem;
    /* opacity: 0; */
    .image-item {
      width: 33.33%;
      height: 3.6rem;
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
