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
    height: 1.07rem;
    h1 {
      color: transparent;
      background-clip: text;
      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 14.29%, #ffffff 80.52%);
      font-size: 0.88rem;
      font-weight: 700;
      animation: title-slide-up 0.5s forwards;
    }
  }
}
</style>
