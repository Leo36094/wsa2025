<script setup lang="ts">
import { NavigationMenuLink } from 'radix-vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <div v-bind="$attrs" class="ListItemLink">
        <div class="ListItemHeading">
          {{ props.title }}
        </div>
      </div>
    </NavigationMenuLink>
  </li>
</template>
