<template>
  <section
    class="media-occupation-intro"
    id="occupation-intro"
    :aria-labelledby="`${$t('media.occupation_intro_title')}`"
  >
    <BaseTitle class="media-occupation-intro-title" :title="$t('media.occupation_intro_title')" />
    <div class="media-occupation-intro-container">
      <div class="media-occupation-intro-item">
        <div class="media-occupation-intro-item-img"></div>
        <div class="media-occupation-intro-item-title">
          <h4>Comming Soon...</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseTitle from '@/components/BaseTitle.vue'
</script>
<style lang="scss" scoped>
.media-occupation-intro {
  .media-occupation-intro-title {
    margin-bottom: 0.72rem;
  }
  .media-occupation-intro-container {
    @include flexCenter(row);
    flex-wrap: wrap;
    height: 50vh;
    gap: 0.4rem;
  }
}
</style>
