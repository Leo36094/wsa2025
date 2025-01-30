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
  art: 'art',
  construction: 'construction',
  it: 'it',
  juniors: 'juniors',
  logistics: 'logistics',
  manufacturing: 'manufacturing',
  social: 'social',
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.icon-#{$value} {
      background-image: url('/images/wsa/icon/ic_skill-#{$value}.svg');
    }
  }
}
</style>
