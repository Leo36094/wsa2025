<template>
  <div class="news">
    <div class="news-container">
      <div class="news-title">
        <h1>{{ $t('home.news_title') }}</h1>
      </div>
      <div class="news-list">
        <div class="news-item" v-for="newsItem in news" :key="newsItem.id">
          <div class="news-item__img"></div>
          <h4 class="news-item__title">
            {{ newsItem.title }}
          </h4>
          <p class="news-item__date">17 Mar 2025</p>
        </div>
      </div>
      <div class="more-button">
        <span>{{ $t('home.news_more') }}</span>
        <img src="/images/uil_arrow-right.svg" alt="right-arrow-icon" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const news = ref(
  Array(6)
    .fill({
      title: 'WorldSkills Museum celebrates a successful first year',
      content: 'News Content',
    })
    .map((newsItem, index) => ({
      ...newsItem,
      id: index,
    })),
)
</script>
<style lang="scss" scoped>
.news {
  .news-container {
    @include withContainer;
  }
  .news-title {
    padding-top: 1.47rem;
    padding-left: 1.1rem;
    font-size: 0.48rem;
    font-weight: 700;
    margin-bottom: 0.45rem;
  }
  .news-list {
    @include flexCenter;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: flex-start;
    border: 1px solid #fff;
    border-right: 0;
    border-left: 0;
    padding-top: 0.5rem;
    .news-item {
      margin-bottom: 0.48rem;
      width: 6.4rem;
      &__img {
        width: 6.4rem;
        border-radius: 0.08rem;
        height: 3.04rem;
        background-color: #586566;
        margin-bottom: 0.23rem;
      }
      &__title {
        font-size: 0.28rem;
        font-weight: 700;
        line-height: 0.33rem;
      }
      &__date {
        font-size: 0.16rem;
        color: #9fa7a7;
      }
    }
  }
  .more-button {
    font-size: 0.28rem;
    @include flexCenter;
    margin-top: 0.47rem;
    margin-bottom: 2.3rem;
    img {
      width: 0.28rem;
      height: 0.28rem;
      margin-left: 0.16rem;
    }
  }
}
</style>
