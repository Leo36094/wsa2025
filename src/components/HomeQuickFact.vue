<template>
  <section class="quick-fact" role="complementary" :aria-label="$t('home.quick_fact_title')">
    <div class="quick-fact__container">
      <h2 class="quick-fact__title" tabindex="0">
        {{ $t('home.quick_fact_title') }}
      </h2>
      <div class="cubes" tabindex="0">
        <div
          data-aos="fade-right"
          :data-aos-delay="index * 200"
          data-aos-duration="500"
          class="cube"
          tabindex="0"
          v-for="(cube, index) in cubes"
          :key="cube.title"
        >
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
  position: relative;
  color: $black-primary;
  .quick-fact__container {
    width: 12.32rem;
    padding: 0 0.96rem;
    border-radius: 0.4rem;
    @include flexCenter(column);
  }
  &__title {
    font-size: $title-font-size;
    margin-bottom: 0.24rem;
    font-weight: 700;
    width: 5.18rem;
    text-align: center;
  }
  .cubes {
    @include flexCenter();
    .cube {
      @include flexCenter(column);
      width: 3.6rem;
      height: 1.5rem;
      border-radius: 0.08rem;
      padding: 0.24rem 0.4rem;
      &:not(:last-child) {
        margin-bottom: 0.08rem;
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
    padding: 0rem;
    margin: 0.96rem auto 0 auto;
    .quick-fact__container {
      width: 6.88rem;
      border-radius: 0;
      padding: 0.24rem;
      height: auto;
    }

    &__title {
      width: 3.3rem;
      height: 0.44rem;
      font-size: $title-font-size-m;
      margin-bottom: 0.16rem;
    }
    .cubes {
      .cube {
        width: 2.24rem;
        height: 1.34rem;
        padding: 0 0.24rem;
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
      width: 100%;
    }
    &__title {
      width: auto;
    }
    .cubes {
      flex-direction: column;
      .cube {
        width: 100%;
        height: auto;
        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 0.04rem;
        }
        &__title {
          font-size: $desc-font-size-m;
        }
      }
    }
  }
}
</style>
