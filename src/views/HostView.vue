<template>
  <div :class="['host', { 'white-bg': tabIndex > 3 }]">
    <PageTab
      class="host-tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />

    <!-- 所有組件都存在於 DOM 中，用 v-show 控制顯示 -->
    <div v-show="!phase2Content">
      <HostSkill />
      <HostBanner />
      <HostIntroduction />
      <HostCurrency />
      <HostPower />
      <HostClimate />
      <HostWDA />
      <HostLocation />
    </div>

    <div v-show="phase2Content">
      <HostTraffic />
      <HostMedic />
      <HostTourist />
      <HostVegan />
      <HostMuslim />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useScrollSpy } from '@/composables/useScrollSpy'

import PageTab from '@/components/PageTab.vue'
import HostBanner from '@/components/HostBanner.vue'
import HostIntroduction from '@/components/HostIntroduction.vue'
import HostCurrency from '@/components/HostCurrency.vue'
import HostPower from '@/components/HostPower.vue'
import HostClimate from '@/components/HostClimate.vue'
import HostSkill from '@/components/HostSkill.vue'
import HostWDA from '@/components/HostWDA.vue'
import HostLocation from '@/components/HostLocation.vue'
import HostTraffic from '@/components/HostTraffic.vue'
import HostMedic from '@/components/HostMedic.vue'
import HostTourist from '@/components/HostTourist.vue'
import HostVegan from '@/components/HostVegan.vue'
import HostMuslim from '@/components/HostMuslim.vue'

import { PageSectionEnum, type PageValue } from '@/types/page_section'

const { t } = useI18n()
const router = useRouter()

const tabs = computed(() => [
  { label: t('page_tabs.host_tab_01'), value: PageSectionEnum.Skill },
  { label: t('page_tabs.host_tab_02'), value: PageSectionEnum.Taipei },
  { label: t('page_tabs.host_tab_03'), value: PageSectionEnum.WDA },
  { label: t('page_tabs.host_tab_04'), value: PageSectionEnum.Location },
  { label: t('page_tabs.host_tab_05'), value: PageSectionEnum.Traffic },
  { label: t('page_tabs.host_tab_06'), value: PageSectionEnum.Medic },
  { label: t('page_tabs.host_tab_07'), value: PageSectionEnum.Tourist },
  { label: t('page_tabs.host_tab_08'), value: PageSectionEnum.Vegan },
  { label: t('page_tabs.host_tab_09'), value: PageSectionEnum.Muslim },
])

const activeTab = ref<PageValue>(tabs.value[0].value)

// Initialize scroll spy with all tab sections
const allSections = computed(() => tabs.value.map((tab) => tab.value))
const { activeSection, initializeScrollSpy } = useScrollSpy(allSections.value)

// Sync activeTab with scroll spy, but allow manual override
const isManualTabChange = ref(false)

// Watch scroll spy changes with debugging
watch(activeSection, (newSection) => {
  console.log('Scroll spy detected:', newSection) // 調試
  if (!isManualTabChange.value) {
    activeTab.value = newSection

    // 使用 window.history 直接更新 URL，不觸發滾動
    const newUrl = `${window.location.pathname}${newSection}`
    window.history.replaceState(null, '', newUrl)
  }
})

const tabIndex = computed(() => tabs.value.findIndex((tab) => tab.value === activeTab.value))

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
    name: 'host',
    hash: value,
  })

  setTimeout(() => {
    isManualTabChange.value = false
  }, 1000)
}

// 保持 phase2Content 邏輯用於控制顯示
const phase2Content = computed(() => {
  const phase2Sections: PageValue[] = [
    PageSectionEnum.Traffic,
    PageSectionEnum.Medic,
    PageSectionEnum.Tourist,
    PageSectionEnum.Vegan,
    PageSectionEnum.Muslim,
  ]
  return phase2Sections.includes(activeTab.value)
})

// 當 phase2Content 改變時重新初始化 scroll spy
watch(phase2Content, () => {
  console.log('phase2Content changed, reinitializing scroll spy') // 調試
  setTimeout(() => {
    initializeScrollSpy()
  }, 200)
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
<style lang="scss">
.host {
  section,
  main,
  div[id] {
    scroll-margin-top: calc(0.76rem + 1.16rem + 0.3rem + 0.2rem);
  }
}
</style>
<style lang="scss" scoped>
.host {
  // 0.8 margin
  padding-top: calc(0.76rem + 1.16rem + 0.3rem);
  min-height: 100svh;
  margin: 0 auto;
  padding-bottom: 1.44rem;
  &.white-bg {
    background-color: #fff;
  }
  .host-currency {
    @include withContainer;
  }

  .host-tab {
    /* position: fixed;
    top: 0.76rem;
    height: 1.44rem;
    background-color: #fff;
    @include zIndex(topbar); */
    position: fixed;
    top: 0.76rem;
    height: 1.44rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.85) 70%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    @include zIndex(topbar);

    // 增加 padding 讓漸變效果更自然
    padding-bottom: 0.2rem;
  }
}
</style>
