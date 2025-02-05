<template>
  <div class="coin-group">
    <div class="imgs">
      <div
        v-for="(coinImg, idx) in props.imgs"
        class="coin-img"
        :key="idx"
        :style="{ backgroundImage: `url(${coinImg})` }"
      ></div>
    </div>
    <div class="coin-label">
      {{ props.label }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  label: string
  imgs: string[]
}>()
</script>

<style lang="scss" scoped>
.coin-group {
  @include flexCenter(column);
  .imgs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.24rem;
  }
  .coin-img {
    width: 1.72rem;
    height: 0.78rem;
    flex: 1;
    @include bgCenter(100%);
  }
  .coin-label {
    background-color: #f0f0f0;
    font-size: 0.16rem;
    color: #000;
    font-weight: 700;
  }
}
</style>
