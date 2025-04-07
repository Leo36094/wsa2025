<template>
  <section
    class="home-banner__slide"
    role="region"
    :aria-label="$t('home.gallery_section')"
    tabindex="0"
  >
    <div class="gallery-bg" aria-hidden="true"></div>
    <div class="photo-row first-row" data-aos="fade-up">
      <figure
        v-for="i in 3"
        :key="`first-${i}`"
        class="photo-item"
        :class="`photo-item-${i}`"
        :aria-label="$t(`home.gallery_photo`, { index: i })"
        tabindex="0"
      >
        <img
          :src="`${baseURL}images/wsa/homepage_s01_${i}.jpg`"
          :alt="$t(`home.gallery_photo_alt`, { index: i })"
          loading="lazy"
        />
      </figure>
    </div>
    <div class="slide-header" tabindex="0">
      <h2 tabindex="0" :class="['split-titles title', { tw: locale === 'tw' }]">
        <div v-if="locale === 'tw'">
          <span>{{ $t('home.split_title1') }}</span>
          <span>{{ $t('home.split_title2') }}</span>
          <span>{{ $t('home.split_title3') }}</span>
        </div>
        <template v-else>
          <span>{{ $t('home.split_title1') }}</span>
          <span>{{ $t('home.split_title2') }}</span>
          <span>{{ $t('home.split_title3') }}</span>
        </template>
        <span class="year">{{ $t('home.year') }}</span>
      </h2>
      <p
        data-aos="fade-down"
        class="slide-desc"
        :aria-label="$t('home.banner_desc_aria')"
        v-html="$t('home.banner_desc')"
        tabindex="0"
      ></p>
    </div>
    <div class="photo-row" data-aos="fade-up">
      <figure
        v-for="i in 3"
        :key="`second-${i}`"
        class="photo-item"
        :class="`photo-item-${i + 3}`"
        tabindex="0"
        :aria-label="$t(`home.gallery_photo`, { index: i + 2 })"
      >
        <img
          :src="`${baseURL}images/wsa/homepage_s01_${i + 3}.${i === 1 ? 'png' : 'jpg'}`"
          :alt="$t(`home.gallery_photo_alt`, { index: i + 3 })"
          loading="lazy"
        />
      </figure>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
const baseURL = import.meta.env.BASE_URL
</script>
<style lang="scss" scoped>
.home-banner__slide {
  background: $white-bg;
  height: 100%;
  position: relative;
  .gallery-bg {
    position: absolute;
    bottom: -55%;
    left: -20%;
    @include bgCenter(contain);
    background-image: url('/images/club_fill_green.png');
    width: 7rem;
    height: 7rem;
    animation: rotate 10s linear infinite;
  }
  .slide-header {
    @include flexCenter;
    @include withContainer;
    justify-content: center;
    position: relative;
    color: $black-primary;
    margin: 0.32rem auto;

    .title,
    .split-titles {
      display: flex;
      flex-direction: column;
      font-size: $title-font-size;
      font-weight: 700;
      width: 4.67rem;
      span {
        line-height: 1.5;
      }
      &.tw {
        flex-direction: column-reverse;
      }
    }
    .slide-desc {
      width: 4.8rem;
      font-size: 0.16rem;
      padding: 0.56rem;
      text-align: justify;
    }
  }
  .photo-row {
    position: relative;
    @include withContainer;
    @include flexCenter;
    margin: auto;
  }

  .photo-item {
    @include bgCenter(cover);
    flex-shrink: 0;
    width: 4rem;
    &:not(:last-child) {
      margin-right: 0.8rem;
    }
    img {
      object-fit: cover;
      aspect-ratio: 16/9;
    }
    &:focus-within {
      outline: 0.03rem solid #4a90e2;
      outline-offset: 0.03rem;
    }
  }
}
@include tablet() {
  .home-banner__slide {
    .gallery-bg {
      background-position: 0% 85%;
      background-size: 100% auto;
      width: 4rem;
      height: 4rem;
      bottom: -45%;
      left: -30%;
    }
    .slide-header {
      padding: 0;
      .title {
        width: 2.66rem;
        font-size: 0.48rem;
        .title-light {
          width: 5rem;
          height: 5rem;
          top: -0.5rem;
          left: -1rem;
        }
      }
      .slide-desc {
        width: 3.98rem;
        line-height: 0.19rem;
        font-size: 0.16rem;
        padding: 0.16rem;
      }
    }
    .photo-row {
      width: 100%;
      &.first-row {
        padding-top: 0;
      }
    }
    .photo-item {
      width: 33.33%;
      background-size: cover;
      &:not(:last-child) {
        margin-right: 0rem;
      }
    }
  }
}
@include mobile {
  .home-banner__slide {
    .slide-container {
      display: none;
    }
    .gallery-bg {
      width: 3rem;
      height: 3rem;
      bottom: -25%;
      left: -60%;
    }
    .slide-header {
      flex-direction: column;
      padding: 0.16rem 0.24rem;
      margin: 0 auto;
      height: 100%;
      .title {
        width: 100%;
        font-size: 0.36rem;
        margin-bottom: 0.16rem;
      }
      .slide-desc {
        width: 100%;
        height: 100%;
        padding: 0;
        background: none;
      }
    }
    .photo-row {
      .photo-item {
        height: 100%;
        width: 50%;
        &.photo-item-2,
        &.photo-item-5 {
          display: none;
        }
      }
    }
  }
}
</style>
