<template>
  <div class="section-sponsor">
    <BaseTitle class="get-involved__title" :title="$t('involved.sponsorship')" />
    <p class="section-sponsor__desc" data-aos="fade-up">
      {{ $t('involved.sponsorship_desc') }}
    </p>
    <p
      class="section-sponsor__desc"
      data-aos="fade-up"
      v-html="$t('involved.sponsorship_desc_appendix')"
    ></p>

    <div class="section-sponsor__reach" data-aos="fade-up">
      <h3 class="section-sponsor__reach-title">{{ $t('involved.sponsorship_reach') }}</h3>
      <div v-for="sponsor in sponsorList" :key="sponsor.title" class="section-sponsor__reach-item">
        <div class="section-sponsor__reach-number">{{ sponsor.number }}</div>
        <p class="section-sponsor__reach-item-title">
          {{ sponsor.title }}
        </p>
      </div>
    </div>

    <div class="contact-info" data-aos="fade-up">
      <h3 class="contact-info__title">{{ $t('involved.sponsorship_contact') }}</h3>
      <p class="contact-info__desc">
        李宜霖 Yiling Li 小姐
        <br />
        <a href="mailto:yiling_li@nasme.org.tw">yiling_li@nasme.org.tw</a>
      </p>

      <p class="contact-info__desc">
        巫承穎 Sandy Wu 小姐
        <br />
        <a href="mailto:sandy_wu@wda.gov.tw">sandy_wu@wda.gov.tw</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { INVOLVED_SECTION_ENUM } from '@/types/page_section'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseTitle from '@/components/BaseTitle.vue'

const { t } = useI18n()

const sponsorList = computed(() => {
  return [
    {
      number: '500+',
      title: t('involved.sponsorship_visitor'),
    },
    {
      number: '30+',
      title: t('involved.sponsorship_government'),
    },
    {
      number: '28+',
      title: t('involved.sponsorship_educational'),
    },
  ]
})
</script>

<style lang="scss" scoped>
.section-sponsor {
  &__desc {
    font-size: 0.18rem;
    color: $black-primary;
    margin-bottom: 0.16rem;
    text-align: left;
  }
  &__reach {
    @include flexCenter(column);
    padding: 0.24rem;
    background-color: #fafcf2;
    border-radius: 0.08rem;
    margin-bottom: 0.16rem;
    .section-sponsor__reach-title {
      font-size: 0.28rem;
      color: $black-primary;
      margin-bottom: 0.08rem;
      font-weight: 700;
    }
    .section-sponsor__reach-item {
      background-color: #c8e14b;
      padding: 0.16rem;
      border-radius: 0.08rem;
      width: 100%;
      color: $black-primary;
      text-align: center;

      &:not(:last-child) {
        margin-bottom: 0.02rem;
      }
      .section-sponsor__reach-item-title {
        font-size: 0.18rem;
      }
      .section-sponsor__reach-number {
        font-size: 0.28rem;
      }
    }
  }
  .contact-info {
    padding: 0.24rem;
    background-color: #f3f4f5;
    text-align: center;
    border-radius: 0.08rem;
    @include flexCenter(column);
    &__title {
      font-size: 0.18rem;
      color: $black-primary;
      font-weight: 700;
      margin-bottom: 0.08rem;
    }
    &__desc {
      font-size: 0.16rem;
      color: $black-primary;
      &:not(:last-child) {
        margin-bottom: 0.16rem;
      }
    }
  }
}
@include tablet {
  .get-involved {
    .section-container {
      width: 6.64rem;
    }
  }
}
@include mobile {
  .section-sponsor {
    &__desc {
      font-size: 0.14rem;
    }
    &__reach {
      .section-sponsor__reach-title {
        font-size: 0.16rem;
      }
      .section-sponsor__reach-item {
        line-height: normal;
        .section-sponsor__reach-number {
          font-size: 0.16rem;
        }
        .section-sponsor__reach-item-title {
          font-size: 0.12rem;
        }
      }
    }
  }
}
</style>
