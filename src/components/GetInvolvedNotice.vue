<template>
  <div class="section-notice" aria-labelledby="notice-title" data-aos="fade-up">
    <BaseTitle class="section-notice__title" :title="$t('involved.notice_title')" />
    <img class="section-notice__dm" :src="dmImg.front" alt="immigration front" />
    <img class="section-notice__dm" :src="dmImg.back" alt="immigration back" />
    <div
      class="section-notice__desc"
      v-html="$t('involved.notice_desc')"
      role="region"
      :aria-label="$t('involved.notice_title')"
    ></div>
    <div class="notice-block">
      <div
        class="notice-block__desc"
        v-html="noticeDetail"
        role="region"
        :aria-label="$t('involved.notice_title')"
      ></div>
    </div>
    <div
      class="section-notice__desc"
      v-html="$t('involved.notice_detail_source')"
      role="region"
      :aria-label="$t('involved.notice_title')"
    ></div>
    <div class="qr-code">
      <img src="/images/getInvolved/notice/qrcode.png" alt="qr code" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { locale } = useI18n()

const dmImg = computed(() => {
  if (locale.value === 'en') {
    return {
      front: import.meta.env.BASE_URL + 'images/getInvolved/notice/immigration_en_front.jpg',
      back: import.meta.env.BASE_URL + 'images/getInvolved/notice/immigration_en_back.jpg',
    }
  }
  return {
    front: import.meta.env.BASE_URL + 'images/getInvolved/notice/immigration_zh_front.jpg',
    back: import.meta.env.BASE_URL + 'images/getInvolved/notice/immigration_zh_back.jpg',
  }
})
const noticeDetail = computed(() => {
  return t('involved.notice_detail_block')
})
</script>

<style lang="scss" scoped>
$block-bg-color: #fafcf2;

.section-notice {
  width: 100%;
  a {
    text-decoration: underline;
  }
  &__title {
    margin: 0.4rem auto;
  }
  &__desc {
    margin-bottom: 0.16rem;
    font-size: 0.16rem;
  }
  &__dm {
    width: 100%;
    height: auto;
    margin-bottom: 0.24rem;
  }
  .notice-block {
    padding: 0.24rem;
    border-radius: 0.08rem;
    background-color: $block-bg-color;
    margin-bottom: 0.16rem;
    font-size: 0.16rem;
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      margin-bottom: 0.08rem;
      font-weight: 700;
      text-align: center;
    }
    &__desc {
      @include flexCenter(column);
      align-items: flex-start;
    }
    :deep(a) {
      cursor: pointer;
      text-decoration: underline;
    }
    :deep(.group) {
      margin-bottom: 0.08rem;
    }
    .qr-code {
      width: 136px;
      img {
        width: 100%;
      }
    }
  }
}
@include tablet {
  .section-notice {
    &__title {
      margin: 0.24rem auto;
    }
    &__desc {
      margin-bottom: 0.16rem;
    }
    :deep(.group) {
      margin-bottom: 0.16rem;
    }
  }
}
@include mobile {
  .section-notice {
    &__title {
      margin: 0 auto 0.16rem auto;
      font-size: 0.24rem;
    }
    &__desc {
      font-size: 0.16rem;
    }
    .notice-block {
      padding: 0.16rem;
      &__title {
        font-size: 0.16rem;
      }
      &__desc {
        font-size: 0.16rem;
      }
      :deep(.group) {
        margin-bottom: 0.08rem;
      }
    }
  }
}
</style>
