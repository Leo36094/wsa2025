<template>
  <div :class="['competition', { phase2: phase2Content }]">
    <PageTab
      class="competition__tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />
    <component :is="components[activeTab as CompetitionSectionValue]" />
  </div>
</template>

<script lang="ts" setup>
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'

// components
import PageTab from '@/components/PageTab.vue'
import CompetitionBanner from '@/components/CompetitionBanner.vue'
import CompetitionSchedule from '@/components/CompetitionSchedule.vue'
import CompetitionMembers from '@/components/CompetitionCountry/Members.vue'
import CompetitionCompetitors from '@/components/CompetitionCountry/Competitors.vue'

import { COMPETITION_SECTION_ENUM, type CompetitionSectionValue } from '@/types/page_section'
import useHashTabChange from '@/composables/useHashTabChange'

const { t } = useI18n()

const competitionNavSections = Object.values(COMPETITION_SECTION_ENUM)
const tabs = computed(() =>
  competitionNavSections.map((section, index) => ({
    label: t(`page_tabs.competition_tab_${(index + 1).toString().padStart(2, '0')}`),
    value: section,
  })),
)

const { activeTab, handleActiveTabChange } = useHashTabChange(tabs, 'competition')

const components: Record<CompetitionSectionValue, Component> = {
  [COMPETITION_SECTION_ENUM.Competition]: CompetitionBanner,
  [COMPETITION_SECTION_ENUM.Schedule]: CompetitionSchedule,
  [COMPETITION_SECTION_ENUM.Member]: CompetitionMembers,
  [COMPETITION_SECTION_ENUM.Competitor]: CompetitionCompetitors,
}

const phase2Content = computed(() => {
  const phase2Sections: CompetitionSectionValue[] = [
    COMPETITION_SECTION_ENUM.Member,
    COMPETITION_SECTION_ENUM.Competitor,
  ]
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
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.85) 70% rgba(255, 255, 255, 0) 100%
    );
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
