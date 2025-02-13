<template>
  <div class="host">
    <HostBanner />
    <HostCurrency />
    <HostPower />
    <HostClimate />
    <HostSkill />
  </div>
</template>

<script lang="ts" setup>
import HostBanner from '@/components/HostBanner.vue'
import HostCurrency from '@/components/HostCurrency.vue'
import HostPower from '@/components/HostPower.vue'
import HostClimate from '@/components/HostClimate.vue'
import HostSkill from '@/components/HostSkill.vue'
</script>
<style lang="scss" scoped>
.host {
  padding-top: 0.76rem;
  background: #18475b;
  .host-currency {
    @include withContainer;
  }
}
</style>
