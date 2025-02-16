<template>
  <div class="quick-fact">
    <div class="quick-fact__container">
      <div class="quick-fact__title">
        {{ $t('home.quick_fact_title') }}
      </div>
      <div class="cubes">
        <div class="cube" v-for="cube in cubes" :key="cube.title">
          <div class="cube__number">{{ cube.number }}</div>
          <div class="cube__title">
            {{ cube.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
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
  background: $green-primary;
  padding: 0.48rem 0.64rem;
  @include flexCenter(column);
  color: $black-primary;
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
