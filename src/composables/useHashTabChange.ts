import { useRoute, useRouter } from 'vue-router'
import { ref, watch, type ComputedRef } from 'vue'
import type { PageValue } from '@/types/page_section'

function useHashTabChange(tabs: ComputedRef<{ label: string; value: PageValue }[]>, page: string) {
  const route = useRoute()
  const router = useRouter()
  const activeTab = ref<PageValue>(tabs.value[0].value)

  const autoChangeTab = (value: string) => {
    const tab = tabs.value.find((tab) => tab.value === value)
    if (tab) {
      handleActiveTabChange(tab.value)
    }
  }

  const handleActiveTabChange = (value: PageValue) => {
    activeTab.value = value
    router.push({
      name: page,
      hash: value,
    })
  }

  watch(
    () => route.hash,
    (newVal) => {
      if (newVal) {
        autoChangeTab(newVal)
      }
    },
    { immediate: true },
  )

  return {
    activeTab,
    handleActiveTabChange,
  }
}

export default useHashTabChange
