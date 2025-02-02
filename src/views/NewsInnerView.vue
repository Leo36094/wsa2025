<template>
  <div class="news-inner-container">
    <div class="news-inner">
      <h1 class="news-inner-title">{{ newsDetail.en.title }}</h1>
      <div class="news-inner-content" v-html="newsDetail.en.content"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const newsId = route.params.id
const newsDetail = {
  en: {
    title: 'WorldSkills Museum celebrates a WorldSkills Museum celebrates a successful first year',
    content: `
  <br>
  <img src="https://fakeimg.pl/888x455" alt="news" />
  <br><br>
  <p>
  Taipei is the center of Taiwan’s finance, economy, politics, technology, education, and culture. It hosts numerous multinational corporations and international financial institutions and serves as the location for various consulates and trade organizations. Taipei blends the vibrancy of a modern metropolis with rich historical culture, creating a city full of energy and diversity. One of Taipei’s landmarks is Taipei 101, a skyscraper that was once the tallest building in the world. The city is filled with modern shopping centers, high-tech industrial zones, and various creative industries, while also preserving many historic cultural areas, such as Dadaocheng and Bangka, allowing people to experience Taiwan’s history and traditions.
  </p>
  <p>Taipei is the center of Taiwan’s finance, economy, politics, technology, education, and culture. It hosts numerous multinational corporations and international financial institutions and serves as the location for various consulates and trade organizations. Taipei blends the vibrancy of a modern metropolis with rich historical culture, creating a city full of energy and diversity. One of Taipei’s landmarks is Taipei 101, a skyscraper that was once the tallest building in the world. The city is filled with modern shopping centers, high-tech industrial zones, and various creative industries, while also preserving many historic cultural areas, such as Dadaocheng and Bangka, allowing people to experience Taiwan’s history and traditions.
  </p>
  <img src="https://fakeimg.pl/888x455" alt="news" />
  `,
  },
  zh: {
    title: 'Title',
    content: ``,
  },
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
async function fetchNewsInfo(newsId: string) {
  await delay(1000)
  return newsDetail
}
const newsInfo = ref<{
  en: {
    title: string
    content: string
  }
  zh: {
    title: string
    content: string
  }
}>({
  en: {
    title: '',
    content: '',
  },
  zh: {
    title: '',
    content: '',
  },
})
onMounted(async () => {
  // Fetch news info
  newsInfo.value = await fetchNewsInfo(newsId as string)
})
</script>
<style lang="scss" scoped>
.news-inner-container {
  @include withContainer;
  padding-top: 0.76rem;
  .news-inner {
    margin-top: 0.72rem;
    padding-bottom: 1.6rem;
    .news-inner-title {
      font-size: 0.48rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }
    .news-inner-content {
      max-width: 8.88rem;
      margin: 0 auto;
      @include flexCenter(column);
      :deep {
        h1 {
          font-size: 0.48rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        h2 {
          font-size: 0.32rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        h3 {
          font-size: 0.24rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        h4 {
          font-size: 0.16rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        p {
          font-size: 0.16rem;
          line-height: 0.2rem;
          margin-bottom: 0.4rem;
        }
        img {
          border-radius: 0.08rem;
          aspect-ratio: 16/9;
          width: 100%;
        }
      }
    }
  }
}
</style>
