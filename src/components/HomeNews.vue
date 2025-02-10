<template>
  <div class="news">
    <div class="news-container">
      <div class="news-title">
        <h1>{{ $t('home.news_title') }}</h1>
      </div>
      <NewsList :news="news" />
      <div class="more-button" @click="goToNews">
        <span>{{ $t('home.news_more') }}</span>
        <img src="/images/uil_arrow-right.svg" alt="right-arrow-icon" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NewsList from '@/components/NewsList.vue'
const news = ref(
  Array(6)
    .fill({
      title: 'Title',
      image: 'https://fakeimg.pl/640x297',
      date: '17 Mar 2025',
    })
    .map((newsItem, index) => ({
      ...newsItem,
      id: index,
    })),
)

const router = useRouter()
function goToNews() {
  router.push({ name: 'news' })
}
</script>
<style lang="scss" scoped>
.news {
  .news-title {
    @include withContainer;
    padding-top: 1.47rem;
    padding-left: 1.1rem;
    font-size: 0.48rem;
    font-weight: 700;
    margin-bottom: 0.45rem;
  }
  .more-button {
    font-size: 0.28rem;
    @include flexCenter;
    margin-top: 0.47rem;
    margin-bottom: 2.3rem;
    cursor: pointer;
    img {
      width: 0.28rem;
      height: 0.28rem;
      margin-left: 0.16rem;
    }
  }
}
@include mobile {
  .news {
    padding-top: 0.76rem;
    .news-title {
      padding-left: 0.24rem;
      padding-bottom: 0.24rem;
      padding-top: 0;
      margin-bottom: 0;
    }
    .more-button {
      margin-top: 0.16rem;
      margin-bottom: 0rem;
    }
  }
}
</style>
