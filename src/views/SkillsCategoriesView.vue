<template>
  <div class="category">
    <div class="category-container">
      <div class="category-title-container">
        <h2 class="category-title">
          {{ $t('skills.skill_category_title') }}
        </h2>
      </div>
      <div class="skill-list" data-aos="fade-up" data-aos-delay="500">
        <SkillPanel
          class="skill-item"
          v-for="skill in skills"
          :key="skill"
          :skill-type="skill"
          @click="() => goSkillDetail(skill)"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SkillPanel from '@/components/SkillPanel.vue'
import { SkillIconEnum } from '@/components/icons/enum'
import { SkillsRouteEnum } from '@/router'
import { useRouter } from 'vue-router'

const skills = [
  SkillIconEnum.Manufacturing,
  SkillIconEnum.Construction,
  SkillIconEnum.IT,
  SkillIconEnum.Logistics,
  SkillIconEnum.Social,
  SkillIconEnum.Art,
  SkillIconEnum.Juniors,
]

const routeMap = {
  [SkillIconEnum.Manufacturing]: SkillsRouteEnum.Manufacturing,
  [SkillIconEnum.Construction]: SkillsRouteEnum.Construction,
  [SkillIconEnum.IT]: SkillsRouteEnum.IT,
  [SkillIconEnum.Logistics]: SkillsRouteEnum.Logistics,
  [SkillIconEnum.Social]: SkillsRouteEnum.Social,
  [SkillIconEnum.Art]: SkillsRouteEnum.Art,
  [SkillIconEnum.Juniors]: SkillsRouteEnum.Juniors,
}

const router = useRouter()

const goSkillDetail = (skill: SkillIconEnum) => {
  router.push({ name: routeMap[skill] })
}
</script>
<style lang="scss" scoped>
.category {
  padding-top: 0.76rem;
  .category-container {
    @include withContainer;
    .category-title-container {
      overflow: hidden;
      margin-bottom: 0.4rem;
    }
    .category-title {
      font-size: 0.48rem;
      font-weight: 700;
      text-align: center;
      animation: title-slide-up 0.5s forwards;
    }
    .skill-list {
      padding: 0 0.8rem 0.72rem 0.8rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .skill-item {
        cursor: pointer;
        &:hover {
          filter: brightness(1.5);
          transition: all 0.3s linear;
        }
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
