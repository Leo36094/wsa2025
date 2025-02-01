<template>
  <SkillsInnerViewTemplate :view-name="InnerViewEnum.Logistics" />
</template>
<script lang="ts" setup>
import SkillsInnerViewTemplate from '@/components/SkillsInnerViewTemplate.vue'
import { InnerViewEnum } from '@/types/skills'
</script>
