<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <div class="wsa">
    <PageHeader />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
