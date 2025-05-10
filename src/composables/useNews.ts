import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import newsTitles from '@/components/newsArticle/newsTitle'

function useNews(locale: ComputedRef<string>) {
  const { zh, en } = newsTitles

  const displayNews = computed(() => {
    if (locale.value !== 'en') {
      return zh
    }
    return en
  })
  return displayNews
}

export default useNews
