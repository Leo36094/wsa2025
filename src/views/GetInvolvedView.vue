<template>
  <div class="get-involved" :id="activeTab">
    <PageTab
      class="get-involved__tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />
    <div class="section-container" v-if="activeTab !== INVOLVED_SECTION_ENUM.Try">
      <component :is="components[activeTab as InvolvedSectionValue]" />
    </div>
    <div class="section-container--try" v-else>
      <GetInvolvedTry />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { INVOLVED_SECTION_ENUM, type InvolvedSectionValue } from '@/types/page_section'
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'
import PageTab from '@/components/PageTab.vue'
import GetInvolvedVisa from '@/components/GetInvolvedVisa.vue'
import GetInvolvedForum from '@/components/GetInvolvedForum.vue'
import GetInvolvedTour from '@/components/GetInvolvedTour.vue'
import GetInvolvedNotice from '@/components/GetInvolvedNotice.vue'
import GetInvolvedSponsorship from '@/components/GetInvolvedSponsorship.vue'
import GetInvolvedTry from '@/components/GetInvolvedTry.vue'
import useHashTabChange from '@/composables/useHashTabChange'

const { t } = useI18n()

const tabs = computed(() => [
  {
    label: t('page_tabs.involved_tab_01'),
    value: INVOLVED_SECTION_ENUM.Sponsorship,
  },
  {
    label: t('page_tabs.involved_tab_02'),
    value: INVOLVED_SECTION_ENUM.Visa,
  },
  {
    label: t('page_tabs.involved_tab_03'),
    value: INVOLVED_SECTION_ENUM.Forum,
  },
  {
    label: t('page_tabs.involved_tab_04'),
    value: INVOLVED_SECTION_ENUM.Tourguide,
  },
  {
    label: t('page_tabs.involved_tab_05'),
    value: INVOLVED_SECTION_ENUM.Notice,
  },
  {
    label: t('page_tabs.involved_tab_06'),
    value: INVOLVED_SECTION_ENUM.Try,
  },
])

const { activeTab, handleActiveTabChange } = useHashTabChange(tabs, 'get-involved')

const components: Record<InvolvedSectionValue, Component> = {
  [INVOLVED_SECTION_ENUM.Sponsorship]: GetInvolvedSponsorship,
  [INVOLVED_SECTION_ENUM.Visa]: GetInvolvedVisa,
  [INVOLVED_SECTION_ENUM.Forum]: GetInvolvedForum,
  [INVOLVED_SECTION_ENUM.Tourguide]: GetInvolvedTour,
  [INVOLVED_SECTION_ENUM.Notice]: GetInvolvedNotice,
  [INVOLVED_SECTION_ENUM.Try]: GetInvolvedTry,
}
</script>

<style lang="scss">
.get-involved__tab {
  section,
  main,
  div[id] {
    scroll-margin-top: calc(0.76rem + 1.16rem + 0.3rem + 0.2rem);
  }
}
</style>

<style lang="scss" scoped>
.get-involved {
  padding-top: calc(0.76rem + 0.55rem + 0.3rem);
  padding-bottom: 1.4rem;
  background-color: #fff;
  &__title {
    margin: 0.4rem auto;
    color: $black-primary;
  }
  &__coming-soon {
    font-size: 0.18rem;
    color: $black-primary;
    text-align: center;
    @include flexCenter;
  }
  &__tab {
    position: fixed;
    top: 0.76rem;
    height: auto;
    background: linear-gradient(180deg, #fffffff2, #ffffffd9 70%, #fff0);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    @include zIndex(topbar);

    // 增加 padding 讓漸變效果更自然
    padding-bottom: 0.2rem;
    :deep(.page-tab-container) {
      margin: 0.16rem auto;
    }
  }
  :deep(a) {
    text-decoration: underline;
  }
  .section-container {
    @include flexCenter(column);
    width: 12rem;
    margin: 0 auto;
  }
  .section-container--try {
    @include flexCenter(column);
    width: 14.4rem;
    margin: 0 auto;
    .club-decoration {
      position: absolute;
      top: -1rem;
      right: -1rem;
      @include bgCenter(contain);
      background-image: url('/images/club_empty_green.png');
      width: 3.5rem;
      height: 3.5rem;
      animation: rotate 10s linear infinite;
    }
  }
}
@include tablet {
  .get-involved {
    padding-top: calc(0.76rem + 0.8rem);
    .section-container {
      width: 6.64rem;
    }
    .section-container--try {
      width: 100%;
    }
  }
}
@include mobile {
  .get-involved {
    padding-top: 1.64rem;
    padding-bottom: 0.72rem;
    &__tab {
      height: 1rem;
    }
    &__title {
      margin-top: 0.16rem;
      margin-bottom: 0.16rem;
    }
    &__desc {
      font-size: 0.16rem;
    }
    .section-container {
      width: 100%;
      padding: 0.16rem;
    }
  }
}
</style>
