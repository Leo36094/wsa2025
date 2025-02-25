<script setup lang="ts">
import { NavigationMenuLink } from 'radix-vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <li class="nav-list-item">
    <NavigationMenuLink as-child>
      <div v-bind="$attrs" class="ListItemLink">
        <div class="ListItemHeading">
          {{ props.title }}
        </div>
      </div>
    </NavigationMenuLink>
  </li>
</template>

<style lang="scss" scoped>
.nav-list-item {
  cursor: pointer;
}
</style>
