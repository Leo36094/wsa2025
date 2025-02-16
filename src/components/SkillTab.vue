<template>
  <div
    class="skill-tab"
    data-aos="fade-up"
    data-aos-delay="500"
    data-aos-anchor-placement="top-bottom"
  >
    <div v-if="!props.showSelect" class="skill-tab-container">
      <div class="skill-row" v-for="(skillRow, idx) in skillListCols" :key="idx">
        <div
          :class="['skill-col', { 'skill-col--selected': props.selectedSkill.id === skill.id }]"
          v-for="skill in skillRow"
          :key="skill.id"
          @click="handleClick(skill)"
        >
          {{ skill.label }}
        </div>
      </div>
    </div>
    <div v-else class="skill-select">
      <FilterDropdown
        :value="selectedSkill.id"
        :options="skillList"
        :placeholder="selectedSkill.label"
        valueKey="id"
        labelKey="label"
        :selectedValue="selectedSkill.id"
        @update:modelValue="onSelectUpdate"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { TSkillTab } from '@/types/skills'
import FilterDropdown from './FilterDropdown.vue'

const COLS = 4
const props = defineProps<{
  skillList: TSkillTab[]
  selectedSkill: TSkillTab
  showSelect: boolean
}>()

const skillListCols = computed(() => {
  const rows = Math.ceil(props.skillList.length / COLS)
  return Array.from({ length: rows }, (_, i) => props.skillList.slice(i * COLS, (i + 1) * COLS))
})

const emits = defineEmits<{
  (e: 'click', skill: TSkillTab): void
}>()

function handleClick(skill: TSkillTab) {
  emits('click', skill)
}
function onSelectUpdate(id: string) {
  const skill = props.skillList.find((skillItem) => skillItem.id === id)
  if (skill) emits('click', skill)
  else {
    throw new Error(`Skill id ${id} not found`)
  }
}
</script>
<style lang="scss" scoped>
$border-color: #899ca4;
.skill-tab {
  .skill-tab-container {
    @include withContainer;
    width: 12.8rem;
    border: 1px solid $border-color;
    border-radius: 0.04rem;
    background: #f3f4f5;
    .skill-row {
      display: flex;
      align-items: stretch;
    }
    .skill-col {
      cursor: pointer;
      padding: 0.08rem 0.16rem 0.08rem 0.3rem;
      font-size: 0.16rem;
      font-weight: 400;
      width: 3.2rem;
      display: flex;
      align-items: center;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.16rem;
        width: 0.06rem;
        height: 0.2rem;
        background: $green-primary;
        visibility: hidden;
      }

      &--selected,
      &:hover {
        background: #ffffff1a;
        &::before {
          visibility: visible;
        }
      }
    }
  }
}
@include tablet {
  .skill-tab {
    .skill-tab-container {
      max-width: 6.64rem;
      width: 100%;
      overflow: hidden;
      .skill-col {
        padding: 0.08rem 0.08rem 0.08rem 0.3rem;
        font-size: 0.16rem;
        line-height: normal;
        width: 1.66rem;
        &:before {
          width: 0.06rem;
          height: 0.2rem;
        }
      }
    }
  }
}
@include mobile {
  .skill-select {
    width: 2.77rem;
    margin: 0 auto;
  }
}
</style>
