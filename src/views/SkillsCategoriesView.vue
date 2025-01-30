<template>
  <div class="category">
    <div class="category-container">
      <h2 class="category-title">
        {{ $t('skills.skill_category_title') }}
      </h2>
      <div class="skill-list">
        <SkillPanel class="skill-item" v-for="skill in skills" :key="skill" :skill-type="skill" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SkillPanel from '@/components/SkillPanel.vue'

import { SkillIconEnum } from '@/components/icons/enum'

const skills = [
  SkillIconEnum.Manufacturing,
  SkillIconEnum.Construction,
  SkillIconEnum.IT,
  SkillIconEnum.Logistics,
  SkillIconEnum.Social,
  SkillIconEnum.Art,
  SkillIconEnum.Juniors,
]
</script>
<style lang="scss" scoped>
.category {
  padding-top: 0.76rem;
  .category-container {
    @include withContainer;
    .category-title {
      font-size: 0.48rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.4rem;
    }
    .skill-list {
      padding: 0 0.8rem 0.72rem 0.8rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .skill-item {
        &:nth-child(2n) {
          margin-left: 0.16rem;
        }
        &:not(:last-child) {
          margin-bottom: 0.16rem;
        }
      }
    }
  }
}
</style>
