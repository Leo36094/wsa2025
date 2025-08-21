<template>
  <div class="host">
    <PageTab :tabs="tabs" :active-tab="activeTab" @update:active-tab="handleActiveTabChange" />
    <template v-if="activeTab === PageSectionEnum.Traffic">
      <HostTraffic />
    </template>
    <template v-if="activeTab === PageSectionEnum.Medic">
      <HostMedic />
    </template>
    <template v-if="activeTab === PageSectionEnum.Tourist">
      <HostTourist />
    </template>
    <template v-else>
      <HostSkill />
      <HostBanner />
      <HostIntroduction />
      <HostCurrency />
      <HostPower />
      <HostClimate />
      <HostWDA />
      <HostLocation />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import PageTab from '@/components/PageTab.vue'
import HostBanner from '@/components/HostBanner.vue'
import HostIntroduction from '@/components/HostIntroduction.vue'
import HostCurrency from '@/components/HostCurrency.vue'
import HostPower from '@/components/HostPower.vue'
import HostClimate from '@/components/HostClimate.vue'
import HostSkill from '@/components/HostSkill.vue'
import HostWDA from '@/components/HostWDA.vue'
import HostLocation from '@/components/HostLocation.vue'
// import HostTraffic from '@/components/HostTraffic.vue'
import HostMedic from '@/components/HostMedic.vue'
import HostTourist from '@/components/HostTourist.vue'

import { PageSectionEnum, type PageValue } from '@/types/page_section'

const { t } = useI18n()

const tabs = computed<{ label: string; value: PageValue }[]>(() => [
  {
    label: t('page_tabs.host_tab_01'),
    value: PageSectionEnum.Skill,
  },
  {
    label: t('page_tabs.host_tab_02'),
    value: PageSectionEnum.Taipei,
  },
  {
    label: t('page_tabs.host_tab_03'),
    value: PageSectionEnum.WDA,
  },
  {
    label: t('page_tabs.host_tab_04'),
    value: PageSectionEnum.Location,
  },
  // {
  //   label: t('page_tabs.host_tab_05'),
  //   value: PageSectionEnum.Traffic,
  // },
  {
    label: t('page_tabs.host_tab_06'),
    value: PageSectionEnum.Medic,
  },
  {
    label: t('page_tabs.host_tab_07'),
    value: PageSectionEnum.Tourist,
  },
])
const router = useRouter()
const activeTab = ref(tabs.value[0].value)

const handleActiveTabChange = (value: PageValue) => {
  // 似乎不需要處理，因為只有第一個 active 會被顯示
  activeTab.value = value
  router.push({
    name: 'host',
    hash: value,
  })
}

const currentHash = computed(() => router.currentRoute.value.hash)
watch(currentHash, (newVal) => {
  if (newVal && tabs.value.find((tab) => tab.value === newVal)) {
    activeTab.value = newVal as PageValue
  }
}, { immediate: true })
</script>
<style lang="scss" scoped>
.host {
  padding-top: 0.76rem;
  min-height: 100svh;
  margin: 0 auto;
  .host-currency {
    @include withContainer;
  }
}
</style>
