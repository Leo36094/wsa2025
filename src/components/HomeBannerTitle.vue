<template>
  <div class="banner-title">
    {{ $t('home.title') }}
    <span>{{ $t('home.year') }}</span>
  </div>
</template>
<style lang="scss" scoped>
.banner-title {
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.06rem;
  span {
    color: #c8e14b;
  }
}
@include mobile {
  .banner-title {
    width: 2.08rem;
    white-space: normal;
    font-size: 0.36rem;
    line-height: 0.43rem;
  }
}
</style>
