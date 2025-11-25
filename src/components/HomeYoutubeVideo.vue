<template>
  <section class="home-youtube" role="region" :aria-label="$t('home.youtube_title')">
    <div class="youtube-container">
      <div class="video-wrapper">
        <iframe
          :src="youtubeEmbedUrl"
          :title="$t('home.youtube_title')"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// YouTube video IDs based on locale
const youtubeVideoIds = {
  tw: 'ZBJ5f9hCMOU',
  en: 'ad4sc2REsVY',
}

// Compute the YouTube embed URL based on current locale
const youtubeEmbedUrl = computed(() => {
  const videoId = locale.value === 'tw' ? youtubeVideoIds.tw : youtubeVideoIds.en
  return `https://www.youtube.com/embed/${videoId}`
})
</script>

<style lang="scss" scoped>
.home-youtube {
  margin-bottom: 0.48rem;

  .youtube-container {
    @include withContainer;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }

  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; // 16:9 aspect ratio
    height: 0;
    overflow: hidden;
    border-radius: 0.16rem;
    background-color: #000;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

@include tablet {
  .home-youtube {
    padding-top: 0.76rem;
    margin-bottom: 0.72rem;

    .youtube-container {
      padding-left: 0.24rem;
      padding-right: 0.24rem;
    }

    .video-wrapper {
      border-radius: 0.12rem;
    }
  }
}

@include mobile {
  .home-youtube {
    padding-top: 0.4rem;
    margin-bottom: 0.24rem;

    .video-wrapper {
      border-radius: 0.08rem;
    }
  }
}
</style>
