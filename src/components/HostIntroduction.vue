<template>
  <section class="host-introduction" role="article">
    <div class="panel">
      <div class="section" v-for="section in sections" :key="section.title">
        <div class="section-title">{{ section.title }}</div>
        <div class="section-content">{{ section.content }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()

const sections = computed(() => [
  {
    title: t('host.host_introduction_tradition'),
    content: t('host.host_introduction_tradition_desc'),
  },
  {
    title: t('host.host_introduction_food'),
    content: t('host.host_introduction_food_desc'),
  },
  {
    title: t('host.host_introduction_nature'),
    content: t('host.host_introduction_nature_desc'),
  },
  {
    title: t('host.host_introduction_shopping'),
    content: t('host.host_introduction_shopping_desc'),
  },
  {
    title: t('host.host_introduction_reason'),
    content: t('host.host_introduction_reason_desc'),
  },
])
</script>

<style lang="scss" scoped>
.host-introduction {
  background-color: #fafcf2;
  @include flexCenter;
  padding: 0.56rem 0;
  .panel {
    width: 7.6rem;
    padding: 0.56rem;
    background-color: #fff;
    box-shadow: 0px 0.1rem 0.3rem 0px #7c8c2a1a;
    border-radius: 0.1rem;
    .section {
      color: $black-primary;
      text-align: justify;
      &:not(:last-child) {
        margin-bottom: 0.4rem;
      }
      .section-title {
        font-size: 0.28rem;
        font-weight: 700;
        margin-bottom: 0.16rem;
      }
      .section-content {
        font-size: 0.18rem;
        font-weight: 400;
      }
    }
  }
}
@include tablet {
  .host-introduction {
    padding: 0.32rem;
    .panel {
      width: 6.79rem;
      padding: 0.32rem;
      .section {
        &:not(:last-child) {
          margin-bottom: 0.32rem;
        }
      }
    }
  }
}
@include mobile {
  .host-introduction {
    padding: 0.16rem;
    .panel {
      max-width: 2.57rem;
      padding: 0.16rem;
    }
  }
}
</style>
