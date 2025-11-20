<template>
  <div class="competition-country-by-skill">
    <div class="competition-country-by-skill__container">
      <CountryBySkillTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import CountryBySkillTable from '@/components/CountryBySkillTable.vue'
</script>

<style lang="scss" scoped>
.competition-country-by-skill {
  width: 100%;
  min-height: calc(100vh - 2.2rem);
  background-color: #fff;
  padding: 0.4rem 0;

  &__container {
    width: 100%;
    max-width: 14rem;
    margin: 0 auto;
    padding: 0 0.2rem;
  }
}

@include tablet {
  .competition-country-by-skill {
    min-height: calc(100vh - 1.6rem);
    padding: 0.3rem 0;

    &__container {
      padding: 0 0.16rem;
    }
  }
}

@include mobile {
  .competition-country-by-skill {
    min-height: calc(100vh - 1.46rem);
    padding: 0.24rem 0;

    &__container {
      padding: 0 0.12rem;
    }
  }
}
</style>

