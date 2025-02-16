<template>
  <div class="icon-button">
    <component :is="IconComponentMap[props.viewName]" :name="displayIcon" />
  </div>
</template>
<script lang="ts" setup>
import { type Component, computed } from 'vue'
import { InnerViewEnum, type TSkillTab } from '@/types/skills'

import IconManufacturing from '@/components/icons/IconManufacturing.vue'
import IconConstruction from '@/components/icons/IconConstruction.vue'
import IconIT from '@/components/icons/IconIT.vue'
import IconLogistics from '@/components/icons/IconLogistics.vue'
import IconSocial from '@/components/icons/IconSocial.vue'
import IconArt from '@/components/icons/IconArt.vue'
import IconJuniors from '@/components/icons/IconJuniors.vue'

const props = defineProps<{
  viewName: InnerViewEnum
  selectedSkill: TSkillTab
}>()

// const InnerViewEnumMap = {
//   [InnerViewEnum.Manufacturing]: ManufacturingIconEnum,
//   [InnerViewEnum.Construction]: ConstructionIconEnum,
//   [InnerViewEnum.IT]: ITIconEnum,
//   [InnerViewEnum.Logistics]: LogisticsIconEnum,
//   [InnerViewEnum.Social]: SocialIconEnum,
//   [InnerViewEnum.Art]: ArtIconEnum,
//   [InnerViewEnum.Juniors]: JuniorsIconEnum,
// }

const IconComponentMap: Record<InnerViewEnum, Component> = {
  [InnerViewEnum.Manufacturing]: IconManufacturing,
  [InnerViewEnum.Construction]: IconConstruction,
  [InnerViewEnum.IT]: IconIT,
  [InnerViewEnum.Logistics]: IconLogistics,
  [InnerViewEnum.Social]: IconSocial,
  [InnerViewEnum.Art]: IconArt,
  [InnerViewEnum.Juniors]: IconJuniors,
}
const displayIcon = computed(() => {
  return props.selectedSkill.icon
})
</script>
<style lang="scss" scoped>
.icon-button {
  width: 0.95rem;
  height: 0.95rem;
  margin-bottom: 0.4rem;
  @include bgCenter(contain);
  @include flexCenter;
  background-image: url('/images/host/square-blue.png');
}
</style>
