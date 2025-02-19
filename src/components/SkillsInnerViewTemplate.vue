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
              v-for="(img, imgIdx) in imageList.slice(0, 3)"
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
            <div
              class="skill-image"
              :style="{ backgroundImage: `url(${displaySkillImage})` }"
            ></div>
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
              v-for="(img, index) in imageList.slice(3)"
              :style="{ backgroundImage: `url(${img})` }"
              :key="index"
            ></div>
          </div>
        </div>
        <div v-if="!isDesktop" class="skill-swiper">
          <Swiper v-bind="swiperConfig">
            <SwiperSlide v-for="(slide, slideIdx) in imageList" :key="slideIdx" class="slide">
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
const selectedSkill = ref<TSkillTab>(skillList.value[0])
const displaySkillImageList = computed(() => {
  const prefix = SkillImagePrefixMap[props.viewName]
  const length = skillList.value.length

  return Array(length)
    .fill('')
    .map((_, index) => {
      const indexSuffix = `${index + 1}`.padStart(2, '0')
      return `${import.meta.env.BASE_URL}images/wsa/Skills/skills_${prefix}_${indexSuffix}.jpg`
    })
})
const displaySkillImage = computed(() => {
  const index = skillList.value.findIndex((item) => {
    return item.id === selectedSkill.value.id
  })
  return displaySkillImageList.value[index]
})

const copyText = computed(() => {
  const copy = t(`skills.${props.viewName}_${selectedSkill.value.id}_copy`)
  const title = t(`skills.${props.viewName}_${selectedSkill.value.id}`)
  return { copy, title }
})

const imageList = computed(() => {
  return Array(6)
    .fill('')
    .map((_, index) => {
      return `${import.meta.env.BASE_URL}images/wsa/Skills/skills_group_0${index + 1}.jpg`
    })
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
    background-color: #fff;
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
        box-shadow: 0px 0.3rem 1rem 0px #cbe14b80;
        background: #ffffff;
        justify-content: flex-start;
        border-radius: 0.2rem;
        width: 4.43rem;
        padding: 0.24rem;
        margin: 0 0.56rem;
        .skill-image {
          width: 3.95rem;
          height: 2.22rem;
          @include bgCenter(cover);
        }
        .title {
          font-size: 0.36rem;
          font-weight: 700;
          margin: 0.24rem auto;
          text-align: center;
        }
        .copy {
          font-size: 0.16rem;
          font-weight: 400;
          max-height: 4rem;
          overflow: auto;
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
          .skill-image {
            width: 2rem;
            height: 1.12rem;
          }
          .title {
            margin: 0.16rem auto;
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
        .gallery-container {
          padding: 0 0.16rem;
        }
        .gallery-copy {
          width: 100%;
          margin: 0 auto 0.16rem auto;
          padding: 0.16rem;
          box-shadow: 0px 0.1rem 0.3rem 0px #cbe14b80;

          .skill-image {
            width: 2.55rem;
            height: 1.43rem;
          }
          .title {
            font-size: 0.24rem;
            margin-bottom: 0.16rem;
          }
          .copy {
            text-align: justify;
            max-height: 100%;
          }
        }
        .skill-swiper {
          margin-bottom: 0.6rem;
        }
      }
    }
  }
}
</style>
