<template>
  <div class="get-involved">
    <PageTab
      class="get-involved__tab"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="handleActiveTabChange"
    />
    <div class="section-container">
      <div class="section-sponsor" :id="SECTION_ID.Sponsorship">
        <BaseTitle class="get-involved__title" :title="$t('involved.sponsorship')" />
        <p class="section-sponsor__desc" data-aos="fade-up">
          {{ $t('involved.sponsorship_desc') }}
        </p>

        <div class="section-sponsor__reach">
          <h1 class="section-sponsor__reach-title">{{ $t('involved.sponsorship_reach') }}</h1>
          <div
            v-for="sponsor in sponsorList"
            :key="sponsor.title"
            class="section-sponsor__reach-item"
          >
            <div class="section-sponsor__reach-number">{{ sponsor.number }}</div>
            <p class="section-sponsor__reach-item-title">
              {{ sponsor.title }}
            </p>
          </div>
        </div>

        <div class="contact-info">
          <h2 class="contact-info__title">{{ $t('involved.sponsorship_contact') }}</h2>
          <p class="contact-info__desc">李宜霖 Yiling Li 小姐</p>
          <a class="contact-info__desc" href="mailto:yiling_li@nasme.org.tw"
            >yiling_li@nasme.org.tw</a
          >
          <p class="contact-info__desc">巫承穎 Sandy Wu 小姐</p>
          <a class="contact-info__desc" href="mailto:sandy_wu@wda.gov.tw">sandy_wu@wda.gov.tw</a>
        </div>
      </div>

      <!-- Temp Hide -->
      <!-- <div class="section-theme-exhibition" :id="SECTION_ID.ThemeExhibition">
        <BaseTitle class="get-involved__title" :title="$t('involved.theme_exhibition')" />
        <p class="get-involved__coming-soon" data-aos="fade-up">
          {{ $t('involved.coming_soon') }}
        </p>
      </div>

      <div class="section-try-out" :id="SECTION_ID.TryOut">
        <BaseTitle class="get-involved__title" :title="$t('involved.try_out')" />
        <p class="get-involved__coming-soon" data-aos="fade-up">
          {{ $t('involved.coming_soon') }}
        </p>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PageSectionEnum, type PageValue, SECTION_ID } from '@/types/page_section'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import BaseTitle from '@/components/BaseTitle.vue'
import PageTab from '@/components/PageTab.vue'

const { t } = useI18n()

const tabs = computed(() => [
  {
    label: t('page_tabs.involved_tab_01'),
    value: PageSectionEnum.Sponsorship,
  },
  // {
  //   label: t('page_tabs.involved_tab_02'),
  //   value: PageSectionEnum.ThemeExhibition,
  // },
  // {
  //   label: t('page_tabs.involved_tab_03'),
  //   value: PageSectionEnum.TryOut,
  // },
])
const router = useRouter()
const activeTab = ref(tabs.value[0].value)

const sponsorList = computed(() => {
  return [
    {
      number: '28+',
      title: t('involved.sponsorship_visitor'),
    },
    {
      number: '30+',
      title: t('involved.sponsorship_government'),
    },
    {
      number: '500+',
      title: t('involved.sponsorship_educational'),
    },
  ]
})

const handleActiveTabChange = (value: PageValue) => {
  // 似乎不需要處理，因為只有第一個 active 會被顯示
  // activeTab.value = value
  router.push({
    name: 'get-involved',
    hash: value,
  })
}
</script>

<style lang="scss" scoped>
.get-involved {
  padding-top: 0.76rem;
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
    :deep(.page-tab-container) {
      margin: 0.16rem auto;
    }
  }
  .section-container {
    @include flexCenter(column);
    width: 6.24rem;
    margin: 0 auto;
  }
  .section-sponsor {
    &__desc {
      font-size: 0.18rem;
      color: $black-primary;
      margin-bottom: 0.16rem;
      text-align: justify;
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
          margin-bottom: 0.08rem;
        }
      }
    }
  }
}
@include tablet {
  .get-involved {
    .section-container {
      width: 6.64rem;
    }
  }
}
@include mobile {
  .get-involved {
    padding-top: 0.72rem;
    padding-bottom: 0.72rem;
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
