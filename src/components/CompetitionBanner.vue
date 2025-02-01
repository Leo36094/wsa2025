<template>
  <div class="competition-banner">
    <div class="first-slide__title">
      <h1>{{ $t('competition.title') }}</h1>
    </div>
    <div class="first-slide">
      <div class="first-slide__photos">
        <div data-aos="fade-down-right" data-aos-delay="500" class="photo-item" :style="{ backgroundImage: `url(${hostBanner1})` }"></div>
        <div data-aos="fade-down-left" data-aos-delay="500" class="photo-item" :style="{ backgroundImage: `url(${hostBanner2})` }"></div>
      </div>
    </div>
  </div>
  <div class="second-slide">
    <div class="image-row">
      <img class="image-item":src="hostBanner1" alt="banner1"></img>
      <img class="image-item":src="hostBanner2" alt="banner2"></img>
      <img class="image-item":src="hostBanner3" alt="banner3"></img>
    </div>
    <div class="host-copy">
      <div class="welcome-img"></div>
      <div class="welcome-title">
        <h4 class="title">{{ $t('competition.title_tag') }}</h4>
        <h2 class="subtitle">{{ $t('competition.title_competition') }}</h2>
      </div>
      <p class="welcome-desc">{{ $t('competition.content') }}</p>
    </div>
    <div class="image-row">
      <img class="image-item":src="hostBanner4" alt="banner4"></img>
      <img class="image-item":src="hostBanner5" alt="banner5"></img>
      <img class="image-item":src="hostBanner6" alt="banner6"></img>
    </div>
  </div>
</template>

<script lang="ts" setup>
import hostBanner1 from '/images/host/host-banner1.png'
import hostBanner2 from '/images/host/host-banner2.png'
import hostBanner3 from '/images/host/host-banner3.png'
import hostBanner4 from '/images/host/host-banner4.png'
import hostBanner5 from '/images/host/host-banner5.png'
import hostBanner6 from '/images/host/host-banner6.png'

</script>
<style lang="scss" scoped>
.competition-banner {
  @include withContainer;
  max-width: 19.2rem;
  padding-top: 0.64rem;
  margin-bottom: 1.38rem;
  .first-slide {
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
      .photo-item {
        @include bgCenter;
        width: 6.25rem;
        height: 3.5rem;
        &:last-child {
          margin-top: 0.64rem;
        }
      }
    }
  }
}
.host-copy {
  max-width: 19.2rem;
  margin: auto;
  @include flexCenter;
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
  margin-bottom: 1.6rem;
  .image-row {
    display: flex;
    justify-content: space-between;
    @include withContainer;
    max-width: 19.2rem;
    .image-item {
      width: 33.33%;
      flex: 1;
      aspect-ratio: 16/9;
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
</style>
