<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { ArtIconEnum } from './enum'
const props = defineProps<{
  name: ArtIconEnum
}>()

const iconClassNameMap = {
  [ArtIconEnum.Floristry]: 'flower',
  [ArtIconEnum.FashionTechnology]: 'fashion',
  [ArtIconEnum.GraphicDesignTechnology]: 'design',
  [ArtIconEnum.GameArt]: 'game',
}
</script>
<style lang="scss" scoped>
$types: (
  floristry: flower,
  fashionTechnology: fashion,
  graphicDesignTechnology: design,
  gameArt: game,
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.#{$value} {
      background-image: url('/images/wsa/icon/art/ic_art-#{$value}.svg');
    }
  }
}
</style>
