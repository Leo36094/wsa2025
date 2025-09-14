<template>
  <section
    class="media-live-stream"
    id="live-stream"
    :aria-labelledby="`${$t('media.live_stream_title')}`"
  >
    <div class="media-live-stream-container">Live Stream</div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
</script>
