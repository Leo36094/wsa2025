<template>
  <div class="section-visa" :id="SECTION_ID.Visa" aria-labelledby="visa-title" data-aos="fade-up">
    <BaseTitle class="section-visa__title" :title="$t('involved.visa_title')" />
    <p class="section-visa__desc">{{ $t('involved.visa_desc') }}</p>
    <div class="step-block" v-for="item in visaMethodList" :key="item.title">
      <h2 class="step-block__title">{{ item.title }}</h2>
      <div class="step-block__desc" v-html="item.desc" role="region" :aria-label="item.title"></div>
    </div>
    <BaseTitle class="section-visa__title" :title="$t('involved.visa_arrival_procedures')" />
    <p class="section-visa__desc" v-html="$t('involved.visa_arrival_procedures_desc')"></p>
    <ul :class="['arrival-list', { en: locale === 'en' }]" role="list">
      <li v-for="item in visaArrivalList" :key="item.title">
        <span class="arrival-list__title">{{ $t('involved.visa_arrival_entry') }}</span>
        <a
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${item.title} ${$t('involved.visa_arrival_procedures')} (opens in new tab)`"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
    <div class="attachment-list">
      <div class="label">{{ $t('involved.visa_attachment_title') }}</div>
      <a :href="visaAttachmentLink" target="_blank" rel="noopener noreferrer">
        {{ $t('involved.visa_attachment_link') }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { SECTION_ID } from '@/types/page_section'
import BaseTitle from '@/components/BaseTitle.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visaMethodList = computed(() => [
  {
    title: t('involved.visa_exemption'),
    desc: t('involved.visa_exemption_desc'),
  },
  {
    title: t('involved.visa_e_visa'),
    desc: t('involved.visa_e_visa_desc'),
  },
  {
    title: t('involved.visa_visa_assistance'),
    desc: t('involved.visa_visa_assistance_desc'),
  },
])
const visaArrivalList = computed(() => [
  {
    title: t('involved.visa_arrival_TPE'),
    link: t('involved.visa_arrival_TPE_link'),
  },
  {
    title: t('involved.visa_arrival_TSA'),
    link: t('involved.visa_arrival_TSA_link'),
  },
])

const { locale } = useI18n()
const visaAttachmentLink = computed(() => {
  return locale.value === 'en' ? '/files/visa_en.pdf' : '/files/visa_zh.pdf'
})
</script>

<style lang="scss" scoped>
$block-bg-color: #fafcf2;

.section-visa {
  a {
    text-decoration: underline;
  }
  &__title {
    margin: 0.4rem auto;
  }
  &__desc {
    margin-bottom: 0.16rem;
    font-size: 0.18rem;
    &:lang(zh) {
      text-align: center;
    }
  }
  .step-block {
    padding: 0.24rem;
    border-radius: 0.08rem;
    background-color: $block-bg-color;
    margin-bottom: 0.16rem;
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      margin-bottom: 0.08rem;
      font-size: 0.28rem;
      font-weight: 700;
      text-align: center;
    }
    :deep(a) {
      cursor: pointer;
      text-decoration: underline;
    }
    :deep(p) {
      line-height: normal;
      font-size: 0.18rem;
      text-align: left;
      &:not(:last-child) {
        margin-bottom: 0.08rem;
      }
    }
  }
  ul {
    list-style: disc;
    margin: 0 auto;
    padding: 0;
    @include flexCenter(column);
    &.en {
      align-items: flex-start;
    }
    li {
      list-style: disc;
    }
  }
  .attachment-list {
    padding: 0.16rem 0.32rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.16rem;
    width: 100%;
    border-radius: 0.08rem;
    border: 1px solid #18475b;
    margin-top: 0.4rem;
    .label {
      font-weight: 700;
    }
    a {
      padding: 0.12rem 0.24rem;
      cursor: pointer;
      border-radius: 0.08rem;
      background-color: #c8e14b;
      color: $black-primary;
      border: 1px solid $black-primary;
    }
  }
}
@include tablet {
  .section-visa {
    &__title {
      margin: 0.24rem auto;
    }
    &__desc {
      margin-bottom: 0.16rem;
    }
  }
}
@include mobile {
  .section-visa {
    &__title {
      margin: 0 auto 0.16rem auto;
      font-size: 0.24rem;
    }
    &__desc {
      font-size: 0.16rem;
    }
    .step-block {
      &__title {
        font-size: 0.16rem;
      }
      &__desc {
        font-size: 0.16rem;
      }
    }
    .arrival-list {
      @include flexCenter(column);
      margin-inline-start: 0.16rem;
      li {
        font-size: 0.16rem;
      }
    }
    .attachment-list {
      font-size: 0.16rem;
      padding: 0.16rem;
      flex-direction: column;
      a {
        padding: 0.12rem 0.24rem;
        margin-top: 0.16rem;
      }
    }
  }
}
@include listStyle();
</style>
