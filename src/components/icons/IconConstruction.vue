<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { ConstructionIconEnum } from './enum'
const props = defineProps<{
  name: ConstructionIconEnum
}>()

const iconClassNameMap = {
  [ConstructionIconEnum.WallAndFloorTiling]: 'tilling',
  [ConstructionIconEnum.ElectricalInstallation]: 'install',
  [ConstructionIconEnum.Bricklaying]: 'bricklaying',
  [ConstructionIconEnum.PlasteringAndDrywall]: 'plastering',
  [ConstructionIconEnum.PaintingAndDecorating]: 'paint',
  [ConstructionIconEnum.Cabinetmaking]: 'cabinet',
  [ConstructionIconEnum.Joinery]: 'joinery',
  [ConstructionIconEnum.RefrigerationAndAirConditioning]: 'refrigeration',
  [ConstructionIconEnum.DigitalConstruction]: 'digital',
}
</script>
<style lang="scss" scoped>
$types: (
  wallAndFloorTiling: tilling,
  electricalInstallation: install,
  bricklaying: bricklaying,
  plasteringAndDrywall: plastering,
  paintingAndDecorating: paint,
  cabinetmaking: cabinet,
  joinery: joinery,
  refrigerationAndAirConditioning: refrigeration,
  digitalConstruction: digital,
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.#{$value} {
      background-image: url('/images/wsa/icon/construction/ic_construction-#{$value}.svg');
    }
  }
}
</style>
