<template>
  <div class="skill-panel" :aria-label="skillName">
    <IconSkills class="skill-icon" :name="props.skillType" />
    <p class="skill-name">
      {{ skillName }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { SkillIconEnum } from './icons/enum'
import IconSkills from './icons/IconSkills.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  skillType: SkillIconEnum
}>()

const SkillNameMap = computed(() => ({
  [SkillIconEnum.Manufacturing]: t('skills.category_manufacturing'),
  [SkillIconEnum.Construction]: t('skills.category_construction'),
  [SkillIconEnum.IT]: t('skills.category_it'),
  [SkillIconEnum.Logistics]: t('skills.category_logistics'),
  [SkillIconEnum.Social]: t('skills.category_social'),
  [SkillIconEnum.Art]: t('skills.category_art'),
  [SkillIconEnum.Juniors]: t('skills.category_juniors'),
}))

const skillName = computed(() => SkillNameMap.value[props.skillType])
</script>
<style lang="scss" scoped>
.skill-panel {
  width: 6rem;
  height: 1.32rem;
  @include bgCenter(100% 100%);
  border-radius: 0.1rem;
  padding: 0.32rem;

  @include flexCenter;
  justify-content: flex-start;
  background: #f3f4f5;
  .skill-name {
    margin-left: 0.32rem;
    font-size: 0.28rem;
    font-weight: 700;
  }
}
@include tablet {
  .skill-panel {
    width: 100%;
    height: 1.12rem;
    .skill-name {
      line-height: normal;
    }
  }
}
@include mobile {
  .skill-panel {
    height: 1.05rem;
    padding: 0.24rem;
    .skill-name {
      font-size: 0.16rem;
      margin-left: 0.24rem;
      line-height: normal;
    }
  }
}
</style>
