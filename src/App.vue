<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
onMounted(() => {
  AOS.init()
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
