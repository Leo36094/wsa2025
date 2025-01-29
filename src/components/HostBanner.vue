<template>
  <div class="host-banner">
    <div class="first-slide">
      <div class="first-slide__title">
        <h1>{{ $t('host.title') }}</h1>
      </div>
      <div class="first-slide__photos">
        <div class="photo-item" :style="{ backgroundImage: `url(${hostBanner1})` }"></div>
        <div class="photo-item" :style="{ backgroundImage: `url(${hostBanner2})` }"></div>
      </div>
      <p v-html="$t('host.content')"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import hostBanner1 from '/images/host-banner1.png'
import hostBanner2 from '/images/host-banner2.png'
</script>
<style lang="scss" scoped>
.host-banner {
  @include withContainer;
  padding-top: 0.64rem;
  margin-bottom: 4rem;
  height: 9.5rem;
  .first-slide {
    &__title {
      text-align: center;

      h1 {
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 14.29%, #ffffff 80.52%);
        font-size: 0.88rem;
        font-weight: 700;
        margin-bottom: 1rem;
        /* animation: fadedown 0.5s ease-out; */
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
