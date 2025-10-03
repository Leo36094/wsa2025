<template>
  <section
    class="media-live-stream"
    id="live-stream"
    :aria-labelledby="`${$t('media.live_stream_title')}`"
  >
    <BaseTitle class="media-live-stream-title" :title="$t('media.live_stream_title')" />
    <div class="media-live-stream-container">
      <div class="yt-iframe" :class="{ loading: isLoading }">
        <iframe
          v-if="youtubeId"
          :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`"
          :title="$t('media.live_stream_title')"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="youtube-iframe"
          @load="onIframeLoad"
        ></iframe>
        <div v-else class="placeholder">
          <p>{{ $t('media.live_stream_placeholder') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'

// Temporary variable for YouTube ID - will be replaced with actual ID later
const youtubeId = ref<string>('')
const isLoading = ref<boolean>(false)

// Example: const youtubeId = ref<string>('dQw4w9WgXcQ') // Replace with actual live stream ID

// Handle iframe load event
const onIframeLoad = () => {
  isLoading.value = false
}

// Watch for youtubeId changes (for future implementation)
onMounted(() => {
  // Simulate loading for demo purposes
  // In real implementation, this would be triggered when youtubeId is set
})
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
    padding: 0 0.2rem;
  }

  .yt-iframe {
    width: 12.98rem;
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
    }

    .yt-iframe {
      width: 6.8rem;
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
