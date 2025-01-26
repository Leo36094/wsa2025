<template>
  <div class="home-banner">
    <div class="filter"></div>
    <main class="home-banner-container">
      <div class="banner">
        <img src="/images/wsa_banner.jpg" />
        <div class="banner__title">
          {{ $t('home.title') }}
          <span>{{ $t('home.year') }}</span>
        </div>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.home-banner {
  position: relative;
  overflow: hidden;
  background-color: #000;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(16, 35, 36, 0) 0%, #102324 89.74%);
    z-index: 1;
  }
  .home-banner-container {
    @include withContainer;
    position: relative;
  }
  .banner {
    @include flexCenter;
    height: 6.84rem;
    position: relative;
    img {
      object-fit: contain;
      width: 100%;
    }
    &__title {
      position: absolute;
      bottom: 0.63rem;
      left: 1rem;
      font-size: 0.88rem;
      font-weight: 700;
      z-index: 100;
      line-height: 1.06rem;
      span {
        color: #c8e14b;
      }
    }
  }
}
</style>
