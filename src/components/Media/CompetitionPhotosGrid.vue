<template>
  <SceneImageGrid :title="title" :images="currentImages" :link-url="linkUrl" @back="$emit('back')">
    <template #header-extra>
      <div class="dropdown-container">
        <div class="date-dropdown">
          <FilterDropdown
            :options="dateOptions"
            value-key="id"
            label-key="label"
            :selected-value="selectedDate"
            :placeholder="currentDateLabel"
            @update:modelValue="handleDateChange"
          />
        </div>
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

// Competition photos title
const title = computed(() => '競賽照片')

// State management
const selectedDate = ref<string>('1127')
const selectedSkill = ref<string>('02')

// Date options
const dateOptions = computed(() => [
  {
    id: '1127',
    label: t('media.competition_date_1127'),
    folder: '1127各職類精選照片 Skills Area Highlights Photo',
    linkUrl: 'https://drive.google.com/drive/u/1/folders/1z2uPlKKBK60opiaC6diHBEEP6T1milAV',
  },
  {
    id: '1128',
    label: t('media.competition_date_1128'),
    folder: '1128各職類精選照片 Skills Area Highlights Photo',
    linkUrl: 'https://drive.google.com/drive/u/1/folders/1k4D2V07CInsLirNIA65YtTvfNmjuZJCm',
  },
  {
    id: '1129',
    label: t('media.competition_date_1129'),
    folder: '1129各職類精選照片 Skills Area Highlights Photo',
    linkUrl: 'https://drive.google.com/drive/u/1/folders/1-_8CF47_9Pl0EgQFAr0QNavCqIvAIWN8',
  },
])

// Skill categories with unified folder names
// All folder names use single space and consistent English names
const skillCategories = [
  { id: '02', name: '資訊網路布建', en: 'ICT Network Infrastructure' },
  { id: '04', name: '機電整合', en: 'Mechatronics' },
  { id: '05', name: 'CAD 機械設計製圖', en: 'Mechanical Engineering CAD' },
  { id: '06', name: 'CNC 車床', en: 'CNC Turning' },
  { id: '07', name: 'CNC 銑床', en: 'CNC Milling' },
  { id: '08', name: '行動應用開發', en: 'Mobile Applications Development' },
  { id: '09', name: '商務軟體設計', en: 'Software Applications Development' },
  { id: '10', name: '銲接', en: 'Welding' },
  { id: '12', name: '建築舖面', en: 'Wall and Floor Tiling' },
  { id: '13', name: '汽車板金', en: 'Autobody Repair' },
  { id: '16', name: '電子', en: 'Electronics' },
  { id: '17', name: '網頁技術', en: 'Web Technologies' },
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
  { id: '33', name: '汽車技術', en: 'Automobile Technology' },
  { id: '34', name: '西餐烹飪', en: 'Cooking' },
  { id: '35', name: '餐飲服務', en: 'Restaurant Service' },
  { id: '36', name: '汽車噴漆', en: 'Car Painting' },
  { id: '38', name: '冷凍空調', en: 'Refrigeration and Air Conditioning' },
  { id: '39', name: '資訊與網路技術', en: 'IT Network Systems Administration' },
  { id: '40', name: '平面設計技術', en: 'Graphic Design Technology' },
  { id: '41', name: '健康照顧', en: 'Health and Social Care' },
  { id: '50', name: '3D數位遊戲藝術', en: '3D Digital Game Art' },
  { id: '53', name: '雲端運算', en: 'Cloud Computing' },
  { id: '54', name: '網路安全', en: 'Cyber Security' },
  { id: '58', name: '數位建設BIM', en: 'Digital Construction' },
  { id: '59', name: '工業設計技術', en: 'Industrial Design Technology' },
  { id: '63', name: '機器人系統整合', en: 'Robot Systems Integration' },
  { id: 'J16', name: '青少年組電子', en: 'Electronics for Junior' },
  { id: 'J17', name: '青少年組網頁技術', en: 'Web Technologies for Junior' },
  { id: 'J18', name: '青少年組電氣裝配', en: 'Electrical Installations for Junior' },
  { id: 'J22', name: '青少年組漆作裝潢', en: 'Painting and Decorating for Junior' },
  { id: 'J23', name: '青少年組機器人', en: 'Autonomous Mobile Robotics for Junior' },
  { id: 'J40', name: '青少年組平面設計技術', en: 'Graphic Design Technology for Junior' },
]

// Skill options with proper folder names
const skillOptions = computed(() => {
  return skillCategories.map((skill) => ({
    id: skill.id,
    label: `${skill.id}-${skill.name} ${skill.en}`,
  }))
})

// Get current date label
const currentDateLabel = computed(() => {
  const date = dateOptions.value.find((d) => d.id === selectedDate.value)
  return date?.label || t('media.competition_date_placeholder')
})

// Get current skill label
const currentSkillLabel = computed(() => {
  const skill = skillOptions.value.find((s) => s.id === selectedSkill.value)
  return skill?.label || t('media.competition_skill_placeholder')
})

// Get current date's link URL
const linkUrl = computed(() => {
  const date = dateOptions.value.find((d) => d.id === selectedDate.value)
  return date?.linkUrl || '#'
})

// Generate image URLs based on date and skill
const getImageUrls = (): string[] => {
  const date = dateOptions.value.find((d) => d.id === selectedDate.value)
  if (!date) return []

  const skill = skillCategories.find((s) => s.id === selectedSkill.value)
  if (!skill) return []

  // All folder names now use single space and unified English names
  const folderName = `${skill.id}-${skill.name} ${skill.en}`

  // All dates now use unified 3-digit format (001-005) after running rename script
  return Array.from({ length: 5 }, (_, i) => {
    const imageNumber = (i + 1).toString().padStart(3, '0')
    return `${import.meta.env.BASE_URL}images/media/scene/${date.folder}/${folderName}/image-${imageNumber}.jpeg`
  })
}

// Get current images
const currentImages = computed(() => {
  return getImageUrls()
})

// Handle date change
const handleDateChange = (dateId: string) => {
  selectedDate.value = dateId
}

// Handle skill change
const handleSkillChange = (skillId: string) => {
  selectedSkill.value = skillId
}
</script>

<style lang="scss" scoped>
.dropdown-container {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  flex-shrink: 0;
  width: 4.5rem; // Fixed width to prevent jumping
}

.date-dropdown,
.skill-dropdown {
  width: 100%;
}

// Tablet responsive
@include tablet() {
  .dropdown-container {
    width: 3.5rem;
  }
}

// Mobile responsive
@include mobile() {
  .dropdown-container {
    width: 100%;
    margin-top: 0.12rem;
  }
}
</style>

