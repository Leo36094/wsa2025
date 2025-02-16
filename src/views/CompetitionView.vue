<template>
  <div class="competition">
    <PageTab :tabs="tabs" :active-tab="activeTab" @update:active-tab="handleActiveTabChange" />
    <div class="competition-banner-container">
      <CompetitionBanner />
    </div>
    <CompetitionSchedule />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PageTab from '@/components/PageTab.vue'
import CompetitionBanner from '@/components/CompetitionBanner.vue'
import CompetitionSchedule from '@/components/CompetitionSchedule.vue'
import { PageSectionEnum, type PageValue } from '@/types/page_section'

const { t } = useI18n()

const tabs = computed(() => [
  {
    label: t('page_tabs.competition_tab_01'),
    value: PageSectionEnum.Competition,
  },
  {
    label: t('page_tabs.competition_tab_02'),
    value: PageSectionEnum.Schedule,
  },
])
const router = useRouter()
const activeTab = ref(tabs.value[0].value)

const handleActiveTabChange = (value: PageValue) => {
  // 似乎不需要處理，因為只有第一個 active 會被顯示
  // activeTab.value = value
  router.push({
    name: 'competition',
    hash: value,
  })
}
</script>
<style lang="scss" scoped>
.competition {
  padding-top: 0.76rem;
  background-color: #fff;
}
</style>
