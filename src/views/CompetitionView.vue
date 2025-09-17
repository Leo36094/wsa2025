<template>
  <div :class="['competition', { phase2: phase2Content }]">
    <PageTab
      class="competition__tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />
    <CompetitionMembers v-if="activeTab === PageSectionEnum.Member" />
    <CompetitionCompetitors v-else-if="activeTab === PageSectionEnum.Competitor" />
    <CompetitionSchedule v-else-if="activeTab === PageSectionEnum.Schedule" />
    <div v-else class="competition-banner-container">
      <CompetitionBanner />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// components
import PageTab from '@/components/PageTab.vue'
import CompetitionBanner from '@/components/CompetitionBanner.vue'
import CompetitionSchedule from '@/components/CompetitionSchedule.vue'
import CompetitionMembers from '@/components/CompetitionCountry/Members.vue'
import CompetitionCompetitors from '@/components/CompetitionCountry/Competitors.vue'

import { PageSectionEnum, type PageValue } from '@/types/page_section'
import useHashTabChange from '@/composables/useHashTabChange'

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
  {
    label: t('page_tabs.competition_tab_03'),
    value: PageSectionEnum.Member,
  },
  {
    label: t('page_tabs.competition_tab_04'),
    value: PageSectionEnum.Competitor,
  },
])

const { activeTab, handleActiveTabChange } = useHashTabChange(tabs, 'competition')

const phase2Content = computed(() => {
  const phase2Sections: PageValue[] = [PageSectionEnum.Member, PageSectionEnum.Competitor]
  return phase2Sections.includes(activeTab.value)
})
</script>
<style lang="scss" scoped>
.competition {
  padding-top: 2.2rem;
  background-color: #fff;
  &.phase2 {
    padding-top: 1.8rem;
  }
  &__tab {
    position: fixed;
    top: 0.76rem;
    height: 1.44rem;
    background: linear-gradient(180deg, #fffffff2, #ffffffd9 70%, #fff0);
    backdrop-filter: blur(10px);
    padding-bottom: 0.2rem;
    @include zIndex(topbar);
  }
}
@include tablet {
  .competition {
    &__tab {
      top: 0.76rem;
      height: 1rem;
      backdrop-filter: blur(8px);
      padding-bottom: 0.16rem;
    }
  }
}
</style>
