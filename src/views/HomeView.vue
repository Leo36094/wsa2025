<template>
  <div class="home">
    <HomeBanner />
    <HomeCountdown />
    <HomeGallery />
    <HomeQuickFact />
    <HomeNews />
    <!-- <HomeSponsors /> -->
  </div>
</template>

<script lang="ts" setup>
import HomeBanner from '@/components/HomeBanner.vue'
import HomeGallery from '@/components/HomeGallery.vue'
import HomeNews from '@/components/HomeNews.vue'
import HomeCountdown from '@/components/HomeCountdown.vue'
// import HomeSponsors from '@/components/HomeSponsors.vue'
import HomeQuickFact from '@/components/HomeQuickFact.vue'
</script>
<style lang="scss" scoped></style>
