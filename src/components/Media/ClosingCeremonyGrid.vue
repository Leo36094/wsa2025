<template>
  <SceneImageGrid :title="title" :images="currentImages" :link-url="linkUrl" @back="$emit('back')">
    <template #header-extra>
      <div class="category-dropdown">
        <FilterDropdown
          :options="categoryOptions"
          value-key="id"
          label-key="label"
          :selected-value="selectedCategory"
          :placeholder="currentCategoryLabel"
          @update:modelValue="handleCategoryChange"
        />
      </div>
    </template>
  </SceneImageGrid>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SceneImageGrid from './SceneImageGrid.vue'
import FilterDropdown from '../FilterDropdown.vue'

const { t } = useI18n()

defineEmits<{
  back: []
}>()

// Closing ceremony title
const title = computed(() => t('media.live_stream_closing_ceremony'))

// Closing ceremony categories configuration
const closingCategories = {
  abuDhabi: {
    id: 'abuDhabi',
    folder: 'AbuDhabiAward',
    imageNumbers: [4255, 4256, 4257, 4258, 4259],
  },
  speech: {
    id: 'speech',
    folder: 'Speech',
    imageNumbers: [4253, 4254],
  },
  awards: {
    id: 'awards',
    folder: 'Awards',
    imageNumbers: [1, 2, 3, 4, 5],
  },
  bestOfNation: {
    id: 'bestOfNation',
    folder: 'BestOfNation',
    imageNumbers: [4231, 4232, 4233, 4234, 4235],
  },
}

// State management
const selectedCategory = ref<string>('abuDhabi')

// Category dropdown options
const categoryOptions = computed(() => [
  {
    id: 'abuDhabi',
    label: t('media.closing_ceremony_abu_dhabi_award'),
    linkUrl: 'https://drive.google.com/drive/u/1/folders/1IvnnbMPyAxWd1h9BuqLNTSbiAujJspbu',
  },
  {
    id: 'speech',
    label: t('media.closing_ceremony_speech'),
    linkUrl: 'https://drive.google.com/drive/u/1/folders/1fZQbuIrL3lK_j8ylRsj2kAuq2UF5lXg0',
  },
  {
    id: 'awards',
    label: t('media.closing_ceremony_awards'),
    linkUrl: 'https://drive.google.com/drive/u/1/folders/1_DytbYskMjxsLUzqT6C8n9u7IiGkicok',
  },
  {
    id: 'bestOfNation',
    label: t('media.closing_ceremony_best_of_nation'),
    linkUrl: 'https://drive.google.com/drive/u/1/folders/1GkHy58rBLFYm6rO_ekI9dwz1AJAglXmM',
  },
])

// Get current category label for placeholder
const currentCategoryLabel = computed(() => {
  const category = categoryOptions.value.find((cat) => cat.id === selectedCategory.value)
  return category?.label || t('media.closing_ceremony_select_category')
})

// Get current category link URL
const linkUrl = computed(() => {
  return (
    categoryOptions.value.find((category) => category.id === selectedCategory.value)?.linkUrl || '#'
  )
})

// Generate image URLs for closing ceremony categories
const getCategoryImageUrls = (categoryId: string): string[] => {
  const category = closingCategories[categoryId as keyof typeof closingCategories]
  if (!category) return []

  return category.imageNumbers.map((num) => {
    // Awards uses 3-digit format (001-005), others use 4-digit format
    const padLength = categoryId === 'awards' ? 3 : 4
    const index = num.toString().padStart(padLength, '0')
    return `${import.meta.env.BASE_URL}images/media/scene/${category.folder}/image-${index}.jpeg`
  })
}

// Get current category's images
const currentImages = computed(() => {
  return getCategoryImageUrls(selectedCategory.value)
})

// Handle category change
const handleCategoryChange = (categoryId: string) => {
  selectedCategory.value = categoryId
}
</script>

<style lang="scss" scoped>
.category-dropdown {
  flex-shrink: 0;
  min-width: 2rem;
  max-width: 3rem;
}

// Tablet responsive
@include tablet() {
  .category-dropdown {
    min-width: 1.8rem;
    max-width: 2.5rem;
  }
}

// Mobile responsive
@include mobile() {
  .category-dropdown {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    margin-top: 0.12rem;
  }
}
</style>
