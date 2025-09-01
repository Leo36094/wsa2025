<template>
  <section
    class="competitors"
    :aria-labelledby="$t('competition.competitors_title')"
    id="competitors"
  >
    <div class="competitors-container">
      <div class="title-group">
        <BaseTitle
          :style="{ color: '#fff' }"
          class="competitors__title"
          :title="$t('competition.competitors_title')"
        />
        <p class="competitors__desc">
          {{ $t('competition.competitors_desc') }}
        </p>
      </div>
      <div class="competitors__content">
        <div class="countries-grid">
          <div v-for="country in countries" :key="country.code" class="country-flag">
            <Flag :waving="waving" :country="country.flag" :name="country.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'
import { useI18n } from 'vue-i18n'
import Flag from '@/components/Flag.vue'

const { locale } = useI18n()
const isMobile = inject('isMobile') as Ref<boolean>
const lang = computed(() => {
  return locale.value === 'en' ? 'en' : 'zh-TW'
})

const waving = computed(() => {
  return !isMobile.value
})

// Countries map with Chinese names and flag codes
const countriesMap = {
  AE: { name: '阿拉伯聯合大公國', flag: 'AE_flag' },
  AM: { name: '亞美尼亞', flag: 'AM_flag' },
  AZ: { name: '亞塞拜然', flag: 'AZ_flag' },
  BD: { name: '孟加拉', flag: 'BD_flag' },
  BH: { name: '巴林', flag: 'BH_flag' },
  BN: { name: '汶萊', flag: 'BN_flag' },
  BT: { name: '不丹', flag: 'BT_flag' },
  ID: { name: '印尼', flag: 'ID_flag' },
  IN: { name: '印度', flag: 'IN_flag' },
  IR: { name: '伊朗', flag: 'IR_flag' },
  JO: { name: '約旦', flag: 'JO_flag' },
  JP: { name: '日本', flag: 'JP_flag' },
  KG: { name: '吉爾吉斯', flag: 'KG_flag' },
  KR: { name: '南韓', flag: 'KR_flag' },
  KW: { name: '科威特', flag: 'KW_flag' },
  LK: { name: '斯里蘭卡', flag: 'LK_flag' },
  MN: { name: '蒙古', flag: 'MN_flag' },
  MV: { name: '馬爾地夫', flag: 'MV_flag' },
  MY: { name: '馬來西亞', flag: 'MY_flag' },
  OM: { name: '阿曼', flag: 'OM_flag' },
  PG: { name: '巴布亞新幾內亞', flag: 'PG_flag' },
  PH: { name: '菲律賓', flag: 'PH_flag' },
  PS: { name: '巴勒斯坦', flag: 'PS_flag' },
  SA: { name: '沙烏地阿拉伯', flag: 'SA_flag' },
  TH: { name: '泰國', flag: 'TH_flag' },
  TL: { name: '東帝汶', flag: 'TL_flag' },
  TW: { name: '中華台北', flag: 'TW_flag' },
  UZ: { name: '烏茲別克', flag: 'UZ_flag' },
  YE: { name: '葉門', flag: 'YE_flag' },
}

// Convert to array for easier iteration
const countries = Object.entries(countriesMap).map(([code, info]) => ({
  code,
  name: info.name,
  flag: info.flag,
}))
</script>

<style lang="scss" scoped>
$block-bg-color: #fff;
$note-bg-color: #c8e14b;
$title-bg-color: #18475b;

$font-size-title: (
  pc: 0.28rem,
  tablet: 0.2rem,
  mobile: 0.16rem,
);

$font-size-info: (
  pc: 0.16rem,
  tablet: 0.14rem,
  mobile: 0.12rem,
);

.competitors {
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  background: $white-bg;
  .competitors-container {
    width: 12rem;
    margin: 0 auto;

    .title-group {
      display: flex;
      padding: 0.64rem;
      flex-direction: column;
      align-items: center;
      align-self: stretch;
      border-radius: 0.4rem;
      background: $title-bg-color;
      border-radius: 40px;
      color: #fff;
      .competitors__title h2 {
        color: #fff !important;
        margin-bottom: 0.4rem;
      }
      .competitors__desc {
        font-size: map-get($font-size-info, pc);
        font-weight: 400;
      }
    }
  }
  .competitors__title {
    margin-bottom: 0.4rem;
  }
  .competitors__content {
    margin-top: 0.4rem;
    .countries-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.24rem;
    }
  }
}
@include tablet {
  .competitors {
    .competitors-container {
      width: 100%;
      padding: 0 0.4rem;
    }
    .competitors__title {
      margin-bottom: 0.4rem;
    }
    .competitors__content {
      .countries-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.24rem;
      }
    }
  }
}
@include mobile {
  .competitors {
    .competitors-container {
      width: 100%;
      padding: 0 0.24rem;
    }
    .competitors__content {
      .countries-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.16rem;
      }
    }
  }
}
@include listStyle();
</style>
