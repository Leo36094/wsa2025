<template>
  <section class="host-skill" id="skill" :aria-labelledby="`${$t('host.skill_title')}`">
    <div class="host-skill-container">
      <div class="image-col" aria-hidden="true">
        <div
          class="image-item"
          v-for="item in images.slice(0, 3)"
          :key="item"
          :style="{ backgroundImage: `url(${item})` }"
        ></div>
      </div>
      <div class="copy-col" tabindex="0">
        <h2 id="skill-title" class="title" v-html="$t('host.skill_title')"></h2>
        <p class="desc">{{ $t('host.skill_desc') }}</p>
        <p class="desc link" v-html="$t('host.skill_link_text')"></p>
      </div>
      <div class="image-col" aria-hidden="true">
        <div
          class="image-item"
          v-for="item in images.slice(3)"
          :key="item"
          :style="{ backgroundImage: `url(${item})` }"
        ></div>
      </div>
      <div
        v-if="!isDesktop"
        class="skill-swiper"
        role="region"
        :aria-label="$t('host.skill_swiper_label')"
      >
        <Swiper v-bind="swiperConfig">
          <SwiperSlide v-for="(slide, slideIdx) in images" :key="slideIdx" class="slide">
            <div
              :style="{ backgroundImage: `url(${slide})` }"
              class="img-slide"
              :aria-label="$t('host.skill_swiper_slide', { index: slideIdx + 1 })"
              alt="skill image decoration"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        :src="videoURL"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { type Ref, computed, inject } from 'vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

const images = computed(() =>
  Array(6)
    .fill(0)
    .map((_, i) => {
      const suffix = (i + 1).toString().padStart(2, '0')
      return `${import.meta.env.BASE_URL}images/wsa/host_section04_${suffix}.jpg`
    }),
)
const isDesktop = inject<Ref<boolean>>('isDesktop')

const swiperConfig = {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  freemode: true,
  spaceBetween: 8,
  slidesPerView: 1.5,
  breakpoints: {
    744: {
      slidesPerView: 3,
    },
  },
  modules: [Autoplay, FreeMode],
}

const videoURL = computed(() =>
  locale.value === 'tw'
    ? 'https://www.youtube.com/embed/IjSBGqhIsJY?si=53WhsRtmRe1om1Z1'
    : 'https://www.youtube.com/embed/WspkUccKIdA?si=tS7XRKwtGsKV5jdz',
)
</script>
<style lang="scss" scoped>
.host-skill {
  background: linear-gradient(180deg, #185974 0%, #0a384b 100%);
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  margin-bottom: 1.6rem;
  padding-bottom: 0.4rem;
  .video-container {
    width: 12.8rem;
    height: 7.2rem;
    margin: 0 auto;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  .host-skill-container {
    max-width: 19.2rem;
    margin: 0 auto 1.4rem auto;
    min-height: 9.14rem;
    display: flex;
    justify-content: center;
    .image-col {
      display: flex;
      flex-direction: column;
      .image-item {
        width: 4.43rem;
        height: 2.87rem;
        background-size: cover;
        background-position: center;
      }
    }
    .copy-col {
      margin: 0 0.56rem;
      display: flex;
      flex-direction: column;
      margin-top: 1.2rem;
      .title {
        font-size: 0.48rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 0.56rem;
        text-align: center;
      }
      .desc {
        color: #fff;
        font-size: 0.16rem;
        text-align: justify;

        &:not(:last-child) {
          margin-bottom: 0.16rem;
        }
        &.link {
          text-align: left;
        }
        :deep(a) {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
}
@include tablet {
  .host-skill {
    padding-bottom: 0.45rem;
    margin-bottom: 1.4rem;
    .host-skill-container {
      height: auto;
      max-width: 100%;
      border-radius: 0;
      margin-bottom: 0.72rem;
      flex-direction: column;
      .image-col {
        display: none;
      }
      .copy-col {
        margin: 0;
        padding: 0 0.4rem;
        .title {
          font-size: 0.36rem;
          margin: 0.49rem auto 0.32rem auto;
        }
        .desc {
          font-size: 0.16rem;
          margin-bottom: 0.32rem;
        }
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
    .video-container {
      width: 6.6rem;
      height: 3.75rem;
    }
  }
}
@include mobile {
  .host-skill {
    .host-skill-container {
      margin-bottom: 0rem;
      .copy-col {
        padding: 0 0.24rem;
        .desc {
          word-break: break-all;
        }
      }
      .skill-swiper {
        .img-slide {
          height: 1.64rem;
        }
      }
    }
    .video-container {
      width: 2.8rem;
      height: 1.62rem;
    }
  }
}
</style>
