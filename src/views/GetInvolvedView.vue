<template>
  <div class="get-involved">
    <BaseTitle class="get-involved__title" :title="$t('involved.title')" />
    <p class="get-involved__desc" data-aos="fade-up" data-aos-delay="500">
      {{ $t('involved.comming_soon') }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import BaseTitle from '@/components/BaseTitle.vue'
</script>

<style lang="scss" scoped>
.get-involved {
  padding-top: 0.76rem;
  @include withContainer;
  &__title {
    margin-top: 0.72rem;
    margin-bottom: 0.72rem;
  }
  &__desc {
    font-size: 0.28rem;
    font-weight: 700;
    color: #899ca4;
    text-align: center;
  }
}
</style>
