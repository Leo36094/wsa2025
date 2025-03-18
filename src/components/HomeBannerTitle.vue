<template>
  <div class="banner-title">
    <p class="date">{{ $t('home.banner_date') }}</p>
    <div class="pc">
      <div
        tabindex="0"
        :class="['slogan', { tw: locale === 'tw' }]"
        :aria-label="`${$t('home.title')} ${$t('home.year')}`"
      >
        {{ $t('home.title') }} <span class="banner-year">{{ $t('home.year') }}</span>
    </div>
    </div>
    <div class="splits" aria-hidden="true">
      <span>{{ $t('home.split_title1') }}</span>
      <span>{{ $t('home.split_title2') }}</span>
      <span>{{ $t('home.split_title3') }}</span>
      <span class="banner-year">{{ $t('home.year') }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
</script>
<style lang="scss" scoped>
.banner-title {
  font-weight: 700;
  color: #fff;
  .slogan {
    &.tw {
      @include flexCenter(row-reverse);
    }
  }
  .date {
    font-size: 0.28rem;
  }
  .pc {
    font-size: 0.88rem;
    line-height: 1.06rem;
  }
  .banner-year {
    color: $green-primary;
  }
  .splits {
    display: none;
  }
}
@include tablet {
  .banner-title {
    .pc {
      display: none;
    }
    .banner-year {
      line-height: 1.06rem;
    }
    .splits {
      font-size: 0.72rem;
      display: flex;
      flex-direction: column;
    }
  }
}
@include mobile {
  .banner-title {
    width: 2.08rem;

    .date {
      font-size: 0.16rem;
    }
    .splits {
      font-size: 0.36rem;
      width: 2.08rem;
      line-height: 100%;
      font-size: $title-font-size-m;
    }
    .banner-year {
      line-height: 0.43rem;
    }
  }
}
</style>
