<template>
  <main class="news" role="main">
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
            @update:page="onPageUpdate"
            :total="newsInfo.total"
            :page="newsInfo.page"
            :sibling-count="isDesktop ? 1 : 0"
            :show-edges="true"
            :default-page="1"
          >
            <PaginationList v-slot="{ items }" class="news-pagination">
              <PaginationFirst v-if="isDesktop" class="pagination-action-button" />
              <PaginationPrev v-if="isDesktop" class="pagination-action-button" />

              <template v-for="(item, index) in items">
                <PaginationListItem
                  class="news-pagination-item"
                  v-if="item.type === 'page'"
                  :key="index"
                  :value="item.value"
                  as-child
                >
                  <Button
                    class="display-page w-10 h-10 p-0"
                    :variant="item.value === page ? 'default' : 'outline'"
                  >
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis class="page-ellipsis" v-else :key="item.type" :index="index" />
              </template>

              <PaginationNext v-if="isDesktop" class="pagination-action-button" />
              <PaginationLast v-if="isDesktop" class="pagination-action-button" />
            </PaginationList>
          </Pagination>
        </template>
        <BaseLoading v-else />
      </TransitionGroup>
    </div>
  </main>
  <RouterView></RouterView>
</template>

<script lang="ts" setup>
import { type Ref, ref, onMounted, inject, watch } from 'vue'
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
import { useI18n } from 'vue-i18n'
import useNews from '@/composables/useNews'

const { locale } = useI18n()
const isDesktop = inject<Ref<boolean>>('isDesktop')
const displayNews = useNews(locale)

const mockNewsResponse = (page: number = 1) => {
  return {
    news: displayNews.value,
    total: 1,
    page: page,
  }
}
const isNewsFetching = ref(false)

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
async function fetchNews(page: number) {
  isNewsFetching.value = true
  await delay(1000)
  isNewsFetching.value = false
  return mockNewsResponse(page)
}

async function onPageUpdate(page: number) {
  await delay(1000)
  const { news, total } = await fetchNews(page)
  newsInfo.value = { news, total, page }
}

const newsInfo = ref<{
  news: { id: number; title: string; image: string; date: string }[]
  total: number
  page: number
}>({ news: [], total: 0, page: 1 })

watch(locale, () => {
  const localeNews = useNews(locale)
  newsInfo.value = { news: localeNews.value, total: 1, page: 1 }
})

onMounted(async () => {
  isNewsFetching.value = true
  const { news, total, page } = await fetchNews(1)
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
  .display-page {
    &[data-selected] {
      background-color: $green-primary;
      color: #000;
    }
  }
  .page-ellipsis {
    color: #fff;
  }
}
@include tablet {
  .news {
    .first-slide {
      &__title {
        height: auto;
        margin: 0.4rem auto;
        h1 {
          font-size: 0.48rem;
        }
      }
    }
  }
}
@include mobile {
  .display-page {
    /* width: 0.48rem;
    height: 0.48rem; */
  }
}
</style>
