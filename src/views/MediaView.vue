<template>
  <div class="get-involved" :id="activeTab">
    <PageTab
      class="get-involved__tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />
    <div class="section-container">
      <component :is="components[activeTab as MediaSectionValue]" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'

import PageTab from '@/components/PageTab.vue'
import MediaThemeAd from '@/components/Media/ThemeAd.vue'
import MediaOccupationIntro from '@/components/Media/OccupationIntro.vue'
import MediaLiveStream from '@/components/Media/LiveStream.vue'
import MediaVOD from '@/components/Media/VOD.vue'
import MediaRegulation from '@/components/Media/Regulation.vue'
import { MEDIA_SECTION_ENUM, type MediaSectionValue } from '@/types/page_section'
import useHashTabChange from '@/composables/useHashTabChange'

const { t } = useI18n()

const MEDIA_SECTION_VALUES = Object.values(MEDIA_SECTION_ENUM)

const tabs = computed(() =>
  MEDIA_SECTION_VALUES.map((section, index) => ({
    label: t(`page_tabs.media_tab_${(index + 1).toString().padStart(2, '0')}`),
    value: section,
  })),
)

const components: Record<MediaSectionValue, Component> = {
  [MEDIA_SECTION_ENUM.Regulation]: MediaRegulation,
  [MEDIA_SECTION_ENUM.ThemeAd]: MediaThemeAd,
  [MEDIA_SECTION_ENUM.OccupationIntro]: MediaOccupationIntro,
  [MEDIA_SECTION_ENUM.LiveStream]: MediaLiveStream,
  [MEDIA_SECTION_ENUM.VOD]: MediaVOD,
}

const { activeTab, handleActiveTabChange } = useHashTabChange(tabs, 'media')
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
  padding-top: calc(0.76rem + 1.16rem + 0.3rem);
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
    height: 1.2rem;
    background: #ffffff;
    @include zIndex(topbar);
    :deep(.page-tab-container) {
      margin: 0.16rem auto;
    }
  }
  :deep(a) {
    text-decoration: underline;
  }
  .section-container {
    @include flexCenter(column);
    width: 12.6rem;
    margin: 0 auto;
  }
  .section-sponsor {
    &__desc {
      font-size: 0.18rem;
      color: $black-primary;
      margin-bottom: 0.16rem;
      text-align: left;
    }
    &__reach {
      @include flexCenter(column);
      padding: 0.24rem;
      background-color: #fafcf2;
      border-radius: 0.08rem;
      margin-bottom: 0.16rem;
      .section-sponsor__reach-title {
        font-size: 0.28rem;
        color: $black-primary;
        margin-bottom: 0.08rem;
        font-weight: 700;
      }
      .section-sponsor__reach-item {
        background-color: #c8e14b;
        padding: 0.16rem;
        border-radius: 0.08rem;
        width: 100%;
        color: $black-primary;
        text-align: center;

        &:not(:last-child) {
          margin-bottom: 0.02rem;
        }
        .section-sponsor__reach-item-title {
          font-size: 0.18rem;
        }
        .section-sponsor__reach-number {
          font-size: 0.28rem;
        }
      }
    }
    .contact-info {
      padding: 0.24rem;
      background-color: #f3f4f5;
      text-align: center;
      border-radius: 0.08rem;
      @include flexCenter(column);
      &__title {
        font-size: 0.18rem;
        color: $black-primary;
        font-weight: 700;
        margin-bottom: 0.08rem;
      }
      &__desc {
        font-size: 0.16rem;
        color: $black-primary;
        &:not(:last-child) {
          margin-bottom: 0.16rem;
        }
      }
    }
  }
}
@include tablet {
  .get-involved {
    &__tab {
      height: 0.8rem;
    }
    .section-container {
      width: 6.64rem;
    }
  }
}
@include mobile {
  .get-involved {
    padding-top: 1.64rem;
    padding-bottom: 0.72rem;
    &__tab {
      height: 0.7rem;
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
      .section-sponsor {
        &__desc {
          font-size: 0.14rem;
        }
        &__reach {
          .section-sponsor__reach-title {
            font-size: 0.16rem;
          }
          .section-sponsor__reach-item {
            line-height: normal;
            .section-sponsor__reach-number {
              font-size: 0.16rem;
            }
            .section-sponsor__reach-item-title {
              font-size: 0.12rem;
            }
          }
        }
      }
    }
  }
}
</style>
