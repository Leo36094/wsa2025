<template>
  <section
    class="media-occupation-intro"
    id="occupation-intro"
    :aria-labelledby="`${$t('media.occupation_intro_title')}`"
  >
    <div class="media-occupation-intro-container">
      <div class="media-occupation-intro-item"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
</script>
