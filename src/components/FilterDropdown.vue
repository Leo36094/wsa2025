<template>
  <SelectRoot :value="selectedValue" @update:model-value="handleClick">
    <SelectTrigger class="SelectTrigger" aria-label="Skill Dropdown">
      <SelectValue :placeholder="props.placeholder" />
      <IconSelectArrow />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent class="SelectContent" position="popper" :side-offset="10" align="center">
        <SelectViewport class="SelectViewport">
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in props.options"
              :key="index"
              class="SelectItem"
              :value="option[props.valueKey]"
            >
              <SelectItemText>
                {{ option[props.labelKey] }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
<script setup lang="ts">
import './dropdown.css'

import {
  SelectRoot,
  SelectPortal,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectItemText,
  SelectValue,
  SelectContent,
  SelectViewport,
} from 'radix-vue'
import IconSelectArrow from './icons/IconSelectArrow.vue'

interface Props<T extends Record<string, string>> {
  options: T[]
  valueKey: keyof T
  labelKey: keyof T
  selectedValue: string | number
  placeholder?: string
}

const props = defineProps<Props<Record<string, string>>>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const handleClick = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped></style>
