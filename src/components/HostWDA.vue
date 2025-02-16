<template>
  <div class="host-wda" :id="SECTION_ID.WDA">
    <div class="host-wda-container">
      <div class="host-wda-title">
        <h1>{{ $t('host.wda_title') }}</h1>
      </div>
      <div class="host-wda-content">
        <p v-html="$t('host.wda_content')"></p>
      </div>
    </div>
  </div>
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
    margin: 1.6rem auto;
    @include bgCenter(cover);
    background-image: url('/images/host/host_background.jpg');
    padding: 0.8rem 3.2rem;
    border-radius: 0.4rem;
    color: #fff;
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
      text-align: justify;
    }
  }
}
@include tablet {
  .host-wda {
    width: 100%;
    .host-wda-container {
      width: 100%;
      padding: 0.32rem 0.64rem;
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
      margin: 0.8rem auto;
      .host-wda-title {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
