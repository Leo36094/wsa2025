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
.quick-fact {
  margin: 1.6rem auto;
  background: #00000033;
  padding: 0.48rem 0.64rem;
  @include flexCenter(column);
  &__title {
    font-size: 0.48rem;
    margin-bottom: 0.24rem;
    text-align: center;
  }
  .cubes {
    @include flexCenter(row);
    @include withContainer;
    .cube {
      @include flexCenter(column);
      background: #eb367826;
      width: 2.72rem;
      border-radius: 0.08rem;
      padding: 0.24rem;
      &:not(:last-child) {
        margin-right: 0.16rem;
      }
      &__number {
        font-size: 0.48rem;
        font-weight: 700;
        color: #fff;
      }
      &__title {
        color: #eb3678;
        font-size: 0.18rem;
      }
    }
  }
}
</style>
