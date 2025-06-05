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
      <p class="welcome-desc">{{ $t('competition.content') }}</p>
    </div>
    <div class="image-row" ref="bottomRow">
      <div data-aos="fade-up" class="bottom-rest" ref="bottomRest">
        <img class="image-item" :src="competitionImages[4]" alt="banner4" />
        <img class="image-item" :src="competitionImages[5]" alt="banner5" />
        <img class="image-item" :src="competitionImages[1]" alt="banner6" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SECTION_ID } from '@/types/page_section'
const competitionImages = Array.from(
  { length: 6 },
  (_, i) =>
    `${import.meta.env.BASE_URL}images/wsa/competition_section01_${(i + 1).toString().padStart(2, '0')}.jpg`,
)
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
  .welcome-desc {
    width: 5.2rem;
    font-size: 0.16rem;
    font-weight: 400;
    margin-right: auto;
    text-align: left;
  }
}
.second-slide {
  width: 100%;
  @include withContainer;
  margin-bottom: 1.2rem;
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
    margin-bottom: 0.8rem;
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
