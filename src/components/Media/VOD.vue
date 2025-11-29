<template>
  <section class="media-vod" id="vod" :aria-labelledby="`${$t('media.vod_title')}`">
    <div class="media-vod-container">
      <!-- <BaseTitle class="media-vod-title" :title="$t('media.vod_title')" /> -->

      <BaseTitle class="media-vod-title" :title="$t('media.vod_title')" />

      <div class="vod-grid">
        <div
          v-for="(video, index) in videoList"
          :key="video.id"
          class="vod-item"
          :aria-label="`${$t('media.vod_title')} ${index + 1}: ${video.title}`"
        >
          <div class="video-thumbnail" @click="openVideoModal(video)">
            <img
              :src="`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`"
              :alt="video.title"
              class="thumbnail-image"
              @error="handleImageError"
            />
            <div class="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="white" />
              </svg>
            </div>
          </div>
          <h3 class="video-title">{{ video.title }}</h3>
        </div>
      </div>
    </div>

    <div v-if="selectedVideo" class="video-modal" @click="closeVideoModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeVideoModal" aria-label="關閉影片">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div class="modal-video">
          <iframe
            :src="`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`"
            :title="selectedVideo.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="youtube-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'

// Video data structure
interface VideoItem {
  id: string
  youtubeId: string
  title: string
}

// Video data
const videoList = reactive<VideoItem[]>([
  {
    id: '1',
    youtubeId: '9Rh1NuRMGhI',
    title: '《拚了！一秒都不能浪費》',
  },
  {
    id: '2',
    youtubeId: 'sHH5EUBtC-A',
    title: '《氣氛拉滿，誰能超前？》',
  },
])

const selectedVideo = ref<VideoItem | null>(null)

// Open video modal
const openVideoModal = (video: VideoItem) => {
  selectedVideo.value = video
  document.body.style.overflow = 'hidden'
}

// Close video modal
const closeVideoModal = () => {
  selectedVideo.value = null
  document.body.style.overflow = 'auto'
}

// Handle image error - fallback to default thumbnail
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const videoId = img.alt.match(/vi\/([^\/]+)\//)?.[1] || img.alt
  img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as *;
@use '@/assets/styles/variables' as *;

.media-vod {
  .media-vod-title {
    margin-bottom: 0.72rem;

    @include tablet() {
      margin-bottom: 0.48rem;
    }

    @include mobile() {
      margin-bottom: 0.32rem;
    }
  }

  .media-vod-container {
    max-width: 12.6rem;
    margin: 0 auto;
    padding: 0 0.2rem;

    @include tablet() {
      padding: 0 0.16rem;
    }

    @include mobile() {
      padding: 0 0.12rem;
    }
  }

  .vod-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.24rem;
    width: 100%;

    @include tablet() {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.16rem;
    }

    @include mobile() {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.12rem;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 0.12rem;
    }
  }

  .vod-item {
    background: $white-bg;
    border-radius: 0.08rem;
    overflow: hidden;
    box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-0.02rem);
      box-shadow: 0 0.04rem 0.16rem rgba(0, 0, 0, 0.15);
    }

    @include mobile() {
      border-radius: 0.06rem;
    }
  }

  .video-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;

    .thumbnail-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.48rem;
      height: 0.48rem;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      @include flexCenter(row);
      transition: all 0.3s ease;

      svg {
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.02rem;
      }

      @include tablet() {
        width: 0.4rem;
        height: 0.4rem;

        svg {
          width: 0.2rem;
          height: 0.2rem;
        }
      }

      @include mobile() {
        width: 0.36rem;
        height: 0.36rem;

        svg {
          width: 0.18rem;
          height: 0.18rem;
        }
      }
    }

    &:hover {
      .thumbnail-image {
        transform: scale(1.05);
      }

      .play-button {
        background: rgba(0, 0, 0, 0.8);
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }

  .video-title {
    padding: 0.16rem;
    margin: 0;
    color: $default-color;
    font-size: 0.16rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @include tablet() {
      padding: 0.12rem;
      font-size: 0.14rem;
    }

    @include mobile() {
      padding: 0.1rem;
      font-size: 0.13rem;
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
  }

  // Video Modal
  .video-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    @include flexCenter(row);
    z-index: 1000;
    backdrop-filter: blur(0.04rem);
  }

  .modal-content {
    position: relative;
    width: 90%;
    max-width: 10rem;
    background: $white-bg;
    border-radius: 0.08rem;
    overflow: hidden;
  }

  .close-button {
    position: absolute;
    top: 0.16rem;
    right: 0.16rem;
    width: 0.32rem;
    height: 0.32rem;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    @include flexCenter(row);
    z-index: 1001;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    svg {
      width: 0.16rem;
      height: 0.16rem;
    }
  }

  .modal-video {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;

    .youtube-iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  // Tablet responsive
  @include tablet() {
    .modal-content {
      width: 95%;
      max-width: 8rem;
    }
  }

  // Mobile responsive
  @include mobile() {
    .modal-content {
      width: 98%;
      max-width: 6rem;
    }

    .close-button {
      width: 0.28rem;
      height: 0.28rem;
      top: 0.12rem;
      right: 0.12rem;

      svg {
        width: 0.14rem;
        height: 0.14rem;
      }
    }
  }
}
</style>
