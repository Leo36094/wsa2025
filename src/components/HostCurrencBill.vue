<template>
  <div class="bill-group">
    <div class="bill-img" :style="{ backgroundImage: `url(${props.img})` }"></div>
    <div class="bill-label">
      {{ props.label }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  label: string
  img: string
}>()
</script>

<style lang="scss" scoped>
.bill-group {
  @include flexCenter(column);
  .bill-img {
    width: 2.18rem;
    height: 1.03rem;
    margin-bottom: 0.24rem;
    @include bgCenter(100%);
  }
  .bill-label {
    font-size: 0.16rem;
    color: #000;
    line-height: 0.19rem;
    font-weight: 700;
  }
}
@include mobile {
  .bill-group .bill-img {
    margin-bottom: 0.16rem;
  }
}
</style>
