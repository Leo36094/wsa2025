<template>
  <div class="host-skill">
    <div class="host-skill-container">
      <div class="image-col">
        <div
          class="image-item"
          v-for="item in images.slice(0, 3)"
          :key="item"
          :style="{ backgroundImage: `url(${item})` }"
        ></div>
      </div>
      <div class="copy-col">
        <h2 class="title" v-html="$t('host.skill_title')"></h2>
        <p class="desc">{{ $t('host.skill_desc') }}</p>
        <a :href="$t('host.skill_link')" target="_blank" class="desc">
          {{ $t('host.skill_link_text') }}
        </a>
      </div>
      <div class="image-col">
        <div
          class="image-item"
          v-for="item in images.slice(3)"
          :key="item"
          :style="{ backgroundImage: `url(${item})` }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const images = computed(() =>
  Array(6)
    .fill(0)
    .map((_, i) => {
      const suffix = (i + 1).toString().padStart(2, '0')
      return `${import.meta.env.VITE_BASE_URL}images/wsa/host_section04_${suffix}.jpg`
    }),
)
</script>
<style lang="scss" scoped>
.host-skill {
  background: linear-gradient(180deg, #4f1787 0%, #180161 89.74%);

  .host-skill-container {
    max-width: 19.2rem;
    margin: auto;
    height: 9.14rem;
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
        font-size: 0.16rem;
        text-align: justify;
        &:not(:last-child) {
          margin-bottom: 0.16rem;
        }
      }
      a.desc {
        text-align: left;
      }
    }
  }
}
</style>
