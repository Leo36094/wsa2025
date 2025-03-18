<template>
  <div class="news-inner-container">
    <div class="news-inner">
      <h2 class="news-inner-title" v-html="displayNews.title"></h2>
      <div class="news-inner-content" v-html="displayNews.content"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { mockNewsDetail } from '@/mock/news'
const route = useRoute()
const { locale } = useI18n()
const newsId = route.params.id
const newsDetail = mockNewsDetail
const displayNews = computed(() => {
  const content = newsDetail[0]
  if (locale.value === 'en') {
    return content.en
  }
  return content.zh
})

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
async function fetchNewsInfo(newsId: string) {
  console.log('fetchNewsInfo', newsId)
  await delay(1000)
  return newsDetail
}
const newsInfo = ref<
  {
    en: {
      title: string
      content: string
    }
    zh: {
      title: string
      content: string
    }
  }[]
>([])
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
    :deep {
      a {
        text-decoration: underline;
        font-size: 0.18rem;
      }
      ul {
        list-style: disc;
        margin-left: 0.2rem;
        margin-bottom: 0.2rem;
        li {
          font-size: 0.18rem;
          list-style: disc;
        }
      }
      ol {
        list-style: decimal;
        margin-left: 0.2rem;
      }
    }
    .news-inner-title {
      font-size: 0.48rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      padding: 0 0.8rem;
      text-align: center;
    }
    .news-inner-content {
      max-width: 8.88rem;
      margin: 0 auto;
      @include flexCenter(column);
      justify-content: flex-start;
      align-items: flex-start;
      :deep {
        a {
          word-break: break-all;
        }
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
          margin: 0.2rem 0;
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
@include tablet {
  .news-inner-container {
    .news-inner {
      margin-top: 0.16rem;
      .news-inner-title {
        padding: 0 0.4rem;
        line-height: normal;
      }
      .news-inner-content {
        padding: 0 0.4rem;
        line-height: normal;
      }
    }
  }
}
@include mobile {
  .news-inner-container {
    .news-inner {
      .news-inner-title {
        font-size: 0.24rem;
        margin-bottom: 0.16rem;
        padding: 0 0.24rem;
      }
      .news-inner-content {
        padding: 0 0.24rem;
      }
    }
  }
}
</style>
