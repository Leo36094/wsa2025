<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { SkillIconEnum } from './enum'
const props = defineProps<{
  name: SkillIconEnum
}>()

const iconClassNameMap = {
  [SkillIconEnum.Art]: 'icon-art',
  [SkillIconEnum.Construction]: 'icon-construction',
  [SkillIconEnum.IT]: 'icon-it',
  [SkillIconEnum.Juniors]: 'icon-juniors',
  [SkillIconEnum.Logistics]: 'icon-logistics',
  [SkillIconEnum.Manufacturing]: 'icon-manufacturing',
  [SkillIconEnum.Social]: 'icon-social',
}
</script>
<style lang="scss" scoped>
$types: (
  art: '06',
  construction: '02',
  it: '03',
  logistics: '04',
  manufacturing: '01',
  social: '05' /* juniors: 'juniors', */,
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.icon-#{$type} {
      background-image: url('/images/wsa/icon/skills_#{$value}.svg');
    }
  }
  &.icon-juniors {
    background-image: url('/images/wsa/icon/ic_skill-juniors.png');
  }
}
</style>
