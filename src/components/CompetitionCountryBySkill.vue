<template>
  <div class="competition-country-by-skill">
    <div class="competition-country-by-skill__container">
      <CountryBySkillTable />

      <!-- Note Section -->
      <div class="note-section">
        <p class="note-text">{{ $t('page_tabs.country_by_skill_note') }}</p>
      </div>
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

.note-section {
  margin-top: 0.32rem;
  padding: 0.24rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 0.04rem solid #c8e14b;
  border-radius: 0.08rem;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.05);
}

.note-text {
  margin: 0;
  font-size: 0.15rem;
  line-height: 1.8;
  color: #18475b;
  text-align: left;
}

@include tablet {
  .competition-country-by-skill {
    min-height: calc(100vh - 1.6rem);
    padding: 0.3rem 0;

    &__container {
      padding: 0 0.16rem;
    }
  }

  .note-section {
    margin-top: 0.28rem;
    padding: 0.2rem;
  }

  .note-text {
    font-size: 0.14rem;
    line-height: 1.7;
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

  .note-section {
    margin-top: 0.24rem;
    padding: 0.16rem;
  }

  .note-text {
    font-size: 0.13rem;
    line-height: 1.6;
  }
}
</style>
