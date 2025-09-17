<template>
  <div class="ad-item">
    <div class="item-img" :style="{ backgroundImage: `url(${imgUrl})` }"></div>
    <div class="item-copy">
      <h4 class="item-copy-title">{{ title }}</h4>
      <p class="item-copy-desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  imgUrl: string
  title: string
  desc: string
}>()
</script>

<style lang="scss" scoped>
.ad-item {
  @include flexCenter(column);
  width: 3.93rem;

  .item-img {
    width: 100%;
    height: 2.21rem;
    @include bgCenter(100%);
  }
  .item-copy {
    text-align: left;
    width: 100%;
    .item-copy-title {
      margin: 0.16rem 0;
      font-size: 0.28rem;
      font-weight: 700;
    }
    .item-copy-desc {
      font-size: 0.16rem;
      height: 0.75rem;
      @include ellipsis-line(3);
    }
  }
}

</style>
