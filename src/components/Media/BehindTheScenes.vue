<template>
  <section class="media-behind-scenes" id="behind_the_scenes">
    <!-- Card List View -->
    <SceneCardList
      v-if="!selectedScene"
      :items="sceneItems"
      :background-image-url="backgroundImageUrl"
      @card-click="handleCardClick"
    />


    <!-- Image Grid View -->
    <template v-else>
      <ClosingCeremonyGrid
        v-if="isClosingCeremony"
        @back="handleBackClick"
      />
      <CompetitionPhotosGrid
        v-else-if="isCompetition"
        @back="handleBackClick"
      />
      <WorkPhotosGrid
        v-else-if="isWorkPhotos"
        @back="handleBackClick"
      />
      <SceneImageGrid
        v-else
        :title="currentSceneTitle"
        :images="currentSceneImages"
        :link-url="currentSceneLinkUrl"
        @back="handleBackClick"
      />
    </template>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import SceneCardList from './SceneCardList.vue'
import SceneImageGrid from './SceneImageGrid.vue'
import ClosingCeremonyGrid from './ClosingCeremonyGrid.vue'
import CompetitionPhotosGrid from './CompetitionPhotosGrid.vue'
import WorkPhotosGrid from './WorkPhotosGrid.vue'

// Background image for scene cards
const backgroundImageUrl = ref<string>(
  `${import.meta.env.BASE_URL}images/media/media-tab-bg.png`
)

// Scene items with IDs and folder paths
const sceneItems = [
  { id: 'opening', title: '開幕典禮', titleEn: 'Opening Ceremony', folder: 'OpeningCeremonyHighlights', linkUrl: 'https://drive.google.com/drive/u/1/folders/1EIW6K5YxBG0wtyn7r676uE5rrEKnPP45' },
  { id: 'tvet', title: '國際技能教育研討會', titleEn: 'TVET Conference Highlights', folder: 'TVETConference ', linkUrl: 'https://drive.google.com/drive/u/1/folders/1btUhPmvlt83OK66sqIcmWQnuUHc4xjjQ' },
  { id: 'competition', title: '競賽照片', titleEn: 'Skills Area Highlights', folder: null, linkUrl: '#' },
  { id: 'works', title: '各職類作品', titleEn: 'Work Photos', folder: null, linkUrl: '#' },
  { id: 'closing', title: '閉幕典禮', titleEn: 'Closing Ceremony', folder: 'closing', linkUrl: '#' },
]

// State management: track selected scene
const selectedScene = ref<string | null>(null)

// Check if current scene is closing ceremony
const isClosingCeremony = computed(() => selectedScene.value === 'closing')

// Check if current scene is competition
const isCompetition = computed(() => selectedScene.value === 'competition')

// Check if current scene is work photos
const isWorkPhotos = computed(() => selectedScene.value === 'works')

// Generate image URLs for a given folder (standard format: image-001 to image-005)
const getImageUrls = (folder: string): string[] => {
  return Array.from({ length: 5 }, (_, i) => {
    const index = (i + 1).toString().padStart(3, '0')
    return `${import.meta.env.BASE_URL}images/media/scene/${folder}/image-${index}.jpeg`
  })
}

// Get current scene's images
const currentSceneImages = computed(() => {
  if (!selectedScene.value) return []

  const scene = sceneItems.find((item) => item.id === selectedScene.value)
  if (!scene || !scene.folder) return []
  return getImageUrls(scene.folder)
})

// Get current scene's title
const currentSceneTitle = computed(() => {
  if (!selectedScene.value) return ''
  const scene = sceneItems.find((item) => item.id === selectedScene.value)
  return scene?.title || ''
})

// Get current scene's link URL
const currentSceneLinkUrl = computed(() => {
  if (!selectedScene.value) return '#'
  const scene = sceneItems.find((item) => item.id === selectedScene.value)
  return scene?.linkUrl || '#'
})

// Handle card click
const handleCardClick = (sceneId: string) => {
  const scene = sceneItems.find((item) => item.id === sceneId)
  if (scene && (scene.folder || sceneId === 'closing' || sceneId === 'competition' || sceneId === 'works')) {
    selectedScene.value = sceneId
  }
}

// Handle back button click
const handleBackClick = () => {
  selectedScene.value = null
}
</script>

<style lang="scss" scoped>
.media-behind-scenes {
  min-height: 50vh;
  width: 100%;
}
</style>

