<template>
  <iframe
    width="560"
    height="315"
    :src="src"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  embedId: string
  title?: string
}>()

const src = computed(() => {
  return `https://www.youtube.com/embed/${props.embedId}`
})
</script>

<style scoped>
iframe {
  max-width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
}
</style>
