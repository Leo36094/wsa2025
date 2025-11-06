<template>
  <section class="sponsors" role="region" :aria-label="$t('home.sponsors_title')">
    <div class="sponsors__container">
      <h2 class="sponsors__title" tabindex="0">
        {{ $t('home.sponsors_title') }}
      </h2>

      <!-- Desktop Grid View -->
      <div class="sponsors__grid desktop-only" tabindex="0">
        <div
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="500"
          class="sponsor-item"
          v-for="(sponsor, index) in sponsors"
          :key="sponsor.name"
          tabindex="0"
          :aria-label="`${$t('home.sponsors_title')} ${index + 1}`"
          @click="goSponsorPage"
        >
          <img
            :src="sponsor.image"
            :alt="`Sponsor ${index + 1}`"
            loading="lazy"
            class="sponsor-item__image"
          />
        </div>
      </div>

      <!-- Mobile/Tablet Swiper View -->
      <div class="sponsors__swiper mobile-tablet-only">
        <Swiper
          v-bind="swiperConfig"
          :aria-label="$t('home.sponsors_title')"
        >
          <SwiperSlide
            v-for="(sponsor, index) in sponsors"
            :key="sponsor.name"
            class="sponsor-slide"
            role="group"
            :aria-label="`${$t('home.sponsors_title')} ${index + 1}`"
          >
            <div class="sponsor-item">
              <img
                :src="sponsor.image"
                :alt="`Sponsor ${index + 1}`"
                loading="lazy"
                class="sponsor-item__image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, FreeMode } from 'swiper/modules'
import { useRouter } from 'vue-router'
import 'swiper/css'
import 'swiper/css/free-mode'

// Swiper configuration for mobile/tablet
const swiperConfig = {
  slidesPerView: 'auto' as const,
  spaceBetween: 16,
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.5,
  },
  grabCursor: true,
  modules: [FreeMode, A11y],
}

const router = useRouter()

// Generate sponsor image paths using BASE_URL
const sponsors = computed(() => {
  const sponsorImages = []
  for (let i = 1; i <= 10; i++) {
    const num = i.toString().padStart(2, '0')
    sponsorImages.push({
      name: `Sponsor ${i}`,
      image: `${import.meta.env.BASE_URL}images/sponsors/sponsor_${num}.png`,
    })
  }
  return sponsorImages
})

const goSponsorPage = () => {
  router.push('/get-involved/#sponsorship')
}

</script>

<style lang="scss" scoped>
.sponsors {
  margin: 0rem auto 0.72rem auto;
  @include flexCenter(column);
  position: relative;
  color: $black-primary;
  background-color: $white-bg;
  padding: 0.8rem 0;
  padding-top: 0;

  .sponsors__container {
    width: 12.32rem;
    padding: 0 0.96rem;
    @include flexCenter(column);
  }

  &__title {
    font-size: $title-font-size;
    margin-bottom: 0.56rem;
    font-weight: 700;
    text-align: center;
  }

  // Desktop Grid View
  .sponsors__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.4rem;
    width: 100%;

    .sponsor-item {
      @include flexCenter();
      background: $white-bg;
      border-radius: 0.08rem;
      padding: 0.24rem;
      transition: transform 0.3s ease;
      border: 1px solid #e5e5e5;
      aspect-ratio: 1 / 1;
      cursor: pointer;

      &:hover {
        transform: translateY(-0.04rem);
        box-shadow: 0 0.04rem 0.12rem rgba(0, 0, 0, 0.1);
      }

      &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 0.12rem;
      }
    }
  }

  // Mobile/Tablet Swiper View
  .sponsors__swiper {
    display: none;
    width: 100%;
    overflow: hidden;

    :deep(.swiper) {
      overflow: visible;
    }

    .sponsor-slide {
      width: 2rem;
      height: 2rem;

      .sponsor-item {
        @include flexCenter();
        background: $white-bg;
        border-radius: 0.08rem;
        padding: 0.24rem;
        border: 1px solid #e5e5e5;
        width: 100%;
        height: 100%;

        &__image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 0.12rem;
        }
      }
    }
  }

  // Show/Hide logic
  .desktop-only {
    display: grid;
  }

  .mobile-tablet-only {
    display: none;
  }
}

@include tablet {
  .sponsors {
    padding: 0.48rem 0;
    margin: 0 auto 0.72rem auto;

    .sponsors__container {
      width: 100%;
      max-width: 6.88rem;
      padding: 0 0.24rem;
    }

    &__title {
      font-size: $title-font-size-m;
      margin-bottom: 0.32rem;
    }

    // Hide grid, show swiper
    .desktop-only {
      display: none;
    }

    .mobile-tablet-only {
      display: block;
    }

    .sponsors__swiper {
      .sponsor-slide {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
}

@include mobile {
  .sponsors {
    padding: 0.32rem 0;
    padding-top: 0;

    .sponsors__container {
      width: 100%;
      padding: 0 0.16rem;
    }

    &__title {
      font-size: $title-font-size-m;
      margin-bottom: 0.24rem;
    }

    // Hide grid, show swiper
    .desktop-only {
      display: none;
    }

    .mobile-tablet-only {
      display: block;
    }

    .sponsors__swiper {
      .sponsor-slide {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }
}
</style>
