<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { LogisticsIconEnum } from './enum'
const props = defineProps<{
  name: LogisticsIconEnum
}>()

const iconClassNameMap = {
  [LogisticsIconEnum.AutobodyRepair]: 'repair',
  [LogisticsIconEnum.AutomobileTechnology]: 'tech',
  [LogisticsIconEnum.CarPainting]: 'painting',
}
</script>
<style lang="scss" scoped>
$types: (
  autobodyRepair: repair,
  automobileTechnology: tech,
  carPainting: painting,
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.#{$value} {
      background-image: url('/images/wsa/icon/logistic/ic_logistic-#{$value}.svg');
    }
  }
}
</style>
