<template>
  <div class="home">
    <HomeBanner />
    <HomeNews />
    <div class="home-sponsors">
      <div class="sponsors-container">
        <div class="sponsors">
          <div class="sponsors__title">
            {{ $t('home.sponsors_title') }}
          </div>
          <div class="sponsors-list">
            <div class="sponsors-item" v-for="item in 24" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeBanner from '@/components/HomeBanner.vue'
import HomeNews from '@/components/HomeNews.vue'
</script>
<style lang="scss" scoped>
.home {
  .home-sponsors {
    margin: auto;
    margin-bottom: 2.16rem;
    .sponsors-container {
      @include withContainer;
    }
    .sponsors {
      width: 13.6rem;
      padding: 0.64rem;
      margin: 0 auto;
      border-radius: 0.1rem;
      background-color: #fff;
    }
    .sponsors__title {
      color: #000;
      font-size: 0.48rem;
      font-weight: 700;
      margin-bottom: 0.32rem;
    }
    .sponsors-list {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 0.32rem;
      .sponsors-item {
        background-color: #f5f5f5;
        border-radius: 0.08rem;
        @include flexCenter;
        color: #000;
        width: 1.72rem;
        height: 1.43rem;
      }
    }
  }
}
</style>
