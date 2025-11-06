<template>
  <section
    class="media-occupation-intro"
    id="occupation-intro"
    :aria-labelledby="`${$t('media.occupation_intro_title')}`"
  >
    <div class="occupation-intro-container">
      <!-- <div class="coming-soon-container">
        <h2 class="coming-soon-title">{{ $t('media.occupation_intro_coming_soon') }}</h2>
        <p class="coming-soon-subtitle">{{ $t('media.occupation_intro_coming_soon_subtitle') }}</p>
      </div> -->
      <div class="background-overlay">
        <img
          :src="imageURL"
          alt="Background"
          class="background-image"
        />
      </div>


      <div class="content">
        <h2 class="title">{{ $t('media.occupation_intro_title') }}</h2>

        <a
          href="http://media.worldskillsasiataipei2025.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="view-button"
        >
          <span>{{ $t('media.occupation_intro_view_button') }}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="external-link-icon"
          >
            <path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Component for Occupation Introduction section
const imageURL = `${import.meta.env.BASE_URL}images/media/media_s02.jpg`
</script>

<style lang="scss" scoped>
.media-occupation-intro {
  width: 100%;
  // Coming Soon Styles
  .coming-soon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.2rem; // 40px 20px
    text-align: center;
    min-height: 50vh;
  }

  .coming-soon-title {
    font-size: 0.32rem; // 32px
    font-weight: bold;
    color: #333;
    margin-bottom: 0.16rem; // 16px
  }

  .coming-soon-subtitle {
    font-size: 0.18rem; // 18px
    color: #666;
    opacity: 0.8;
  }

  .occupation-intro-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1440 / 713;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: brightness(0.6);
    }
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.32rem; // 32px
  }

  .title {
    font-size: 0.28rem; // 28px
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    line-height: 1;
  }

  .view-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.16rem; // 16px
    padding: 0 0.24rem; // 0 24px
    height: 0.44rem; // 44px
    background-color: #c8e14b;
    border: 1px solid #101e24;
    border-radius: 0.08rem; // 8px
    font-size: 0.16rem; // 16px
    font-weight: 400;
    color: #101e24;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #b8d13b;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(0);
    }

    .external-link-icon {
      width: 0.24rem; // 24px
      height: 0.24rem; // 24px
      flex-shrink: 0;
    }
  }

  // Responsive styles
  @media (max-width: 768px) {
    .occupation-intro-container {
      aspect-ratio: 375 / 400;
    }

    .content {
      gap: 0.24rem; // 24px
      padding: 0 0.2rem; // 0 20px
    }

    .title {
      font-size: 0.24rem; // 24px
    }

    .view-button {
      font-size: 0.14rem; // 14px
      height: 0.4rem; // 40px
      padding: 0 0.2rem; // 0 20px
      gap: 0.12rem; // 12px

      .external-link-icon {
        width: 0.2rem; // 20px
        height: 0.2rem; // 20px
      }
    }
  }
}
</style>
