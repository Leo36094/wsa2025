<template>
  <div class="skill-tab">
    <div class="skill-tab-container">
      <div class="skill-row" v-for="(skillRow, idx) in props.skillList" :key="idx">
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
  </div>
</template>
<script lang="ts" setup>
import type { TSkillTab } from '@/types/skills'
const props = defineProps<{
  skillList: Array<TSkillTab[]>
  selectedSkill: TSkillTab
}>()

const emits = defineEmits<{
  (e: 'click', skill: TSkillTab): void
}>()

function handleClick(skill: TSkillTab) {
  emits('click', skill)
}
</script>
<style lang="scss" scoped>
.skill-tab {
  .skill-tab-container {
    @include withContainer;
    width: 12.8rem;
    border: 1px solid #ffffff1a;
    .skill-row {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        border-bottom: 1px solid #ffffff1a;
      }
    }
    .skill-col {
      cursor: pointer;
      padding: 0.08rem 0.16rem 0.08rem 0.3rem;
      font-size: 0.16rem;
      font-weight: 400;
      width: 3.2rem;
      height: 0.35rem;
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
        background: #c8e14b;
        visibility: hidden;
      }

      &:not(:last-child) {
        border-right: 1px solid #ffffff1a;
      }
      &:not(:nth-child(4n)) {
        border-right: 1px solid #ffffff1a;
      }
      &:hover,
      &:focus {
        background: #ffffff1a;
      }
      &--selected {
        background: #ffffff1a;
        &::before {
          visibility: visible;
        }
      }
    }
  }
}
</style>
