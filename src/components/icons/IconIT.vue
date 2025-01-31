<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { ITIconEnum } from './enum'
const props = defineProps<{
  name: ITIconEnum
}>()

const iconClassNameMap = {
  [ITIconEnum.InformationNetworkCabling]: 'cabling',
  [ITIconEnum.MobileApplicationDevelopment]: 'mobile',
  [ITIconEnum.SoftwareDevelopment]: 'software',
  [ITIconEnum.WebDevelopment]: 'web',
  [ITIconEnum.ITNetworkSystems]: 'networking',
  [ITIconEnum.CloudComputing]: 'cloud',
  [ITIconEnum.CyberSecurity]: 'security',
}
</script>
<style lang="scss" scoped>
$types: (
  informationNetworkCabling: cabling,
  mobileApplicationDevelopment: mobile,
  softwareDevelopment: software,
  webDevelopment: web,
  itNetworkSystems: networking,
  cloudComputing: cloud,
  cyberSecurity: security,
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.#{$value} {
      background-image: url('/images/wsa/icon/it/ic_it-#{$value}.svg');
    }
  }
}
</style>
