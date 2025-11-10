<template>
  <div class="regulation">
    <BaseTitle class="regulation__title" :title="$t('media.regulation_title')" />
    <p class="regulation__desc">{{ $t('media.regulation_desc') }}</p>
    <TextBlock class="content-block" :title="$t('media.regulation_application_title')">
      <div class="text-group">
        <h3 class="text-group__title">
          {{ $t('media.regulation_application_online') }}
        </h3>
        <p class="application__desc">
          {{ $t('media.regulation_application_online_desc') }}
        </p>
      </div>
      <div class="text-group">
        <h3 class="text-group__title">
          {{ $t('media.regulation_application_onsite') }}
        </h3>
        <p class="application__desc">
          {{ $t('media.regulation_application_onsite_desc') }}
        </p>
        <div class="text-group">
          <h3 class="application__desc">{{ $t('media.regulation_application_form_title') }}</h3>
          <p class="application__desc" v-html="$t('media.regulation_application_form_link')"></p>
        </div>
      </div>
    </TextBlock>
    <TextBlock class="content-block" :title="$t('media.regulation_onsite_guideline_title')">
      <div class="text-group" v-html="$t('media.regulation_onsite_guideline_desc')"></div>
    </TextBlock>
    <TextBlock class="content-block" :title="$t('media.regulation_brief_title')">
      <div class="text-group" v-html="$t('media.regulation_brief_desc', { img: agendaImg })"></div>
    </TextBlock>
    <TextBlock class="content-block" :title="$t('media.regulation_contact_title')">
      <div class="text-group">
        <h3 class="text-group__title">{{ $t('media.regulation_contact_name1') }}</h3>
        <p class="contact__department">{{ $t('media.regulation_contact_department1') }}</p>
        <p class="contact__info" v-html="$t('media.regulation_contact_info1')"></p>
      </div>
      <div class="text-group">
        <h3 class="text-group__title">{{ $t('media.regulation_contact_name2') }}</h3>
        <p class="contact__department">{{ $t('media.regulation_contact_department2') }}</p>
        <p class="contact__info" v-html="$t('media.regulation_contact_info2')"></p>
      </div>
    </TextBlock>
    <div class="attachment-list">
      <div class="label">{{ $t('media.regulation_attachment_title') }}</div>
      <a :href="attachmentLink" target="_blank" rel="noopener noreferrer">
        {{ $t('involved.visa_attachment_link') }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import TextBlock from '@/components/TextBlock.vue'
import BaseTitle from '@/components/BaseTitle.vue'

const { locale } = useI18n()

const attachmentLink = computed(() => {
  return locale.value === 'en'
    ? '/files/2025_WSA_Media_Regulations_EN.pdf'
    : '/files/2025_WSA_Media_Regulations_CN.pdf'
})

const agendaImg = `${import.meta.env.BASE_URL}images/media/agenda.png`
</script>

<style lang="scss" scoped>
@use 'sass:map';
$section-margin: (
  pc: 0.16rem,
  mobile: 0.08rem,
);

.regulation {
  font-size: 0.18rem;
  max-width: 10.66rem;
  &__title {
    margin-bottom: 0.4rem;
  }
  &__desc,
  .content-block {
    margin-bottom: map.get($section-margin, 'pc');
    .text-group {
      margin-bottom: 0.08rem;
      &__title {
        margin-bottom: 0.04rem;
      }
    }
  }
  h3 {
    margin-bottom: 0.04rem;
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
@include mobile {
  .regulation {
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
</style>
