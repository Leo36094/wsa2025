<template>
  <div class="skills-manufacturing">
    <div class="skills-manufacturing-container">
      <h2 class="skills-manufacturing-title">
        {{ $t('skills.category_art') }}
      </h2>
      <SkillTab :skill-list="skillListCols" :selected-skill="selectedSkill" @click="onTabClick" />
      <div class="skill-manufacturing-gallery">
        <div class="gallery-container">
          <div class="gallery-image">
            <div
              class="image-item"
              v-for="img in copyText.images"
              :style="{ backgroundImage: `url(${img})` }"
            ></div>
          </div>
          <div class="gallery-copy">
            <div class="icon-button">
              <IconArt :name="displayIcon" />
            </div>
            <h2 class="title">{{ copyText.title }}</h2>
            <p class="copy" v-html="copyText.copy"></p>
          </div>
          <div class="gallery-image">
            <div
              class="image-item"
              v-for="img in copyText.images"
              :style="{ backgroundImage: `url(${img})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SkillTab from '@/components/SkillTab.vue'
import type { TSkillTab } from '@/types/skills'
import { ArtIconEnum } from '@/components/icons/enum'
import IconArt from '@/components/icons/IconArt.vue'

const COLS = 4
const { t } = useI18n()

const skillI18n = computed(() =>
  Object.entries(ArtIconEnum).reduce((acc: Record<string, string>, [key, value]) => {
    acc[value] = t(`skills.art_${key}`)
    return acc
  }, {}),
)
const skillList = computed(() =>
  Object.entries(ArtIconEnum).map(([key, value]) => ({
    label: skillI18n.value[value],
    icon: value,
    id: key,
  })),
)

const skillListCols = computed(() => {
  const rows = Math.ceil(skillList.value.length / COLS)
  return Array.from({ length: rows }, (_, i) => skillList.value.slice(i * COLS, (i + 1) * COLS))
})

const selectedSkill = ref<TSkillTab>(skillListCols.value[0][0])
const displayIcon = computed(() => selectedSkill.value.icon as ArtIconEnum)

const copyText = computed(() => {
  const copy = t(`skills.art_${selectedSkill.value.id}_copy`)
  const title = t(`skills.art_${selectedSkill.value.id}`)
  const images = Array.from({ length: 3 }, (_, i) => 'https://fakeimg.pl/443x250/')
  return { copy, images, title }
})

function onTabClick(skill: TSkillTab) {
  selectedSkill.value = skill
}
</script>
<style lang="scss" scoped>
.skills-manufacturing {
  padding-top: 0.76rem;
  .skills-manufacturing-container {
    .skills-manufacturing-title {
      @include withContainer;
      font-size: 0.48rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.4rem;
    }
    .skill-manufacturing-gallery {
      background: linear-gradient(180deg, #18475b 0%, #180161 89.74%);

      .gallery-container {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 19.2rem;
        margin: 0.4rem auto 0 auto;
        padding-bottom: 0.4rem;
      }
      .gallery-copy {
        @include flexCenter(column);
        justify-content: flex-start;
        align-self: stretch;
        padding-top: 1.2rem;
        width: 4.43rem;
        margin: 0 0.56rem;
        .icon-button {
          width: 0.95rem;
          height: 0.95rem;
          margin-bottom: 0.4rem;
          @include bgCenter(contain);
          @include flexCenter;
          background-image: url('/images/host/square-blue.png');
        }
        .title {
          font-size: 0.36rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          text-align: center;
        }
        .copy {
          font-size: 0.16rem;
          font-weight: 400;
        }
      }
      .gallery-image {
        /* flex: 1; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        .image-item {
          width: 4.43rem;
          height: 2.5rem;
          @include bgCenter(contain);
          &:not(:last-child) {
            margin-bottom: 0.16rem;
          }
        }
      }
    }
  }
}
</style>
