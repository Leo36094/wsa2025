<template>
  <div :class="['host', { 'white-bg': tabIndex > 3 }]">
    <PageTab
      class="host-tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />

    <template v-if="activeTab === PageSectionEnum.Skill">
      <HostSkill />
    </template>
    <template v-else-if="activeTab === PageSectionEnum.Taipei">
      <HostBanner />
      <HostIntroduction />
      <HostCurrency />
      <HostPower />
      <HostClimate />
    </template>
    <HostWDA v-else-if="activeTab === PageSectionEnum.WDA" />
    <HostLocation v-else-if="activeTab === PageSectionEnum.Location" />
    <HostTraffic v-else-if="activeTab === PageSectionEnum.Traffic" />
    <HostMedic v-else-if="activeTab === PageSectionEnum.Medic" />
    <HostTourist v-else-if="activeTab === PageSectionEnum.Tourist" />
    <HostVegan v-else-if="activeTab === PageSectionEnum.Vegan" />
    <HostMuslim v-else="activeTab === PageSectionEnum.Muslim" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

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

import { PageSectionEnum } from '@/types/page_section'
import useHashTabChange from '@/composables/useHashTabChange'

const { t } = useI18n()

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

const { activeTab, handleActiveTabChange } = useHashTabChange(tabs, 'host')

const tabIndex = computed(() => tabs.value.findIndex((tab) => tab.value === activeTab.value))
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
