<template>
  <div class="banner-title">
    <div class="pc">
      {{ $t('home.title') }}
      <span class="banner-year">{{ $t('home.year') }}</span>
    </div>
    <div class="splits">
      <span>{{ $t('home.split_title1') }}</span>
      <span>{{ $t('home.split_title2') }}</span>
      <span>{{ $t('home.split_title3') }}</span>
      <span class="banner-year">{{ $t('home.year') }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner-title {
  font-weight: 700;
  .pc {
    font-size: 0.88rem;
    line-height: 1.06rem;
  }
  .banner-year {
    color: #c8e14b;
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
      width: 5.07rem;
      font-size: 0.88rem;
      line-height: 1.06rem;
      display: flex;
      flex-direction: column;
    }
  }
}
@include mobile {
  .banner-title {
    .splits {
      font-size: 0.36rem;
      width: 2.08rem;
      line-height: 0.43rem;
    }
    .banner-year {
      line-height: 0.43rem;
    }
  }
}
</style>
