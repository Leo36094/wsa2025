<template>
  <SceneImageGrid :title="title" :images="currentImages" :link-url="linkUrl" @back="$emit('back')">
    <template #header-extra>
      <div class="skill-dropdown">
        <FilterDropdown
          :options="skillOptions"
          value-key="id"
          label-key="label"
          :selected-value="selectedSkill"
          :placeholder="currentSkillLabel"
          @update:modelValue="handleSkillChange"
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

// Work photos title
const title = computed(() => t('media.work_photos_title'))

// State management
const selectedSkill = ref<string>('02')

// Skill categories matching WorkPhotos folder structure
const skillCategories = [
  { id: '02', name: '資訊網路布建', en: 'ICT Network Infrastructure' },
  { id: '04', name: '機電整合', en: 'Mechatronics' },
  { id: '06', name: 'CNC 車床', en: 'CNC Turning' },
  { id: '07', name: 'CNC 銑床', en: 'CNC Milling' },
  { id: '10', name: '銲接', en: 'Welding' },
  { id: '12', name: '建築舖面', en: 'Wall and Floor Tiling' },
  { id: '13', name: '汽車板金', en: 'Autobody Repair' },
  { id: '16', name: '電子', en: 'Electronics' },
  { id: '18', name: '電氣裝配', en: 'Electrical Installations' },
  { id: '19', name: '工業控制', en: 'Industrial Control' },
  { id: '20', name: '砌磚', en: 'Bricklaying' },
  { id: '21', name: '粉刷技術與乾牆系統', en: 'Plastering and Drywall Systems' },
  { id: '22', name: '漆作裝潢', en: 'Painting and Decorating' },
  { id: '23', name: '自主移動機器人', en: 'Autonomous Mobile Robotics' },
  { id: '24', name: '家具木工', en: 'Cabinetmaking' },
  { id: '25', name: '門窗木工', en: 'Joinery' },
  { id: '28', name: '花藝', en: 'Floristry' },
  { id: '29', name: '美髮', en: 'Hairdressing' },
  { id: '30', name: '美容', en: 'Beauty Therapy' },
  { id: '31', name: '服裝創作', en: 'Fashion Technology' },
  { id: '34', name: '西餐烹飪', en: 'Cooking' },
  { id: '35', name: '餐飲服務', en: 'Restaurant Service' },
  { id: '36', name: '汽車噴漆', en: 'Car Painting' },
  { id: '38', name: '冷凍空調', en: 'Refrigeration and Air Conditioning' },
  { id: '40', name: '平面設計技術', en: 'Graphic Design Technology' },
  { id: '50', name: '3D數位遊戲藝術', en: '3D Digital Game Art' },
  { id: '59', name: '工業設計技術', en: 'Industrial Design Technology' },
  { id: '63', name: '機器人系統整合', en: 'Robot Systems Integration' },
  { id: 'J16', name: '青少年組電子', en: 'Electronics for Junior' },
  { id: 'J18', name: '電氣裝配', en: 'Electrical Installations' },
  { id: 'J22', name: '青少年組漆作裝潢', en: 'Painting and Decorating for Junior' },
  { id: 'J40', name: '青少年組平面設計技術', en: 'Graphic Design Technology for Junior' },
]

// Skill options for dropdown
const skillOptions = computed(() => {
  return skillCategories.map((skill) => ({
    id: skill.id,
    label: `${skill.id}-${skill.name} ${skill.en}`,
  }))
})

// Get current skill label
const currentSkillLabel = computed(() => {
  const skill = skillOptions.value.find((s) => s.id === selectedSkill.value)
  return skill?.label || t('media.work_photos_select_skill')
})

// Link URL (can be customized per skill if needed)
const linkUrl = computed(() => '#')

// Generate image URLs based on selected skill
const getImageUrls = (): string[] => {
  const skill = skillCategories.find((s) => s.id === selectedSkill.value)
  if (!skill) return []

  const folderName = `${skill.id}-${skill.name} ${skill.en}`
  
  return Array.from({ length: 5 }, (_, i) => {
    const imageNumber = (i + 1).toString().padStart(3, '0')
    return `${import.meta.env.BASE_URL}images/media/scene/WorkPhotos/${folderName}/image-${imageNumber}.jpeg`
  })
}

// Get current images
const currentImages = computed(() => {
  return getImageUrls()
})

// Handle skill change
const handleSkillChange = (skillId: string) => {
  selectedSkill.value = skillId
}
</script>

<style lang="scss" scoped>
.skill-dropdown {
  flex-shrink: 0;
  width: 4.5rem; // Fixed width to prevent jumping
}

// Tablet responsive
@include tablet() {
  .skill-dropdown {
    width: 3.5rem;
  }
}

// Mobile responsive
@include mobile() {
  .skill-dropdown {
    width: 100%;
    margin-top: 0.12rem;
  }
}
</style>

