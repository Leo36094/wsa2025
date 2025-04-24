<template>
  <section class="news" role="complementary" :aria-label="$t('home.news_title')">
    <div class="news-container">
      <h2 class="news-title" tabindex="0">{{ $t('home.news_title') }}</h2>
      <NewsList :news="displayNews" />
      <div class="more-button" @click="goToNews" tabindex="0" :aria-label="$t('home.news_more')">
        <span>{{ $t('home.news_more') }}</span>
        <img src="/images/uil_arrow-right.svg" alt="right-arrow-icon" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NewsList from '@/components/NewsList.vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import newsTitles from '@/components/newsArticle/newsTitle'
const { zh, en } = newsTitles

const displayNews = computed(() => {
  if (locale.value !== 'en') {
    return zh
  }
  return en
})


const router = useRouter()
function goToNews() {
  router.push({ name: 'news' })
}
</script>
<style lang="scss" scoped>
.news {
  margin-bottom: 0.48rem;
  .news-title {
    @include withContainer;
    padding-left: 1.1rem;
    font-size: $title-font-size;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .more-button {
    font-size: 0.2rem;
    @include flexCenter;
    cursor: pointer;
    width: 1.6rem;
    height: 0.64rem;
    margin: 0.48rem auto 0 auto;
    border-radius: 0.08rem;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid $black-primary;
      background-color: #c8e14b;
    }
    &:focus {
      border: 1px solid $black-primary;
      background-color: #fff;
    }
    img {
      width: 0.28rem;
      height: 0.28rem;
      margin-left: 0.16rem;
    }
  }
}
@include tablet {
  .news {
    padding-top: 0.76rem;
    margin-bottom: 0.72rem;
    .news-title {
      padding-left: 0.24rem;
      padding-bottom: 0.24rem;
      margin-bottom: 0;
    }
    .more-button {
      font-size: 0.18rem;
      margin-top: 0.16rem;
      margin-bottom: 0rem;
    }
  }
}
@include mobile {
  .news {
    .news-title {
      font-size: $title-font-size-m;
    }
    .more-button {
      font-size: 0.16rem;
      img {
        margin-left: 0.08rem;
        width: 0.28rem;
      }
    }
  }
}
</style>
