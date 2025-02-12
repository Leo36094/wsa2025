<script setup lang="ts">
import { ref, provide } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

const isDesktop = ref(false)

function checkIsDesktop() {
  isDesktop.value = window.innerWidth >= 1024
}

provide('isDesktop', isDesktop)

onMounted(() => {
  AOS.init()
  window.addEventListener('resize', checkIsDesktop)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkIsDesktop)
})
</script>

<template>
  <div class="wsa">
    <PageHeader />
    <div class="container">
      <RouterView />
    </div>
    <PageFooter />
  </div>
</template>
<style lang="scss" scoped>
.container {
  min-height: 100svh;
  margin: 0 auto;
}
</style>
