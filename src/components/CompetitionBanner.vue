<template>
  <div class="competition-banner">
    <div class="first-slide__title">
      <h1>{{ $t('competition.title') }}</h1>
    </div>
    <div class="first-slide" id="firstSlide">
      <div class="bloom-bg"></div>
      <div class="first-slide__photos">
        <div class="left-photo-container">
          <div
            ref="leftPhoto"
            id="leftphoto"
            class="photo-item photo-item--left"
            :style="{ backgroundImage: `url(${competitionImages[0]})` }"
          ></div>
        </div>
        <div class="right-photo-container">
          <div
            ref="rightPhoto"
            id="rightPhoto"
            class="photo-item photo-item--right"
            :style="{ backgroundImage: `url(${competitionImages[1]})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="second-slide">
    <div class="image-row" ref="topRow" id="topRow">
      <img
        ref="topFirst"
        id="topFirst"
        class="image-item"
        :src="competitionImages[0]"
        alt="banner2"
      />
      <div data-aos="fade-up" data-aos-delay="500" class="top-first-rest" ref="topFirstRest">
        <img class="image-item" :src="competitionImages[2]" alt="banner2" />
        <img class="image-item" :src="competitionImages[3]" alt="banner3" />
      </div>
    </div>
    <div class="host-copy">
      <div data-aos="example-anim1" data-aos-delay="500" class="welcome-img"></div>
      <div class="welcome-title" data-aos="fade-right" data-aos-delay="500">
        <h2 class="title">{{ $t('competition.title_tag') }}</h2>
        <h2 class="subtitle">{{ $t('competition.title_competition') }}</h2>
      </div>
      <p class="welcome-desc">{{ $t('competition.content') }}</p>
    </div>
    <div class="image-row" ref="bottomRow">
      <div data-aos="fade-up" data-aos-offset="100" class="bottom-rest" ref="bottomRest">
        <img class="image-item" :src="competitionImages[4]" alt="banner4" />
        <img class="image-item" :src="competitionImages[5]" alt="banner5" />
      </div>
      <img
        id="secondLast"
        ref="secondLast"
        class="image-item"
        :src="competitionImages[1]"
        alt="banner5"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const leftPhoto = ref<null | HTMLElement>(null)
const rightPhoto = ref<null | HTMLElement>(null)

const topFirst = ref<null | HTMLElement>(null)
const secondLast = ref<null | HTMLElement>(null)

const competitionImages = Array.from(
  { length: 6 },
  (_, i) =>
    `${import.meta.env.BASE_URL}images/wsa/competition_section01_${(i + 1).toString().padStart(2, '0')}.jpg`,
)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.matchMedia({
    // desktop
    '(min-width: 750px)': function () {
      gsap.from(leftPhoto.value, { duration: 0.5, opacity: 0, y: 150, delay: 0.5 })
      gsap.from(rightPhoto.value, { duration: 1, opacity: 0, y: 150, delay: 0.5 })
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
          y: 1000,
          onComplete: () => {
            leftPhoto.value!.style.opacity = '0'
          },
          onReverseComplete: () => {
            leftPhoto.value!.style.opacity = '1'
            leftPhoto.value!.style.transform = 'translate(0, 0)'
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
          y: 800,
          onComplete: () => {
            rightPhoto.value!.style.opacity = '0'
          },
          onReverseComplete: () => {
            rightPhoto.value!.style.opacity = '1'
            rightPhoto.value!.style.transform = 'translate(0, 0)'
          },
        },
        rightPhoto.value?.clientTop,
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

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>
<style lang="scss" scoped>
.competition-banner {
  @include withContainer;
  max-width: 19.2rem;
  height: 100vh;
  .first-slide {
    margin: auto;
    max-width: 14.4rem;
    position: relative;
    .bloom-bg {
      position: absolute;
      @include bgCenter(100% 100%);
      width: 6.3rem;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      height: 6.3rem;
      background-image: url('/images/host/circle-blue.png');
    }
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
      margin-bottom: 0.46rem;
      .left-photo-container {
        position: relative;
        @include bgCenter;
        width: 6.25rem;
        height: 3.5rem;
      }
      .right-photo-container {
        position: relative;
        @include bgCenter;
        width: 6.25rem;
        height: 3.5rem;
      }
      .photo-item {
        @include bgCenter;
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
    text-align: justify;
  }
}
.second-slide {
  width: 100%;
  @include withContainer;
  margin-bottom: 1.6rem;
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
        h1 {
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
      margin-right: 0;
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
    .welcome-desc {
      font-size: 0.16rem;
      width: 100%;
      margin: 0 auto;
    }
  }
  .second-slide {
    width: 100%;
    margin-bottom: 1.6rem;
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
}

@include mobile {
  .competition-banner {
    height: auto;
    .bloom-bg {
      display: none;
    }
    .first-slide {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
      &__photos {
        padding: 0 0.24rem;
      }
      &__title {
        height: auto;
        margin: 0.32rem auto;
        h1 {
          font-size: 0.36rem;
        }
      }
      .left-photo-container,
      .right-photo-container {
        height: auto;
      }
      .photo-item {
        width: 2.16rem;
        height: 1.22rem;
        &--right {
          margin-top: 0.3rem;
        }
      }
    }
  }
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
