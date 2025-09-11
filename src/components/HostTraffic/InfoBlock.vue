<template>
  <div class="info-block">
    <div class="banner-block">
      <img v-if="imageUrl" class="banner-image" :src="imageUrl" :alt="title" />
      <Text
        :tag="'h2'"
        :variant="'h2'"
        :align="'center'"
        :class="['banner-title', { leaf: !imageUrl }]"
      >
        {{ title }}
      </Text>
      <div class="source" v-if="source">
        <span class="source-text">
          {{ source }}
        </span>
      </div>
    </div>
    <div class="info-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Text from '@/components/HostTraffic/Text.vue'

const props = defineProps<{
  title: string
  imageUrl?: string
  source?: string
}>()
</script>
<style lang="scss" scoped>
$block-bg: #f3f4f5;
.info-block {
  display: flex;
  align-items: stretch;
  .banner-block {
    width: 4.26rem;
    background-color: #fafcf2;
    border-radius: 0.1rem;
    background: $block-bg;
    overflow: hidden;
    margin-right: 0.64rem;
    position: relative;
    flex-shrink: 0;
    .banner-image {
      width: 100%;
      height: 2.4rem;
      object-fit: cover;
      margin-bottom: 0.48rem;
    }
    .banner-title {
      padding: 0 0.04rem;
      &.leaf {
        margin-top: 0.48rem;
      }
    }
    .source {
      font-size: 0.12rem;
      color: #899ca4;
      position: absolute;
      bottom: 0.16rem;
      text-align: center;
      width: 100%;
    }
  }
}
@include tablet {
  .info-block {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.64rem;
    .banner-block {
      width: 6.16rem;
      margin-right: 0;
      padding-bottom: 0.16rem;
      .banner-image {
        margin-bottom: 0.16rem;
      }
      .banner-title {
        &.leaf {
          margin-top: 0.16rem;
        }
      }
      .source {
        position: static;
        width: 100%;
        margin-top: 0.16rem;
      }
    }
    .info-content {
      max-width: 100%;
      margin-top: 0.4rem;
    }
  }
}
@include mobile {
  .info-block {
    padding: 0 0.24rem;
    .banner-block {
      width: 100%;
    }
  }
}
</style>
