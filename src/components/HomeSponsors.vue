<template>
  <section class="sponsors" role="region" :aria-label="$t('home.sponsors_title')">
    <div class="sponsors__container">
      <h2 class="sponsors__title" tabindex="0">
        {{ $t('home.sponsors_title') }}
      </h2>

      <!-- Sponsors Image -->
      <div
        class="sponsors__image-wrapper"
        data-aos="fade-up"
        data-aos-duration="500"
        tabindex="0"
        :aria-label="$t('home.sponsors_title')"
        @click="goSponsorPage"
      >
        <picture>
          <source
            media="(min-width: 769px)"
            :srcset="`${baseUrl}images/sponsors/sponsor_home_pc.png`"
          />
          <img
            :src="`${baseUrl}images/sponsors/sponsor_home_mb.png`"
            :alt="$t('home.sponsors_title')"
            loading="lazy"
            class="sponsors__image"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Base URL for images
const baseUrl = import.meta.env.BASE_URL

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

  &__image-wrapper {
    width: 100%;
    cursor: pointer;
    transition: transform 0.3s ease;

    picture {
      display: block;
      width: 100%;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
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
  }
}
</style>
