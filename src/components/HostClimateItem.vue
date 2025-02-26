<template>
  <div class="climate-item">
    <div class="climate-item__icon">
      <img :src="props.icon" alt="icon" />
    </div>
    <div class="climate-item__copy">
      <h2>{{ props.title }}</h2>
      <p>{{ props.desc }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  icon: string
  title: string
  desc: string
}>()
</script>
<style lang="scss" scoped>
.climate-item {
  display: flex;
  align-items: flex-start;
  &__icon {
    flex-shrink: 0;
    width: 0.68rem;
    height: 0.68rem;
    background-image: url('/images/host/square-yellow.png');
    background-size: cover;
    @include flexCenter;
  }
  &__copy {
    @include flexCenter(column);
    align-items: flex-start;
    margin-left: 0.24rem;
    h4 {
      font-size: 0.28rem;
      font-weight: 700;
      margin-bottom: 0.16rem;
    }
    p {
      font-size: 0.16rem;
    }
  }
}
@include tablet {
  .climate-item {
    &__icon {
      width: 0.68rem;
      height: 0.68rem;
    }
    &__copy {
      h4 {
        margin-bottom: 0.16rem;
      }
      p {
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
@include mobile {
  .climate-item {
    &__icon {
      width: 0.44rem;
      height: 0.44rem;
    }
    &__copy {
      margin-left: 0.16rem;
      h4 {
        font-size: 0.16rem;
      }
    }
  }
}
</style>
