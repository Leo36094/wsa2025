<template>
  <div class="host">
    <PageTab :tabs="tabs" :active-tab="activeTab" @update:active-tab="handleActiveTabChange" />
    <HostSkill />
    <HostBanner />
    <HostCurrency />
    <HostPower />
    <HostClimate />
    <HostWDA />
    <HostLocation />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import PageTab from '@/components/PageTab.vue'
import HostBanner from '@/components/HostBanner.vue'
import HostCurrency from '@/components/HostCurrency.vue'
import HostPower from '@/components/HostPower.vue'
import HostClimate from '@/components/HostClimate.vue'
import HostSkill from '@/components/HostSkill.vue'
import HostWDA from '@/components/HostWDA.vue'
import HostLocation from '@/components/HostLocation.vue'
import { PageSectionEnum } from '@/types/page_section'

const { t } = useI18n()

const tabs = computed(() => [
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
])
const router = useRouter()
const activeTab = ref(tabs.value[0].value)

const handleActiveTabChange = (value: PageSectionEnum) => {
  // 似乎不需要處理，因為只有第一個 active 會被顯示
  // activeTab.value = value
  router.push({
    name: 'host',
    hash: value,
  })
}
</script>
<style lang="scss" scoped>
.host {
  padding-top: 0.76rem;
  .host-currency {
    @include withContainer;
  }
}
</style>
