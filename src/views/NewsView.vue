<template>
  <div class="news">
    <div class="first-slide__title">
      <h1>{{ $t('news.title') }}</h1>
    </div>
    <div class="news-list-container">
      <TransitionGroup name="fade">
        <template v-if="!isNewsFetching">
          <NewsList class="news-list" :news="newsInfo.news" />
          <Pagination
            v-show="newsInfo.total > 10"
            v-slot="{ page }"
            :total="newsInfo.total"
            :sibling-count="1"
            show-edges
            :default-page="1"
          >
            <PaginationList v-slot="{ items }" class="news-pagination">
              <PaginationFirst class="pagination-action-button" />
              <PaginationPrev class="pagination-action-button" />

              <template v-for="(item, index) in items">
                <PaginationListItem
                  class="news-pagination-item"
                  v-if="item.type === 'page'"
                  :key="index"
                  :value="item.value"
                  as-child
                >
                  <Button
                    class="w-10 h-10 p-0"
                    :variant="item.value === page ? 'default' : 'outline'"
                  >
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
              </template>

              <PaginationNext class="pagination-action-button" />
              <PaginationLast class="pagination-action-button" />
            </PaginationList>
          </Pagination>
        </template>
        <BaseLoading v-else />
      </TransitionGroup>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
import NewsList from '@/components/NewsList.vue'
import BaseLoading from '@/components/BaseLoading.vue'

const mockNewsResponse = () => {
  return {
    news: Array(6)
      .fill({
        title: 'Title',
        image: 'https://fakeimg.pl/640x297',
        date: '17 Mar 2025',
      })
      .map((newsItem, index) => ({
        ...newsItem,
        id: index,
      })),
    total: 6,
    page: 1,
  }
}
const isNewsFetching = ref(false)

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
async function fetchNews() {
  await delay(1000)
  return mockNewsResponse()
}

const newsInfo = ref<{
  news: { id: number; title: string; image: string; date: string }[]
  total: number
  page: number
}>({ news: [], total: 0, page: 1 })

onMounted(async () => {
  isNewsFetching.value = true
  const { news, total, page } = await fetchNews()
  isNewsFetching.value = false
  newsInfo.value = { news, total, page }
})
</script>
<style lang="scss" scoped>
.news {
  padding-top: 0.76rem;
  padding-bottom: 1.6rem;
  .first-slide {
    &__title {
      overflow: hidden;
      text-align: center;
      height: 1.07rem;
      margin: 0.72rem auto 0.4rem auto;
      h1 {
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 14.29%, #ffffff 80.52%);
        font-size: 0.88rem;
        font-weight: 700;
        animation: title-slide-up 0.5s forwards;
      }
    }
  }
  .news-list {
    margin-bottom: 0.4rem;
  }
  .news-pagination {
    @include flexCenter;
    color: #000;
  }
  .news-pagination-item {
    margin: 0 0.08rem;
  }

  .pagination-action-button {
    margin: 0 0.08rem;
  }
}
</style>
