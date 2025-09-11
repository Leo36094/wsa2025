<template>
  <section class="host-traffic" :aria-labelledby="$t('host.traffic_title')" id="traffic">
    <div class="host-traffic-container">
      <BaseTitle class="host-traffic__title" :title="$t('host.traffic_title')" />
      <HostTrafficMRTSection />
      <HostTrafficBikeSection />
      <HostTrafficHSRSection />
      <HostTrafficBusSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseTitle from '@/components/BaseTitle.vue'
import HostTrafficMRTSection from '@/components/HostTraffic/MRTSection.vue'
import HostTrafficBikeSection from '@/components/HostTraffic/BikeSection.vue'
import HostTrafficHSRSection from '@/components/HostTraffic/HSRSection.vue'
import HostTrafficBusSection from '@/components/HostTraffic/BusSection.vue'

</script>

<style lang="scss" scoped>
.host-traffic {
  .host-traffic-container {
    width: 12.8rem;
    margin: 0 auto;
  }
}
@include tablet {
  .host-traffic {
    .host-traffic-container {
      width: 100%;
    }
  }
}
</style>
