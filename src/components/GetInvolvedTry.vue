<template>
  <div class="section-try">
    <div class="section-try-info">
      <div class="club-decoration"></div>
      <div class="banner-text">
        <span class="banner-text__text" v-for="text in themeTextList" :key="text">{{ text }}</span>
      </div>
      <div class="title-divider"></div>
      <h2 class="title">{{ $t('involved.theme_exhibition') }}</h2>
      <div class="content">
        <p class="content-desc" v-html="$t('involved.theme_exhibition_desc')"></p>
      </div>
      <div class="theme-item">
        <img src="/images/host/trySkill/try-banner.png" alt="Theme Exhibition" />
      </div>
    </div>
    <div class="section-try-table">
      <!-- Location Information Card -->
      <div class="location-info-wrapper">
        <div class="location-info-card">
          <div class="location-info-item">
            <span class="location-label">{{ $t('involved.try_skill_location_label') }}</span>
            <span class="location-value">{{ $t('involved.try_skill_location_value') }}</span>
          </div>
        </div>
      </div>
      <ThemeExhibitionTable />
    </div>
    <div class="section-try-info">
      <div class="club-decoration"></div>
      <div class="banner-text">
        <span class="banner-text__text" v-for="text in bannerTextList" :key="text">{{ text }}</span>
      </div>
      <div class="title-divider"></div>
      <h2 class="title">{{ $t('involved.try_title') }}</h2>
      <div class="content">
        <p class="content-desc" v-html="$t('involved.try_content_desc')"></p>
      </div>
      <div class="gallery">
        <div
          v-for="image in galleryImages"
          :key="image.id"
          class="gallery-item"
          :style="{ top: `${image.offset}rem` }"
        >
          <img :src="image.src" :alt="image.alt" />
          <div class="gallery-divider"></div>
        </div>
      </div>
    </div>
    <div class="section-try-table">
      <TrySkillTables />
    </div>
    <div class="section-try-table">
      <SkillMissionTable />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import TrySkillTables from './TrySkillTables.vue'
import ThemeExhibitionTable from './ThemeExhibitionTable.vue'
import SkillMissionTable from './SkillMissionTable.vue'

const bannerTextList = ['TRY', 'A', 'SKILL']
const themeTextList = ['Theme', 'Exhibit']

