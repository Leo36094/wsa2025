<template>
  <div class="ad-item" @click="openDialog">
    <div class="item-img">
      <img
        :src="thumbnailUrl"
        :alt="title || 'YouTube video thumbnail'"
        @load="onImageLoad"
        @error="onImageError"
        :class="{ loaded: imageLoaded, error: imageError }"
      />
      <div v-if="!imageLoaded && !imageError" class="loading-skeleton"></div>
    </div>
    <div class="item-copy">
      <h4 v-if="title" class="item-copy-title">{{ title }}</h4>
      <div v-else class="title-skeleton"></div>
    </div>
  </div>

  <!-- YouTube Video Dialog -->
  <DialogRoot v-model:open="isDialogOpen">
    <DialogPortal>
      <DialogOverlay class="dialog-overlay" @click="closeDialog" />
      <DialogContent class="dialog-content" @escape-key-down="closeDialog" :dialog-title="title">
        <button class="dialog-close" aria-label="Close video" @click="closeDialog">
          <IconClose />
        </button>
        <div class="video-container">
          <iframe
            :src="`https://www.youtube.com/embed/${embedId}?autoplay=1`"
            :title="displayTitle"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="youtube-iframe"
          ></iframe>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { DialogRoot, DialogPortal, DialogOverlay, DialogContent } from 'radix-vue'
import IconClose from '@/components/icons/IconClose.vue'

const props = defineProps<{
  embedId: string
  title?: string
}>()

const displayTitle = ref('')

// Generate YouTube thumbnail URL
const thumbnailUrl = computed(() => {
  return `https://img.youtube.com/vi/${props.embedId}/maxresdefault.jpg`
})

// Dialog state
const isDialogOpen = ref(false)

// Image loading state
const imageLoaded = ref(false)
const imageError = ref(false)

// Open dialog handler
const openDialog = () => {
  isDialogOpen.value = true
}

// Close dialog handler
const closeDialog = () => {
  isDialogOpen.value = false
}

// Image load handlers
const onImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
}

const onImageError = () => {
  imageLoaded.value = false
  imageError.value = true
}

// Global queue for components waiting for YouTube API
declare global {
  interface Window {
    ytApiReadyQueue?: (() => void)[]
  }
}

// Load YouTube IFrame API and get video title
onMounted(() => {
  // Check if YT API is already loaded
  if (window.YT && window.YT.Player) {
    loadVideoTitle()
  } else {
    // Initialize the queue if it doesn't exist
    if (!window.ytApiReadyQueue) {
      window.ytApiReadyQueue = []
    }

    // Add this component's callback to the queue
    window.ytApiReadyQueue.push(loadVideoTitle)

    // Load the API if not already loaded
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      // Set up the callback for when API is ready
      window.onYouTubeIframeAPIReady = () => {
        // Execute all queued callbacks
        if (window.ytApiReadyQueue) {
          window.ytApiReadyQueue.forEach((callback) => callback())
          window.ytApiReadyQueue = []
        }
      }
    }
  }
})

const loadVideoTitle = () => {
  // Create a temporary hidden player to get video data
  const tempId = `temp-player-${Date.now()}`
  const tempDiv = document.createElement('div')
  tempDiv.id = tempId
  tempDiv.style.display = 'none'
  document.body.appendChild(tempDiv)

  new window.YT.Player(tempId, {
    videoId: props.embedId,
    events: {
      onReady: (event) => {
        const data = event.target.getVideoData()
        displayTitle.value = props.title || data.title
        // Clean up the temporary player
        event.target.destroy()
        document.body.removeChild(tempDiv)
      },
    },
  })
}
</script>

