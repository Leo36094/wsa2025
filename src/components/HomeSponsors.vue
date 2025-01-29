<template>
  <div class="home-sponsors">
    <div class="sponsors-container">
      <div class="sponsors">
        <div class="sponsors__title">
          {{ $t('home.sponsors_title') }}
        </div>
        <div class="sponsors-row">
          <div class="sponsors-list">
            <div
              class="sponsors-item"
              v-for="(item, idx) in sponsors"
              :key="item"
              :style="{ backgroundImage: `url(${item})` }"
            ></div>
            <div
              class="sponsors-item"
              v-for="(item, idx) in sponsors"
              :key="item"
              :style="{ backgroundImage: `url(${item})` }"
            ></div>
          </div>
        </div>
        <div class="sponsors-row">
          <div class="sponsors-list sponsors-list--reverse">
            <div
              class="sponsors-item"
              v-for="item in sponsors"
              :key="item"
              :style="{ backgroundImage: `url(${item})` }"
            ></div>
            <div
              class="sponsors-item"
              v-for="item in sponsors"
              :key="item"
              :style="{ backgroundImage: `url(${item})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sponsors = Array(8)
  .fill(0)
  .map(() => {
    return `https://fakeimg.pl/176x144/`
  })
</script>
<style lang="scss" scoped>
.home-sponsors {
  margin: auto;
  margin-bottom: 2.16rem;
  .sponsors {
    width: 13.6rem;
    padding: 0.64rem 0;
    margin: 0 auto;
    border-radius: 0.1rem;
    background-color: #fff;
  }
  .sponsors__title {
    @include withContainer;
    padding: 0 0.64rem;
    color: #000;
    font-size: 0.48rem;
    font-weight: 700;
    margin-bottom: 0.32rem;
  }
  .sponsors-row {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    &:not(:last-child) {
      margin-bottom: 0.4rem;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .sponsors-list {
    white-space: nowrap;
    @include flexCenter;
    gap: 0.32rem;
    animation: marquee 15s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
    &--reverse {
      animation-direction: reverse;
    }

    .sponsors-item {
      flex-shrink: 0;
      background-color: #f5f5f5;
      border-radius: 0.08rem;
      @include flexCenter;
      @include bgCenter(cover);
      color: #000;
      width: 1.76rem;
      height: 1.44rem;
    }
  }
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
