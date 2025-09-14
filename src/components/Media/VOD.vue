<template>
  <section class="media-vod" id="vod" :aria-labelledby="`${$t('media.vod_title')}`">
    <div class="media-vod-container">
      <div class="media-vod-item"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
</script>
