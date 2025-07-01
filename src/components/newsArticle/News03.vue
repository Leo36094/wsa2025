<template>
  <div class="section-container">
    <GetInvolvedTour class="news-03" />
  </div>
</template>
<script setup lang="ts">
import GetInvolvedTour from '@/components/GetInvolvedTour.vue'
</script>

<style lang="scss" scoped>
.section-container {
  @include flexCenter(column);
  width: 6.24rem;
  margin: 0 auto;
}

@include tablet {
  .section-container {
    width: 6.64rem;
  }
}
@include mobile {
  .section-container {
    width: 100%;
    padding: 0.16rem;
  }
}
</style>
