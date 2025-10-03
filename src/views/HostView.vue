<template>
  <div :class="['host', { 'white-bg': tabIndex > 3 }]">
    <PageTab
      class="host-tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />
    <component :is="components[activeTab as HostSectionValue]" />
  </div>
</template>

<script lang="ts" setup>
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'

import PageTab from '@/components/PageTab.vue'
import HostSkill from '@/components/HostSkill.vue'
import HostWDA from '@/components/HostWDA.vue'
import HostLocation from '@/components/HostLocation.vue'
import HostTraffic from '@/components/HostTraffic.vue'
import HostMedic from '@/components/HostMedic.vue'
import HostTourist from '@/components/HostTourist.vue'
import HostVegan from '@/components/HostVegan.vue'
import HostMuslim from '@/components/HostMuslim.vue'
import HostTaipei from '@/components/HostTaipei.vue'

import { HOST_SECTION_ENUM, type HostSectionValue } from '@/types/page_section'
import useHashTabChange from '@/composables/useHashTabChange'

const { t } = useI18n()

const HOST_SECTION_VALUES = Object.values(HOST_SECTION_ENUM)

const tabs = computed(() =>
  HOST_SECTION_VALUES.map((section, index) => ({
    label: t(`page_tabs.host_tab_${(index + 1).toString().padStart(2, '0')}`),
    value: section,
  })),
)

const { activeTab, handleActiveTabChange } = useHashTabChange(tabs, 'host')

const components: Record<HostSectionValue, Component> = {
  [HOST_SECTION_ENUM.Skill]: HostSkill,
  [HOST_SECTION_ENUM.Taipei]: HostTaipei,
  [HOST_SECTION_ENUM.WDA]: HostWDA,
  [HOST_SECTION_ENUM.Location]: HostLocation,
  [HOST_SECTION_ENUM.Traffic]: HostTraffic,
  [HOST_SECTION_ENUM.Medic]: HostMedic,
  [HOST_SECTION_ENUM.Tourist]: HostTourist,
  [HOST_SECTION_ENUM.Vegan]: HostVegan,
  [HOST_SECTION_ENUM.Muslim]: HostMuslim,
}

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
@include mobile {
  .host {
    .host-tab {
      height: 1rem;
    }
  }
}
</style>
