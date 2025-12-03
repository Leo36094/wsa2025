<template>
  <div class="cloud-album-link">
    <p class="cloud-album-text">{{ $t('media.cloud_album_text') }}</p>
    <a
      :href="albumUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="cloud-album-button"
      :aria-label="$t('media.cloud_album_button_aria')"
    >
      {{ $t('media.cloud_album_button') }}
    </a>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  albumUrl?: string
}

withDefaults(defineProps<Props>(), {
  albumUrl: '#',
})
</script>

<style lang="scss" scoped>
.cloud-album-link {
  display: flex;
  gap: 0.16rem;
  align-items: center;
  justify-content: center;
  padding: 0.16rem 0.32rem;
  border: 1px solid #18475b;
  border-radius: 0.08rem;
  box-sizing: border-box;
  width: 100%;

  .cloud-album-text {
    font-family: 'Inter', 'Noto Sans JP', sans-serif;
    font-weight: 400;
    font-size: 0.16rem;
    line-height: normal;
    color: #101e24;
    text-align: center;
    white-space: nowrap;
    margin: 0;
  }

  .cloud-album-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.16rem;
    height: 0.44rem;
    padding: 0 0.24rem;
    background-color: #c8e14b;
    border: 1px solid #101e24;
    border-radius: 0.08rem;
    box-sizing: border-box;
    font-family: 'Inter', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
    font-weight: 400;
    font-size: 0.16rem;
    line-height: normal;
    color: #101e24;
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 0.2s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }

  // Tablet responsive
  @include tablet() {
    padding: 0.12rem 0.24rem;
    gap: 0.12rem;

    .cloud-album-text {
      font-size: 0.14rem;
    }

    .cloud-album-button {
      height: 0.4rem;
      padding: 0 0.2rem;
      font-size: 0.14rem;
    }
  }

  // Mobile responsive
  @include mobile() {
    flex-direction: column;
    padding: 0.12rem 0.16rem;
    gap: 0.12rem;

    .cloud-album-text {
      font-size: 0.14rem;
    }

    .cloud-album-button {
      width: 100%;
      height: 0.36rem;
      padding: 0 0.16rem;
      font-size: 0.14rem;
    }
  }
}
</style>

