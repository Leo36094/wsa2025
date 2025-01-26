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
  .host-currency {
    @include withContainer;
  }
}
</style>
