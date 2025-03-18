<template>
  <section class="climate" id="climate" :aria-labelledby="$t('host.climate_title')">
    <div class="climate-container">
      <div class="title-light" aria-hidden="true"></div>
      <h2 id="climate-title" class="climate-title">
        {{ $t('host.climate_title') }}
      </h2>
      <div v-if="isDesktop" class="climate-content" :aria-label="$t('host.climate_desc')">
        <div class="row">
          <div class="col">
            <HostClimateItem
              :icon="icons.temperature"
              :title="$t('host.climate_title1')"
              :desc="$t('host.climate_desc1')"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <HostClimateItem
              :icon="icons.rain"
              :title="$t('host.climate_title2')"
              :desc="$t('host.climate_desc2')"
            />
          </div>
          <div class="col">
            <HostClimateItem
              :icon="icons.sun"
              :title="$t('host.climate_title3')"
              :desc="$t('host.climate_desc3')"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <HostClimateItem
              :icon="icons.humidity"
              :title="$t('host.climate_title4')"
              :desc="$t('host.climate_desc4')"
            />
          </div>
          <div class="col">
            <HostClimateItem
              :icon="icons.wind"
              :title="$t('host.climate_title5')"
              :desc="$t('host.climate_desc5')"
            />
          </div>
        </div>
      </div>
      <div v-else class="climate-content" :aria-label="$t('host.climate_desc') + 'mobile'">
        <div class="row" v-for="(item, index) in Object.keys(icons)" :key="item" role="list">
          <div class="col" role="listitem">
            <HostClimateItem
              :icon="icons[item as keyof typeof icons]"
              :title="$t(`host.climate_title${index + 1}`)"
              :desc="$t(`host.climate_desc${index + 1}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { type Ref, inject } from 'vue'
import HostClimateItem from '@/components/HostClimateItem.vue'

const icons = {
  temperature: `${import.meta.env.BASE_URL}images/wsa/icon/host/mdi_temperature.svg`,
  rain: `${import.meta.env.BASE_URL}images/wsa/icon/host/mdi_weather-heavy-rain.svg`,
  sun: `${import.meta.env.BASE_URL}images/wsa/icon/host/mdi_weather-sunny.svg`,
  humidity: `${import.meta.env.BASE_URL}images/wsa/icon/host/mdi_humidity-alert.svg`,
  wind: `${import.meta.env.BASE_URL}images/wsa/icon/host/mdi_weather-windy.svg`,
}

const isDesktop = inject<Ref<boolean>>('isDesktop')
</script>
<style lang="scss" scoped>
.climate {
  .climate-container {
    @include withContainer;
    padding: 0 0.3rem;
    position: relative;
    margin-top: 0.73rem;
    min-height: 6.9rem;
    .title-light {
      @include bgCenter(100%);
      width: 5rem;
      height: 5rem;
      background-image: url('/images/host/circle-yellow.png');
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
    .climate-title {
      font-size: 0.36rem;
      padding-top: 1.75rem;
      font-weight: 700;
      text-align: center;
    }
    .climate-content {
      width: 8.4rem;
      min-height: 4.7rem;
      margin: 0.64rem auto 1.6rem auto;
    }
    .row {
      display: flex;
      align-items: flex-start;
      &:not(:last-child) {
        margin-bottom: 0.56rem;
      }
      .col {
        flex: 1;
        &:not(:last-child) {
          margin-right: 0.56rem;
        }
      }
    }
  }
}
@include tablet {
  .climate {
    margin-bottom: 0.6rem;
    .climate-container {
      padding: 0 0.4rem;
      .title-light {
        display: none;
      }
      .climate-title {
        font-size: 0.36rem;
        padding-top: 0;
        text-align: left;
        margin-bottom: 0.32rem;
      }
      .climate-content {
        width: 100%;
        margin: 0 auto;
      }
      .row {
        &:not(:last-child) {
          margin-bottom: 0.32rem;
        }
        .col {
          margin: 0 auto;
        }
      }
    }
  }
}
@include mobile {
  .climate {
    .climate-container {
      padding: 0 0.24rem;
      .title-light {
        width: 2.6rem;
        height: 2.6rem;
        display: block;
        top: -0.5rem;
      }
      .row:not(:last-child) {
        margin-bottom: 0.24rem;
      }
      .climate-title {
        font-size: 0.24rem;
        text-align: center;
        margin-bottom: 0.24rem;
      }
    }
  }
}
</style>
