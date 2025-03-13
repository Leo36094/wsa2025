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
.quick-fact {
  margin: 1.6rem auto;
  @include flexCenter(column);
  color: #fff;
  .quick-fact__container {
    width: 12.32rem;
    height: 4.46rem;
    @include bgCenter(cover);
    background-image: url('/images/wsa/home_purple_desktop.jpg');
    padding: 0.56rem;
    border-radius: 0.4rem;
    @include flexCenter;
  }
  &__title {
    font-size: 0.48rem;
    margin-bottom: 0.24rem;
    font-weight: 700;
    width: 5.32rem;
    text-align: center;
  }
  .cubes {
    @include flexCenter(column);
    @include withContainer;
    .cube {
      display: flex;
      align-items: center;
      width: 5.32rem;
      height: 1.06rem;
      border-radius: 0.08rem;
      border: 1px solid #ffffff66;
      padding: 0.24rem 0.4rem;
      &:not(:last-child) {
        margin-bottom: 0.06rem;
      }
      &__number {
        font-size: 0.48rem;
        width: 1.3rem;
        font-weight: 700;
        text-align: right;
        margin-right: 0.24rem;
      }
      &__title {
        font-size: 0.18rem;
      }
    }
  }
}
@include tablet {
  .quick-fact {
    padding: 0rem;
    margin: 0.96rem auto 0 auto;
    .quick-fact__container {
      width: 100%;
      border-radius: 0;
      padding: 0.24rem;
      height: auto;
    }

    &__title {
      width: 3.3rem;
      height: 0.44rem;
      margin-bottom: 0.16rem;
      font-size: 0.36rem;
    }
    .cubes {
      .cube {
        width: 3.3rem;
        height: 1.19rem;
        padding: 0.24rem;
        @include flexCenter(column);
        &:not(:last-child) {
          margin-bottom: 0.04rem;
        }
        &__title {
          font-weight: 400;
          font-size: 0.17rem;
        }
        &__number {
          text-align: center;
          margin-right: 0;
          width: auto;
          font-size: 0.36rem;
        }
      }
    }
  }
}
@include mobile {
  .quick-fact {
    margin: 0.72rem auto 0 auto;
    .quick-fact__container {
      @include flexCenter(column);
      padding: 0.16rem;
    }
    &__title {
      width: auto;
    }
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
