<template>
  <div class="host">
    <HostBanner />
    <div class="host-currency"></div>
  </div>
</template>

<script lang="ts" setup>
import HostBanner from '@/components/HostBanner.vue'
</script>
<style lang="scss" scoped>
.host {
  padding-top: 0.76rem;
  .host-currency {
    @include withContainer;
  }
}
</style>
