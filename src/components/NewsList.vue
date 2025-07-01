<template>
  <div class="news-list" role="group" :aria-label="$t('news.title')">
    <div class="news-row" v-for="(rowNews, idx) in twoNewsARow" :key="idx">
      <div class="news-row-container">
        <div
          class="news-item"
          v-for="newsItem in rowNews"
          :key="newsItem.id"
          @click="goToNewsDetail(newsItem.id)"
          tabindex="0"
          :aria-label="newsItem.title"
        >
          <div class="news-item__img" :style="{ backgroundImage: `url(${newsItem.image})` }"></div>
          <p class="news-item__title" tabindex="0" v-html="newsItem.title"></p>

          <p class="news-item__date" tabindex="0">{{ newsItem.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps<{
  news: {
    id: number
    title: string
    image: string
    date: string
  }[]
}>()

const numsLength = computed(() => props.news.length)
const twoNewsARow = computed(() => {
  if (!props.news.length) return []
  return Array(Math.ceil(numsLength.value / 2))
    .fill(0)
    .map((_, idx) => {
      return props.news.slice(idx * 2, idx * 2 + 2)
    })
})

const router = useRouter()

function goToNewsDetail(id: number) {
  router.push({ name: 'news-detail', params: { id: id.toString() } })
}
</script>
<style lang="scss" scoped>
$border-color: $black-primary;
$text-date-color: #899ca4;
.news-list {
  border-bottom: 0.01rem solid $border-color;
  position: relative;
  .news-row {
    width: 100%;
  }
  .news-row-container {
    @include withContainer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem;
  }
  .news-item {
    margin-bottom: 0.48rem;
    width: 6.4rem;
    cursor: pointer;
    &__img {
      width: 6.4rem;
      border-radius: 0.08rem;
      height: 3.6rem;
      background-color: #586566;
      margin-bottom: 0.23rem;
      @include bgCenter(100% auto);
    }
    &__title {
      font-size: 0.28rem;
      font-weight: 700;
      line-height: 0.33rem;
      @include ellipsis(e);
    }
    &__date {
      font-size: 0.16rem;
      color: $text-date-color;
    }
    .divider {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 0.01rem;
      background-color: $border-color;
    }
  }
}
@include tablet {
  .news-list {
    .news-vertical-divider {
      display: none;
    }
    display: block;
    .news-row {
      border-bottom: 0;
      padding-top: 0;
    }
    .news-row-container {
      flex-wrap: wrap;
      padding: 0;
      border-bottom: 0;
    }
    .news-item {
      width: 100%;
      border-bottom: $border-color 1px solid;
      padding: 0.4rem 0 0.24rem 0;
      margin-bottom: 0;
      &__img {
        width: 6.64rem;
        margin: 0 auto 0.23rem auto;
      }
      &__title {
        margin-bottom: 0.14rem;
        padding: 0 0.4rem;
      }
      &__date {
        padding: 0 0.4rem;
      }
    }
  }
}
@include mobile {
  .news-list {
    .news-item {
      &__img {
        width: 2.72rem;
        height: 1.5rem;
        margin-bottom: 0.16rem;
      }
      &__title {
        font-size: 0.24rem;
        line-height: normal;
        margin-bottom: 0.08rem;
        padding: 0 0.24rem;
      }
      &__date {
        padding: 0 0.24rem;
        font-size: 0.12rem;
        line-height: normal;
      }
    }
  }
}
</style>
