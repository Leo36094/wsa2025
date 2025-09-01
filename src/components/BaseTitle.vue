<template>
  <div :class="['first-slide__title', className]">
    <h2 :style="style">{{ props.title }}</h2>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  className?: string
  style?: Record<string, string>
}>()
</script>
<style lang="scss" scoped>
.first-slide {
  &__title {
    overflow: hidden;
    text-align: center;
    h2 {
      color: transparent;
      color: $black-primary;
      font-size: 0.36rem;
      font-weight: 700;
    }
  }
}
@include mobile {
  .first-slide {
    &__title {
      h2 {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
