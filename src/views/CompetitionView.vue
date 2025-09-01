<template>
  <div class="competition">
    <PageTab
      class="competition__tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />
    <CompetitionMembers v-if="activeTab === PageSectionEnum.Member" />
    <CompetitionCompetitors v-else-if="activeTab === PageSectionEnum.Competitor" />
    <template v-else>
      <div class="competition-banner-container">
        <CompetitionBanner />
      </div>
      <CompetitionSchedule />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PageTab from '@/components/PageTab.vue'
import CompetitionBanner from '@/components/CompetitionBanner.vue'
import CompetitionSchedule from '@/components/CompetitionSchedule.vue'
import CompetitionMembers from '@/components/CompetitionCountry/Members.vue'
import CompetitionCompetitors from '@/components/CompetitionCountry/Competitors.vue'
import { PageSectionEnum, type PageValue } from '@/types/page_section'
import { useScrollSpy } from '@/composables/useScrollSpy'

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


const router = useRouter()
const activeTab = ref<PageValue>(tabs.value[0].value)
const isManualTabChange = ref(false)

const allSections = computed(() => tabs.value.map((tab) => tab.value))
const { activeSection, initializeScrollSpy } = useScrollSpy(allSections.value)

const handleActiveTabChange = (value: PageValue) => {
  isManualTabChange.value = true
  activeTab.value = value

  const element = document.getElementById(value.slice(1))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  router.push({
    name: 'competition',
    hash: value,
  })

  setTimeout(() => {
    isManualTabChange.value = false
  }, 1000)
}

// Watch scroll spy changes with debugging
watch(activeSection, (newSection) => {
  if (!isManualTabChange.value) {
    activeTab.value = newSection

    // 使用 window.history 直接更新 URL，不觸發滾動
    const newUrl = `${window.location.pathname}${newSection}`
    window.history.replaceState(null, '', newUrl)
  }
})

// URL hash 同步
const currentHash = computed(() => router.currentRoute.value.hash)
watch(
  currentHash,
  (newVal) => {
    if (newVal && tabs.value.find((tab) => tab.value === newVal)) {
      isManualTabChange.value = true
      activeTab.value = newVal as PageValue
      setTimeout(() => {
        isManualTabChange.value = false
      }, 1000)
    }
  },
  { immediate: true },
)


</script>
<style lang="scss" scoped>
.competition {
  padding-top: calc(0.76rem + 1.16rem + 0.3rem);
  background-color: #fff;
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
    -webkit-backdrop-filter: blur(10px);
    @include zIndex(topbar);

    // 增加 padding 讓漸變效果更自然
    padding-bottom: 0.2rem;
    @include zIndex(topbar);
  }
}
</style>
