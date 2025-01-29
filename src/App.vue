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
    <RouterView />
    <PageFooter />
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
