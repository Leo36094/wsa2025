<template>
  <div class="news-inner-container">
    <div class="news-inner">
      <component :is="components[newsId]"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import News01 from '@/components/newsArticle/News01.vue'
import News02 from '@/components/newsArticle/News02.vue'
const route = useRoute()
const newsId = Number(route.params.id)

const components: Record<number, any> = {
  1: News01,
  2: News02,
}
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
    :deep(.news-inner-title) {
      font-size: 0.48rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      padding: 0 0.8rem;
      text-align: center;
    }
    :deep(.news-inner-content) {
      max-width: 8.88rem;
      margin: 0 auto;
      @include flexCenter(column);
      justify-content: flex-start;
      align-items: flex-start;
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
        margin: 0.2rem 0;
      }
      h4 {
        font-size: 0.16rem;
        font-weight: 700;
        margin: 0.2rem 0;
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
@include tablet {
  .news-inner-container {
    .news-inner {
      margin-top: 0.16rem;
      :deep(.news-inner-title) {
        padding: 0 0.4rem;
        line-height: normal;
      }
      :deep(.news-inner-content) {
        padding: 0 0.4rem;
        line-height: normal;
        max-width: 100%;
      }
    }
  }
}
@include mobile {
  .news-inner-container {
    .news-inner {
      :deep(.news-inner-title) {
        font-size: 0.24rem;
        margin-bottom: 0.16rem;
        padding: 0 0.24rem;
      }
      :deep(.news-inner-content) {
        padding: 0 0.24rem;
      }
    }
  }
}
</style>
