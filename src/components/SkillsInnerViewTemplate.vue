<template>
  <div class="skills-inner-view">
    <div class="skills-inner-view-container">
      <h1 class="skills-inner-view-title title-animation">
        <span>{{ $t(`skills.category_${viewName}`) }}</span>
      </h1>
      <SkillTab
        :skill-list="skillList"
        :selected-skill="selectedSkill"
        @click="onTabClick"
        :show-select="!!isMobile"
      />
      <div class="skill-inner-view-gallery">
        <div class="gallery-container">
          <div class="gallery-image" data-aos="fade-up" data-aos-delay="500">
            <div
              class="image-item"
              v-for="(img, imgIdx) in imagesMap[selectedSkill.id].slice(0, 3)"
              :style="{ backgroundImage: `url(${img})` }"
              :key="imgIdx"
            ></div>
          </div>
          <div
            class="gallery-copy"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom"
          >
            <div class="icon-button">
              <component :is="IconComponentMap[props.viewName]" :name="displayIcon" />
            </div>
            <h2 class="title">{{ copyText.title }}</h2>
            <p class="copy" v-html="copyText.copy"></p>
          </div>
          <div
            class="gallery-image"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor-placement="top-bottom"
          >
            <div
              class="image-item"
              v-for="(img, index) in imagesMap[selectedSkill.id].slice(3)"
              :style="{ backgroundImage: `url(${img})` }"
              :key="index"
            ></div>
          </div>
          <div v-if="!isDesktop" class="skill-swiper">
            <Swiper v-bind="swiperConfig">
              <SwiperSlide
                v-for="(slide, slideIdx) in imagesMap[selectedSkill.id]"
                :key="slideIdx"
                class="slide"
              >
                <div
                  :style="{ backgroundImage: `url(${slide})` }"
                  class="img-slide"
                  alt="skill image decoration"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type Ref, ref, computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import SkillTab from '@/components/SkillTab.vue'
import type { TSkillTab } from '@/types/skills'
import {
  ManufacturingIconEnum,
  ConstructionIconEnum,
  ITIconEnum,
  LogisticsIconEnum,
  SocialIconEnum,
  ArtIconEnum,
  JuniorsIconEnum,
} from '@/components/icons/enum'
import { InnerViewEnum } from '@/types/skills'
import IconManufacturing from '@/components/icons/IconManufacturing.vue'
import IconConstruction from '@/components/icons/IconConstruction.vue'
import IconIT from '@/components/icons/IconIT.vue'
import IconLogistics from '@/components/icons/IconLogistics.vue'
import IconSocial from '@/components/icons/IconSocial.vue'
import IconArt from '@/components/icons/IconArt.vue'
import IconJuniors from '@/components/icons/IconJuniors.vue'

// const COLS = 4
const { t } = useI18n()
const props = defineProps<{
  viewName: InnerViewEnum
}>()

const isMobile = inject<Ref<boolean>>('isMobile')
const isDesktop = inject<Ref<boolean>>('isDesktop')

const SkillImagePrefixMap = {
  [InnerViewEnum.Manufacturing]: '01',
  [InnerViewEnum.Construction]: '02',
  [InnerViewEnum.IT]: '03',
  [InnerViewEnum.Logistics]: '04',
  [InnerViewEnum.Social]: '05',
  [InnerViewEnum.Art]: '06',
  [InnerViewEnum.Juniors]: '07',
}

const IconComponentMap = {
  [InnerViewEnum.Manufacturing]: IconManufacturing,
  [InnerViewEnum.Construction]: IconConstruction,
  [InnerViewEnum.IT]: IconIT,
  [InnerViewEnum.Logistics]: IconLogistics,
  [InnerViewEnum.Social]: IconSocial,
  [InnerViewEnum.Art]: IconArt,
  [InnerViewEnum.Juniors]: IconJuniors,
}

const InnerViewEnumMap = {
  [InnerViewEnum.Manufacturing]: ManufacturingIconEnum,
  [InnerViewEnum.Construction]: ConstructionIconEnum,
  [InnerViewEnum.IT]: ITIconEnum,
  [InnerViewEnum.Logistics]: LogisticsIconEnum,
  [InnerViewEnum.Social]: SocialIconEnum,
  [InnerViewEnum.Art]: ArtIconEnum,
  [InnerViewEnum.Juniors]: JuniorsIconEnum,
}

const skillI18n = computed(() =>
  Object.entries(InnerViewEnumMap[props.viewName]).reduce(
    (acc: Record<string, string>, [key, value]) => {
      acc[value] = t(`skills.${props.viewName}_${key}`)
      return acc
    },
    {},
  ),
)
const skillList = computed(() =>
  Object.entries(InnerViewEnumMap[props.viewName]).map(([key, value]) => ({
    label: skillI18n.value[value],
    icon: value,
    id: key,
  })),
)