<style lang="scss" scoped>
.ad-item {
  @include flexCenter(column);
  width: 100%;
  cursor: pointer;
  gap: 0.16rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-0.04rem);
  }

  .item-img {
    width: 100%;
    aspect-ratio: 16/9; // 16:9 ratio as per design
    border-radius: 0.08rem;
    transition: box-shadow 0.2s ease;
    background-color: #f0f0f0; // Placeholder background
    position: relative;
    overflow: hidden;

    // Ensure fixed dimensions to prevent CLS
    min-height: 0; // Prevent flex item from growing
    flex-shrink: 0; // Prevent shrinking

    &:hover {
      box-shadow: 0 0.08rem 0.24rem rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.3s ease;

      &.loaded {
        opacity: 1;
      }

      &.error {
        opacity: 0;
      }
    }

    .loading-skeleton {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 0.08rem;
    }

    // Error state placeholder
    &:has(img.error)::after {
      content: '📹';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.48rem;
      opacity: 0.5;
    }
  }

  .item-copy {
    text-align: left;
    width: 100%;
    flex-shrink: 0; // Prevent shrinking

    .item-copy-title {
      margin: 0;
      font-size: 0.28rem; // 28px equivalent
      font-weight: 700;
      color: #101e24;
      line-height: 1.2;
      min-height: 0.34rem; // Fixed height to prevent CLS
      display: flex;
      align-items: center;

      // Tablet responsive
      @include tablet() {
        font-size: 0.24rem;
        min-height: 0.29rem;
      }

      // Mobile responsive
      @include mobile() {
        font-size: 0.22rem;
        line-height: 1.3;
        min-height: 0.29rem;
      }
    }

    .title-skeleton {
      width: 80%;
      height: 0.34rem;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 0.04rem;

      // Tablet responsive
      @include tablet() {
        height: 0.29rem;
      }

      // Mobile responsive
      @include mobile() {
        height: 0.29rem;
      }
    }
  }

  // Mobile hover effects (disable transform on touch devices)
  @include mobile() {
    &:hover {
      transform: none;
    }

    .item-img:hover {
      box-shadow: none;
    }
  }
}

// Dialog styles
.dialog-overlay {
  position: fixed;
  inset: 0;
  @include zIndex(dialog-overlay);
  background-color: rgba(0, 0, 0, 0.8);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-content {
  position: fixed;
  left: 50%;
  top: 50%;
  @include zIndex(dialog-content);
  width: 80vw;
  max-width: 900px;
  height: auto;
  max-height: 80vh;
  transform: translate(-50%, -50%);
  background-color: #000;
  border-radius: 0.12rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  .dialog-close {
    position: absolute;
    top: 0rem;
    right: -0.5rem;
    @include zIndex(dialog-close);
    width: 0.32rem;
    height: 0.32rem;
    @include flexCenter;
    background-color: rgba(255, 255, 255, 0.95);
    color: #333;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0.02rem 0.12rem rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(0.04rem);
    padding: 0.06rem;

    &:hover {
      background-color: rgba(255, 255, 255, 1);
      transform: scale(1.1);
      box-shadow: 0 0.04rem 0.16rem rgba(0, 0, 0, 0.5);
    }
  }

  .video-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;

    .youtube-iframe {
      width: 100%;
      height: 100%;
      border-radius: 0.12rem;
    }
  }
}

@include tablet {
  .dialog-content {
    width: 70vw;
    height: 50svh;
    max-width: 700px;
    @include flexCenter;

    .dialog-close {
      width: 0.4rem;
      height: 0.4rem;
      padding: 0.08rem;
      top: -0.4rem;
    }
  }
}

@include mobile {
  .dialog-overlay {
    height: 100vh;
    width: 100vw;
  }
  .dialog-content {
    width: 100%;
    height: 56.25vw; // 16:9 aspect ratio for full width
    max-height: 100vh;
    border-radius: 0;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include flexCenter;
    pointer-events: none;

    .dialog-close {
      top: 0.16rem;
      right: 0.16rem;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(0.04rem);
      padding: 0.1rem;
      display: none;
    }

    .video-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .youtube-iframe {
        width: 100%;
        height: 56.25vw; // 16:9 aspect ratio for full width
        max-height: 100vh;
        border-radius: 0;
      }
    }
  }
}

// Loading skeleton animation
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
