<template>
  <div class="category" role="main">
    <div class="category-container">
      <div class="category-title-container">
        <h1 class="category-title">
          {{ $t('skills.skill_category_title') }}
        </h1>
      </div>
      <div
        class="skill-list"
        data-aos="fade-up"
        data-aos-delay="500"
        :aria-label="$t('skills.aria_label_skills_navigation')"
      >
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
      padding: 0 0.32rem 0.72rem 0.32rem;
      display: flex;
      max-width: 12.8rem;
      margin: 0 auto;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 0.16rem;
      .skill-item {
        cursor: pointer;
        &:hover {
          filter: brightness(0.9);
          transition: all 0.3s linear;
        }
      }
    }
  }
}
@include tablet {
  .category {
    .category-container {
      margin-bottom: 1.6rem;
      .skill-list {
        padding: 0 0.4rem;
        flex-direction: column;
        .skill-item {
          width: 100%;
        }
      }
    }
  }
}
@include mobile {
  .category {
    padding-top: 0;
    .category-container {
      .skill-list {
        padding: 0 0.24rem;
      }
      .category-title-container {
        margin: 0.32rem auto 0.16rem auto;
      }
      .category-title {
        font-size: 0.36rem;
      }
    }
  }
}
</style>
