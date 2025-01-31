<template>
  <div :class="['skill-icon', iconClassNameMap[props.name]]"></div>
</template>
<script lang="ts" setup>
import { SocialIconEnum } from './enum'
const props = defineProps<{
  name: SocialIconEnum
}>()

const iconClassNameMap = {
  [SocialIconEnum.HairDressing]: 'hairdressing',
  [SocialIconEnum.BeautyTherapy]: 'beauty',
  [SocialIconEnum.Cooking]: 'cooking',
  [SocialIconEnum.RestaurantService]: 'restaurant',
  [SocialIconEnum.HealthCare]: 'socialcare',
}
</script>
<style lang="scss" scoped>
$types: (
  hairDressing: hairdressing,
  beautyTherapy: beauty,
  cooking: cooking,
  restaurantService: restaurant,
  healthCare: socialcare,
);
.skill-icon {
  @include bgCenter(contain);
  width: 0.48rem;
  height: 0.48rem;

  @each $type, $value in $types {
    &.#{$value} {
      background-image: url('/images/wsa/icon/social/ic_social-#{$value}.svg');
    }
  }
}
</style>