// const skillListCols = computed(() => {
//   const rows = Math.ceil(skillList.value.length / COLS)
//   return Array.from({ length: rows }, (_, i) => skillList.value.slice(i * COLS, (i + 1) * COLS))
// })

const selectedSkill = ref<TSkillTab>(skillList.value[0])
const displayIcon = computed(() => {
  return selectedSkill.value
    .icon as (typeof InnerViewEnumMap)[InnerViewEnum][keyof (typeof InnerViewEnumMap)[InnerViewEnum]]
})

const copyText = computed(() => {
  const copy = t(`skills.${props.viewName}_${selectedSkill.value.id}_copy`)
  const title = t(`skills.${props.viewName}_${selectedSkill.value.id}`)
  return { copy, title }
})

// According doc. https://www.figma.com/design/cLQzYBkzjmJUGHFUAgTuZ9/WSA?node-id=126-3375&m=dev
const juniorsImagePrefix = ['01_09', '01_11', '02_05', '02_08', '03_07', '05_04', '05_07', '06_06']
const juniorsImages = Object.keys(JuniorsIconEnum).reduce(
  (acc, curr, keyIdx) => {
    const prefix = juniorsImagePrefix[keyIdx]
    acc[curr] = Array(6)
      .fill('')
      .map((_, idx) => {
        const imageIndex = (idx + 1).toString().padStart(2, '0')
        return `${import.meta.env.BASE_URL}images/wsa/Skills/skills_${prefix}_${imageIndex}.jpg`
      })
    return acc
  },
  {} as Record<string, string[]>,
)

const imagesMap = computed(() => {
  if (props.viewName === InnerViewEnum.Juniors) {
    return { ...juniorsImages }
  }
  return skillList.value.reduce(
    (acc, curr, skillIndex) => {
      acc[curr.id] = Array(6)
        .fill('')
        .map((_, idx) => {
          // +4 because image number name start from 4
          const prefixName = SkillImagePrefixMap[props.viewName]
          const subSkillIndex = (skillIndex + 4).toString().padStart(2, '0')
          const imageIndex = (idx + 1).toString().padStart(2, '0')
          const imageUrl = `${import.meta.env.BASE_URL}images/wsa/Skills/skills_${prefixName}_${subSkillIndex}_${imageIndex}.jpg`
          return imageUrl
        })
      return acc
    },
    {} as Record<string, string[]>,
  )
})
function onTabClick(skill: TSkillTab) {
  selectedSkill.value = skill
}

const swiperConfig = {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  freemode: true,
  spaceBetween: 8,
  slidesPerView: 1,
  breakpoints: {
    744: {
      slidesPerView: 3,
    },
  },
  modules: [Autoplay, FreeMode],
}
</script>
<style lang="scss" scoped>
.skills-inner-view {
  padding-top: 0.76rem;
  .skills-inner-view-container {
    background: linear-gradient(180deg, #18475b 30%, #180161 89.74%);
    min-height: 100svh;
    .skills-inner-view-title {
      @include withContainer;
      font-size: 0.48rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0.4rem;
    }
    .skill-inner-view-gallery {
      .gallery-container {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 14.4rem;
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
          @include bgCenter(100% auto);
          &:not(:last-child) {
            margin-bottom: 0.16rem;
          }
        }
      }
    }
  }
  .title-animation {
    position: relative;
    overflow: hidden;
    @include flexCenter;
    span {
      animation: title-slide-up 0.5s forwards;
    }
  }
}
@include tablet {
  .skills-inner-view {
    padding-top: 0.4rem;
    .skills-inner-view-container {
      .skills-inner-view-title {
        font-size: 0.48rem;
        margin-bottom: 0.32rem;
      }
      .skill-inner-view-gallery {
        .gallery-container {
          max-width: 100%;
          flex-direction: column;
        }
        .gallery-copy {
          width: 6.64rem;
          margin-bottom: 0.24rem;
          .icon-button {
            width: 0.72rem;
            height: 0.72rem;
            margin-bottom: 0.24rem;
          }
          .title {
            margin-bottom: 0.24rem;
          }
        }
        .gallery-image {
          display: none;
        }
        .skill-swiper {
          width: 100%;
          margin-bottom: 0.48rem;
          .img-slide {
            height: 1.64rem;
            @include bgCenter(cover);
          }
        }
      }
    }
  }
}
@include mobile {
  .skills-inner-view {
    .skills-inner-view-container {
      .skills-inner-view-title {
        font-size: 0.24rem;
      }
      .skill-inner-view-gallery {
        .gallery-copy {
          width: 100%;
          margin: 0 auto 0.16rem auto;
          padding: 0 0.24rem;
          .icon-button {
            width: 0.56rem;
            height: 0.56rem;
            margin-bottom: 0.16rem;
          }
          .title {
            font-size: 0.24rem;
            margin-bottom: 0.16rem;
          }
          .copy {
            text-align: justify;
          }
        }
        .skill-swiper {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
