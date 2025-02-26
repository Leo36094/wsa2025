<template>
  <section
    class="second-slide"
    id="host"
    :aria-labelledby="`${$t('host.welcome')}${$t('host.welcome_sub')}`"
  >
    <div class="image-row" ref="topRow" role="region" aria-label="Top Row Images">
      <div data-aos="fade-up" class="top-first-rest" ref="topFirstRest">
        <img class="image-item" :src="hostImages[0]" alt="banner2" loading="lazy" />
        <img class="image-item" :src="hostImages[2]" alt="banner2" loading="lazy" />
        <img class="image-item" :src="hostImages[3]" alt="banner3" loading="lazy" />
      </div>
    </div>
    <div class="host-copy" role="region" :aria-label="$t('host.welcome')">
      <div class="welcome-title" data-aos="fade-right">
        <h1 class="title">{{ $t('host.welcome') }}</h1>
        <h2 class="subtitle">{{ $t('host.welcome_sub') }}</h2>
      </div>
      <p class="welcome-desc">
        {{ $t('host.content') }}
        <a
          class="welcome-desc__link"
          href="https://eng.taiwan.net.tw/"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="$t('host.visit_website')"
          >https://eng.taiwan.net.tw/</a
        >
      </p>
    </div>
    <div class="image-row" ref="bottomRow" role="region" aria-label="Bottom Row Images">
      <div data-aos="fade-up" data-aos-offset="0" class="bottom-rest" ref="bottomRest">
        <img class="image-item" :src="hostImages[4]" alt="banner4" loading="lazy" />
        <img class="image-item" :src="hostImages[5]" alt="banner5" loading="lazy" />
        <img class="image-item" :src="hostImages[1]" alt="banner6" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const hostImages = Array.from(
  { length: 6 },
  (_, i) =>
    `${import.meta.env.BASE_URL}images/wsa/host_section01_${(i + 1).toString().padStart(2, '0')}.jpg`,
)
</script>
<style lang="scss" scoped>
.host-copy {
  max-width: 14.4rem;
  margin: auto;
  @include flexCenter;
  padding: 0.4rem 0.75rem 0.4rem 0.81rem;
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
    flex-shrink: 0;
    font-size: 0.48rem;
  }
  .welcome-desc {
    /* width: 5.2rem; */
    font-size: 0.16rem;
    font-weight: 400;
    margin-right: auto;
    text-align: justify;
    .welcome-desc__link {
      display: block;
      text-decoration: underline;
    }
  }
}
.second-slide {
  width: 100%;
  .image-row {
    display: flex;
    justify-content: space-between;
    @include withContainer;
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
  #secondLast {
    transform: translate(0, -300%);
    opacity: 0;
    scale: 0.5;
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
  .host-banner {
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
    padding: 0.32rem 0.64rem;
    margin: 0 auto;
    .welcome-img {
      display: none;
    }
    .welcome-title {
      display: flex;
      align-items: center;
      flex-direction: column;
      align-items: flex-start;
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
  .host-banner {
    .bloom-bg {
      display: none;
    }
    .first-slide {
      height: 100%;
      width: 100%;
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
      margin-bottom: 0.164em;
      flex-wrap: wrap;
      justify-content: center;
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
    .image-row {
      .image-item {
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
