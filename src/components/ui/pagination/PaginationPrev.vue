<script setup lang="ts">
import {
  Button,
} from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-vue-next'
import { PaginationPrev, type PaginationPrevProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button :class="cn('wsaw-10 wsah-10 wsap-0', props.class)" variant="outline">
      <slot>
        <ChevronLeft class="wsah-4 wsaw-4" />
      </slot>
    </Button>
  </PaginationPrev>
</template>
