<template>
  <div class="host-banner">
    <div class="first-slide">
      <div class="first-slide__title">
        <h1>{{ $t('host.title') }}</h1>
      </div>
      <div class="first-slide__photos">
        <div
          class="photo-item"
          :style="{ backgroundImage: `url('/images/host-banner1.png')` }"
        ></div>
        <div
          class="photo-item"
          :style="{ backgroundImage: `url('/images/host-banner2.png')` }"
        ></div>
      </div>
      <p v-html="$t('host.content')"></p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.host-banner {
  @include withContainer;
  padding-top: 0.64rem;
  margin-bottom: 4rem;
  .first-slide {
    &__title {
      text-align: center;
      h1 {
        font-size: 0.88rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
    }
    p {
      margin: auto;
      width: 6.7rem;
      font-size: 0.16rem;
      line-height: 0.2rem;
    }
    &__photos {
      padding: 0 0.6rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.46rem;
      .photo-item {
        @include bgCenter;
        width: 6.25rem;
        height: 3.5rem;
        &:last-child {
          margin-top: 0.64rem;
        }
      }
    }
  }
}
</style>
