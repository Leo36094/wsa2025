<template>
  <section
    class="media-live-stream"
    id="live-stream"
    :aria-labelledby="`${$t('media.live_stream_title')}`"
  >
    <!-- <BaseTitle class="media-live-stream-title" :title="$t('media.live_stream_title')" /> -->

    <div class="media-live-stream-container">
      <!-- Opening Ceremony Video -->
      <div class="video-wrapper">
        <h3 class="video-title">{{ $t('media.live_stream_opening_ceremony') }}</h3>
        <div class="yt-iframe" :class="{ loading: isLoadingOpening }">
          <iframe
            v-if="openingYoutubeId"
            :src="`https://www.youtube.com/embed/${openingYoutubeId}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`"
            :title="$t('media.live_stream_opening_ceremony')"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="youtube-iframe"
            @load="onIframeLoadOpening"
          ></iframe>
          <div v-else class="placeholder">
            <p>{{ $t('media.live_stream_placeholder') }}</p>
          </div>
        </div>
      </div>

      <!-- Closing Ceremony Video -->
      <div class="video-wrapper">
        <h3 class="video-title">{{ $t('media.live_stream_closing_ceremony') }}</h3>
        <div class="yt-iframe" :class="{ loading: isLoadingClosing }">
          <iframe
            v-if="closingYoutubeId"
            :src="`https://www.youtube.com/embed/${closingYoutubeId}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`"
            :title="$t('media.live_stream_closing_ceremony')"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="youtube-iframe"
            @load="onIframeLoadClosing"
          ></iframe>
          <div v-else class="placeholder">
            <p>{{ $t('media.live_stream_placeholder') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// YouTube live stream IDs for Opening and Closing ceremonies
const openingYoutubeId = ref<string>('U4-gKl5NI9k')
const closingYoutubeId = ref<string>('bjhGP-mZjJs')
const isLoadingOpening = ref<boolean>(false)
const isLoadingClosing = ref<boolean>(false)

// Handle iframe load events
const onIframeLoadOpening = () => {
  isLoadingOpening.value = false
}

const onIframeLoadClosing = () => {
  isLoadingClosing.value = false
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as *;
@use '@/assets/styles/variables' as *;

.media-live-stream {
  .media-live-stream-title {
    margin-bottom: 0.72rem;
  }

  .media-live-stream-container {
    @include flexCenter(row);
    gap: 0.4rem;
    padding: 0 0.2rem;
    flex-wrap: wrap;
  }

  .video-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.16rem;
    flex: 1;
    min-width: 6rem;
    max-width: 12.98rem;

    .video-title {
      @include textMixin($size: 0.2rem, $weight: 600, $align: center);
      color: $default-color;
      margin: 0;
      padding: 0.12rem 0;
    }
  }

  .yt-iframe {
    width: 100%;
    height: 7.3rem;
    border-radius: 0.08rem;
    overflow: hidden;
    box-shadow: 0 0.04rem 0.2rem rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      box-shadow: 0 0.08rem 0.32rem rgba(0, 0, 0, 0.2);
      transform: translateY(-0.02rem);
    }

    .youtube-iframe {
      @include fullsize();
      border: none;
      border-radius: inherit;
    }

    .placeholder {
      @include fullsize();
      @include flexCenter(column);
      background: linear-gradient(135deg, $white-bg 0%, #e8eaed 100%);
      color: $default-color;
      @include textMixin($size: $supplement-font-size, $align: center);
      border: 0.02rem dashed #d1d5db;
      border-radius: inherit;
      padding: 0.4rem;
      position: relative;
      overflow: hidden;

      // Animated background pattern
      &::before {
        content: '';
        @include fullcover();
        background: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 0.1rem,
          rgba(255, 255, 255, 0.1) 0.1rem,
          rgba(255, 255, 255, 0.1) 0.2rem
        );
        animation: shimmer 3s ease-in-out infinite;
      }

      p {
        position: relative;
        z-index: 1;
        margin: 0;
        @include textMixin($weight: 500);
      }
    }
  }

  // Tablet responsive
  @include tablet() {
    .media-live-stream-container {
      padding: 0 0.16rem;
      gap: 0.24rem;
    }

    .video-wrapper {
      .video-title {
        @include textMixin($size: 0.16rem, $weight: 600);
      }
    }

    .yt-iframe {
      height: 3.8rem;
      border-radius: 0.06rem;

      .placeholder {
        @include textMixin($size: $supplement-font-size-m);
        padding: 0.32rem;
      }
    }
  }

  // Mobile responsive
  @include mobile() {
    .media-live-stream-container {
      padding: 0 0.12rem;
      gap: 0.24rem;
      flex-direction: column;
    }

    .video-wrapper {
      max-width: 100%;
      width: 100%;

      .video-title {
        @include textMixin($size: 0.14rem, $weight: 600);
      }
    }

    .yt-iframe {
      border-radius: 0.04rem;
      width: 100%;
      height: 1.9rem;
      box-shadow: 0 0.02rem 0.12rem rgba(0, 0, 0, 0.1);

      .placeholder {
        @include textMixin($size: 0.14rem);
        padding: 0.24rem;
      }
    }
  }

  // Extra small mobile
  @include queryMaxWidth($queryXS) {
    .yt-iframe {
      .placeholder {
        @include textMixin($size: 0.12rem);
        padding: 0.16rem;
      }
    }
  }
}

// Shimmer animation for placeholder
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

// Loading state animation
.yt-iframe.loading {
  .placeholder {
    &::after {
      content: '';
      @include size(0.4rem);
      border: 0.03rem solid #e5e7eb;
      border-top: 0.03rem solid $green-primary;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-top: 0.16rem;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
