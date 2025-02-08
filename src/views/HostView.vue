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
  background: linear-gradient(0deg, #18475b 1.87%, #002635 100%);
  .host-currency {
    @include withContainer;
  }
}
</style>
