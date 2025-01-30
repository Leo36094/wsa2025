<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { ManufacturingIconEnum } from './enum'
const props = defineProps<{
  name: ManufacturingIconEnum
}>()

const iconClassNameMap = {
  [ManufacturingIconEnum.Mechatronics]: 'mechatronics',
  [ManufacturingIconEnum.MechanicalEngineeringCAD]: 'cad',
  [ManufacturingIconEnum.CNCMilling]: 'cnc',
  [ManufacturingIconEnum.CNCTurning]: 'cnc',
  [ManufacturingIconEnum.Welding]: 'welding',
  [ManufacturingIconEnum.Electronics]: 'electronics',
  [ManufacturingIconEnum.IndustrialControl]: 'control',
  [ManufacturingIconEnum.AutonomousMobileRobotics]: 'autorobot',
  [ManufacturingIconEnum.PlasticDieEngineering]: 'plastic',
  [ManufacturingIconEnum.PrototypeModelling]: 'prototype',
  [ManufacturingIconEnum.IndustrialDesign]: 'id',
  [ManufacturingIconEnum.RobotSystemsIntegration]: 'robot',
}
</script>
<style lang="scss" scoped>
$types: (
  mechatronics: 'mechatronics',
  cad: 'cad',
  cnc: 'cnc',
  welding: 'welding',
  electronics: 'electronics',
  control: 'control',
  autorobot: 'autorobot',
  plastic: 'plastic',
  prototype: 'prototype',
  id: 'id',
  robot: 'robot',
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.#{$value} {
      background-image: url('/images/wsa/icon/manufacturing/ic_manufacturing-#{$value}.svg');
    }
  }
}
</style>
