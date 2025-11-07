<template>
  <section class="host-wda" :aria-labelledby="$t('host.wda_title')">
    <div class="host-wda-container">
      <img src="/images/wda.png" alt="wda-logo" class="host-logo" />
      <div class="host-wda-title">
        <h2 :id="`${SECTION_ID.WDA}-title`">{{ $t('host.wda_title') }}</h2>
      </div>
      <div class="host-wda-content">
        <div role="article" v-html="$t('host.wda_content')"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SECTION_ID } from '@/types/page_section'
</script>

<style lang="scss" scoped>
.host-wda {
  width: 100%;
  .host-wda-container {
    width: 14.4rem;
    height: 100%;
    margin: 0 auto 1.6rem auto;
    @include bgCenter(14.4rem 8.46rem);
    background-image: url('/images/wsa/host_wda_desktop.png');
    padding: 0.8rem 3.2rem;
    padding-top: 0;
    border-radius: 0rem;
    color: $black-primary;
    .host-logo {
      width: 2rem;
      height: 0.42rem;
      margin: 0 auto 0.4rem auto;
    }
    .host-wda-title {
      margin-bottom: 0.4rem;
      font-size: 0.48rem;
      text-align: center;
      font-weight: 700;
    }
    .host-wda-content {
      width: 100%;
      height: 100%;
      font-size: 0.16rem;
      text-align: left;
    }
  }
}
@include tablet {
  .host-wda {
    width: 100%;
    .host-wda-container {
      width: 100%;
      padding: 0.64rem;
      border-radius: 0.64rem;
      background-image: url('/images/wsa/host_wda_tablet.png');
      @include bgCenter(100% 100%);
      .host-logo {
        margin-bottom: 0.16rem;
      }
      .host-wda-title {
        font-size: 0.36rem;
        margin-bottom: 0.16rem;
      }
    }
  }
}
@include mobile {
  .host-wda {
    width: 100%;
    .host-wda-container {
      padding: 0.24rem;
      margin: 0 auto 0.8rem auto;
      background-image: url('/images/wsa/host_wda_mobile.png');
      border-radius: 0.2rem;
      .host-logo {
        margin-bottom: 0.08rem;
      }
      .host-wda-title {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
