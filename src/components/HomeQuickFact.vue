<template>
  <section class="quick-fact" role="complementary" :aria-label="$t('home.quick_fact_title')">
    <div class="quick-fact__container">
      <h2 class="quick-fact__title" tabindex="0">
        {{ $t('home.quick_fact_title') }}
      </h2>
      <div class="cubes" tabindex="0">
        <div class="cube" tabindex="0" v-for="cube in cubes" :key="cube.title">
          <div class="cube__number">{{ cube.number }}</div>
          <div class="cube__title">
            {{ cube.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const cubes = computed(() => {
  return [
    {
      number: '44',
      title: t('home.quick_fact_cube_title_1'),
    },
    {
      number: '30+',
      title: t('home.quick_fact_cube_title_2'),
    },
    {
      number: '500+',
      title: t('home.quick_fact_cube_title_3'),
    },
  ]
})
</script>
<style lang="scss" scoped>
$cube-bg: #b8cf45;
.quick-fact {
  margin: 1.6rem auto;
  background: radial-gradient(106.36% 487.42% at 50% 50%, #161a02 0%, #9db528 100%);
  padding: 0.48rem 0.64rem;
  @include flexCenter(column);
  color: #fff;
  &__title {
    font-size: 0.48rem;
    margin-bottom: 0.24rem;
    font-weight: 700;
    text-align: center;
  }
  .cubes {
    @include flexCenter(row);
    @include withContainer;
    .cube {
      @include flexCenter(column);
      background: $cube-bg;
      background: radial-gradient(
        100% 210.25% at 0% 0%,
        rgba(255, 255, 255, 0.28) 0%,
        rgba(255, 255, 255, 0.04) 100%
      );
      width: 2.72rem;
      border-radius: 0.08rem;
      padding: 0.24rem;
      &:not(:last-child) {
        margin-right: 0.16rem;
      }
      &__number {
        font-size: 0.48rem;
        font-weight: 700;
      }
      &__title {
        font-size: 0.18rem;
      }
    }
  }
}
@include tablet {
  .quick-fact {
    padding: 0.2rem;
    margin: 0.96rem auto;

    &__title {
      font-size: 0.36rem;
    }
    .cubes {
      .cube {
        width: 2.28rem;
        height: 1.22rem;
        padding: 0.24rem;
        height: auto;
        &:not(:last-child) {
          margin-right: 0.04rem;
        }
        &__title {
          font-weight: 400;
          font-size: 0.17rem;
        }
        &__number {
          font-size: 0.36rem;
        }
      }
    }
  }
}
@include mobile {
  .quick-fact {
    padding: 0.16rem;
    margin: 0.72rem auto;
    .cubes {
      flex-direction: column;
      .cube {
        width: 2.88rem;
        height: 1.2rem;
        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 0.04rem;
        }
        &__title {
          font-size: 0.18rem;
        }
      }
    }
  }
}
</style>
