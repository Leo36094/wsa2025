<template>
  <div class="section-forum" aria-labelledby="forum-title" data-aos="fade-up">
    <BaseTitle class="section-forum__title" :title="$t('involved.forum_title')" />
    <img src="/images/getInvolved/forum/forum_01.jpg" alt="forum" />
    <img src="/images/getInvolved/forum/forum_02.jpg" alt="forum" />
    <div class="section-forum__desc">
      <p>
        {{ $t('involved.registration_link') }}
        <a :href="registrationLink" target="_blank" aria-label="registration-link">{{
          registrationLink
        }}</a>
      </p>
    </div>
    <!-- <p
      class="section-forum__desc"
      v-html="$t('involved.forum_desc')"
      role="region"
      :aria-label="$t('involved.forum_desc_aria_label')"
    ></p>
    <div class="section-forum__content">
      <div class="section-forum__content-item" v-for="item in conferenceList" :key="item.label">
        <div class="label">{{ item.label }}</div>
        <div class="value" v-if="!item.insertHTML">{{ item.value }}</div>
        <div class="value" v-if="item.insertHTML" v-html="item.value" />
      </div>
      <p class="section-forum__conference-note">{{ $t('involved.forum_conference_note') }}</p>
    </div>
    <div class="section-forum__notice">
      <h3>{{ $t('involved.forum_notice_title') }}</h3>
      <div v-html="$t('involved.forum_notice_desc')" />
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

// 中文版面：報名連結: https://forms.gle/GJ5Ty6jZiwFpZVHMA
// •英文版面： Registration Link: https://forms.gle/GJ5Ty6jZiwFpZVHMA

const registrationLink = computed(() => {
  return locale.value === 'en'
    ? 'https://forms.gle/GJ5Ty6jZiwFpZVHMA'
    : 'https://forms.gle/GJ5Ty6jZiwFpZVHMA'
})

const conferenceList = computed(() => [
  {
    label: t('involved.forum_conference_capacity'),
    value: t('involved.forum_conference_capacity_value'),
    insertHTML: false,
  },
  {
    label: t('involved.forum_conference_date'),
    value: t('involved.forum_conference_date_value'),
    insertHTML: false,
  },
  {
    label: t('involved.forum_conference_application'),
    value: t('involved.forum_conference_application_value'),
    insertHTML: false,
  },
  {
    label: t('involved.forum_conference_contact'),
    value: t('involved.forum_conference_contact_value'),
    insertHTML: true,
  },
])
</script>
<style lang="scss" scoped>
$block-bg: #fafcf2;
$label-bg: #c8e14b;
.section-forum {
  padding-top: 0.24rem;
  &__title {
    margin-bottom: 0.24rem;
  }
  &__desc {
    font-size: 0.18rem;
    margin-bottom: 0.24rem;
  }
  &__content {
    background: $block-bg;
    padding: 0.32rem;
    border-radius: 0.08rem;
    &-item {
      display: flex;
      font-size: 0.16rem;
      &:not(:last-child) {
        margin-bottom: 0.16rem;
      }
      .label {
        background: $label-bg;
        padding: 0.06rem 0.12rem;
        font-weight: 700;
        border-radius: 1rem;
        flex-basis: 1.95rem;
        flex-shrink: 0;
        text-align: center;
        margin-right: 0.16rem;
        align-self: flex-start;
      }
      .value {
        flex-grow: 1;
        display: flex;
        font-weight: 400;
        align-items: center;
        :deep(a) {
          cursor: pointer;
          margin-left: 0.04rem;
        }
      }
    }
  }
  &__notice {
    margin-top: 0.24rem;
    h3 {
      font-size: 0.24rem;
      margin-bottom: 0.16rem;
      font-weight: 700;
    }
  }
  @include listStyle();
}
@include mobile {
  .section-forum {
    &__title {
      font-size: 0.24rem;
    }
    &__content {
      padding: 0.16rem;
      &-item {
        font-size: 0.16rem;
        @include flexCenter(column);
        .label {
          margin-right: 0;
          margin-bottom: 0.08rem;
          flex-basis: 100%;
          width: 100%;
        }
        .value {
          display: block;
          width: 100%;
          text-align: left;
        }
      }
    }
    &__notice {
      h3 {
        font-size: 0.16rem;
      }
      :deep(ul) {
        font-size: 0.16rem;
      }
    }
  }
}
</style>
