<template>
  <div class="competition">
    <CompetitionBanner />
    <CompetitionSchedule />
    <CompetitionLocation />
  </div>
</template>

<script lang="ts" setup>
import CompetitionBanner from '@/components/CompetitionBanner.vue'
import CompetitionSchedule from '@/components/CompetitionSchedule.vue'
import CompetitionLocation from '@/components/CompetitionLocation.vue'
</script>
<style lang="scss" scoped>
.competition {
  padding-top: 0.76rem;
}
</style>
