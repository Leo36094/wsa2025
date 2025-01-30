<template>
  <div class="skill-panel">
    <IconSkills :name="props.skillType" />
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

const SkillNameMap = {
  [SkillIconEnum.Manufacturing]: t('skills.category_manufacturing'),
  [SkillIconEnum.Construction]: t('skills.category_construction'),
  [SkillIconEnum.IT]: t('skills.category_it'),
  [SkillIconEnum.Logistics]: t('skills.category_logistics'),
  [SkillIconEnum.Social]: t('skills.category_social'),
  [SkillIconEnum.Art]: t('skills.category_art'),
  [SkillIconEnum.Juniors]: t('skills.category_juniors'),
}

const skillName = computed(() => SkillNameMap[props.skillType])
</script>
<style lang="scss" scoped>
.skill-panel {
  width: 6.27rem;
  height: 1.32rem;
  @include bgCenter(contain);
  border-radius: 0.1rem;
  padding: 0.32rem;

  @include flexCenter;
  justify-content: flex-start;
  background-image: url('/images/host/rectangle.png');
  .skill-name {
    margin-left: 0.32rem;
    font-size: 0.28rem;
    font-weight: 700;
  }
}
</style>
