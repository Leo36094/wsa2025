<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { JuniorsIconEnum } from './enum'
const props = defineProps<{
  name: JuniorsIconEnum
}>()

const iconClassNameMap = {
  [JuniorsIconEnum.Electronics]: 'electronics',
  [JuniorsIconEnum.AutonomousMobileRobotics]: 'robot',
  [JuniorsIconEnum.ElectricalInstallation]: 'install',
  [JuniorsIconEnum.PaintingAndDecorating]: 'paint',
  [JuniorsIconEnum.Web]: 'web',
  [JuniorsIconEnum.HairDressing]: 'hair',
  [JuniorsIconEnum.RestaurantService]: 'restaurant',
  [JuniorsIconEnum.GraphicDesign]: 'design',
}
</script>
<style lang="scss" scoped>
$types: (
  electronics: electronics,
  autonomousMobileRobotics: robot,
  electricalInstallation: install,
  paintingAndDecorating: paint,
  web: web,
  hairDressing: hair,
  restaurantService: restaurant,
  graphicDesign: design,
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.#{$value} {
      background-image: url('/images/wsa/icon/juniors/ic_juniors-#{$value}.svg');
    }
  }
}
</style>
