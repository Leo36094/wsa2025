<template>
  <div class="skill">
    <RouterView />
  </div>
</template>
<script lang="ts" setup>
import SkillsCategoryView from './SkillsCategoriesView.vue'
</script>

<style lang="scss" scoped>
.skill {
  padding-top: 0.76rem;
  min-height: 100vh;
}
</style>