// Gallery data - completely data-driven approach
const galleryData = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}images/host/trySkill/try a skill 1.jpg`,
    alt: 'Try a skill 1',
  },
  {
    id: 2,
    src: `${import.meta.env.BASE_URL}images/host/trySkill/try a skill 2.jpg`,
    alt: 'Try a skill 2',
  },
  {
    id: 3,
    src: `${import.meta.env.BASE_URL}images/host/trySkill/try a skill 3.jpg`,
    alt: 'Try a skill 3',
  },
]

// Responsive offset configuration
const offsetConfig = {
  desktop: [0, 0.24, 0.48],
  tablet: [0, 0.1245, 0.249],
  mobile: [0, 0, 0],
}

const galleryImages = computed(() =>
  galleryData.map((item, index) => ({
    ...item,
    offset: offsetConfig.desktop[index] || 0,
  })),
)
</script>
<style lang="scss" scoped>
$bg-color: #18475b;
$divider-color: #c8e14b;
.section-try {
  width: 100%;
  margin-top: 0.4rem;
  color: #fff;
  text-align: left;
  .section-try-info {
    background-color: $bg-color;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    position: relative;
    overflow: hidden;
  }
  .club-decoration {
    position: absolute;
    top: -0.5rem;
    right: -0.8rem;
    @include bgCenter(contain);
    background-image: url('/images/club_empty_green.png');
    width: 3.5rem;
    height: 3.5rem;
    animation: rotate 10s linear infinite;
  }
  .banner-text {
    width: 100%;
    color: rgba(255, 255, 255, 0.1);
    font-size: 1.28rem;
    font-weight: 900;
    line-height: 100%;
    display: flex;
    gap: 0.2rem;
    position: relative;
    &__text {
      letter-spacing: 0.1rem;
    }
  }
  .title-divider {
    margin-right: auto;
    width: 1.38rem;
    height: 0.12rem;
    text-align: left;
    background-color: $divider-color;
  }
  .title {
    font-size: 0.48rem;
    font-weight: 700;
    line-height: normal;
    width: 100%;
  }
  .content {
    font-weight: 200;
    margin-right: auto;
    font-size: 0.18rem;
  }

  // Gallery styles
  .gallery {
    width: 12.8rem;
    height: 3.256rem;
    display: flex;
    gap: 0.16rem;
    position: relative;
  }
  .theme-item {
    width: 100%;
    img {
      width: 100%;
      object-fit: contain;
      aspect-ratio: 4/1;
    }
  }
  .gallery-item {
    display: flex;
    flex-direction: column;
    gap: 0.16rem;
    width: 4.16rem;
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 500/300;
      object-fit: cover;
    }

    .gallery-divider {
      width: 1.38667rem;
      height: 0.12rem;
      background-color: $divider-color;
    }
  }

  // Table section
  .section-try-table {
    width: 100%;
    padding: 0.8rem 0.8rem 0 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  // Location Information Card Wrapper
  .location-info-wrapper {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto 0.24rem;
    padding: 0 0.4rem;
  }

  .location-info-card {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.32rem;
    background: linear-gradient(135deg, #18475b 0%, #2a5f75 100%);
    border-radius: 0.08rem;
    box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .location-info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.08rem;
  }

  .location-label {
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    white-space: nowrap;
  }

  .location-value {
    font-size: 0.18rem;
    color: #c8e14b;
    font-weight: 700;
    white-space: nowrap;
  }
}
@include tablet {
  .section-try {
    margin-top: 0.2rem;

    .section-try-info {
      padding: 0.4rem;
    }

    .banner-text {
      font-size: 0.88rem;
      letter-spacing: 0.03rem;
      gap: 0.16rem;
    }

    // Tablet gallery adjustments
    .gallery {
      width: 6.64rem;
      height: 1.689rem;
      gap: 0.083rem;
    }

    .gallery-item {
      width: 2.158rem;
      gap: 0.09rem;

      .gallery-divider {
        width: 0.71933rem;
        height: 0.06225rem;
      }
    }

    .section-try-table {
      padding: 0.4rem;
    }

    .location-info-wrapper {
      padding: 0 0.3rem;
      margin-bottom: 0.2rem;
    }

    .location-info-card {
      padding: 0.16rem 0.28rem;
    }

    .location-label {
      font-size: 0.13rem;
    }

    .location-value {
      font-size: 0.16rem;
    }
  }
}
@include mobile {
  .section-try {
    margin-top: 0.16rem;

    .section-try-info {
      padding: 0.2rem;
    }

    .banner-text {
      font-size: 0.56rem;
      letter-spacing: 0.02rem;
      gap: 0.1rem;
      flex-direction: column;
      font-size: 0.64rem;
    }

    .club-decoration {
      width: 1.5rem;
      height: 1.5rem;
      top: -0.5rem;
      right: -0.5rem;
    }

    // Mobile gallery adjustments
    .gallery {
      width: 100%;
      height: auto;
      flex-direction: column;
      gap: 0.08rem;
    }

    .gallery-item {
      width: 100%;
      gap: 0.08rem;

      .gallery-divider {
        display: none; // Hide dividers on mobile
      }
    }

    .section-try-table {
      padding: 0.2rem;
    }

    .location-info-wrapper {
      padding: 0 0.16rem;
      margin-bottom: 0.16rem;
    }

    .location-info-card {
      padding: 0.16rem 0.24rem;
    }

    .location-label {
      font-size: 0.12rem;
    }

    .location-value {
      font-size: 0.15rem;
    }
  }
}
</style>
