<template>
  <div class="first-slide__title">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>
<style lang="scss" scoped>
.first-slide {
  &__title {
    overflow: hidden;
    text-align: center;
    h1 {
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
      h1 {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
