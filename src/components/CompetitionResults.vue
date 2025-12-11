<template>
  <div class="competition-results" id="results">
    <div class="results-container">
      <div class="results">
        <h2 class="results__title">
          {{ $t('competition.results_title') }}
        </h2>
        <div class="item-container">
          <div class="item">
            <div class="item__image">
              <img src="/images/wsa_logo.svg" :alt="$t('header.wsa_logo')" />
            </div>

            <div class="item__divider" />

            <div class="item__download-area">
              <div v-html="$t('competition.results_desc')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.competition-results {
  .results-container {
    @include withContainer;
    padding-bottom: 2.5rem;
  }
  .results {
    width: 100%;
    padding: 0 1.41rem;
    &__title {
      font-size: 0.36rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      text-align: center;
    }
    .item-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.32rem;
    }
    .item {
      display: flex;
      flex-direction: column;
      max-width: 5.63rem;
      background-color: white;
      box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
      border-radius: 0.1rem;
      padding: 0.4rem;
      gap: 0.4rem;

      &__image {
        padding: 0.14rem 0.78rem;
        display: flex;
        justify-content: center;
      }

      &__divider {
        background: rgba(137, 156, 164, 1);
        height: 0.01rem;
      }

      &__download-area {
        display: flex;
        flex-direction: column;
        gap: 0.24rem;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 0.2rem;
        color: rgba(16, 30, 36, 1);
        text-align: center;

        :deep(a) {
          color: rgba(0, 145, 229, 1);
        }
      }
    }
  }
}
@include tablet {
  .competition-results {
    .results {
      padding: 0 0.4rem;

      &__title {
        margin-bottom: 0.32rem;
      }

      .item-container {
        gap: 0.08rem;
      }
      .item {
        &__image {
          padding: 0.092rem 0.24rem;
        }

        &__download-area {
          font-size: 0.18rem;
        }
      }
    }
  }
}
@include mobile {
  .competition-results {
    .results {
      padding: 0 0.16rem;

      &__title {
        font-size: 0.24rem;
        margin-bottom: 0.16rem;
      }

      .item-container {
        display: flex;
        flex-direction: column;
        gap: 0.08rem;
      }

      .item {
        padding: 0.24rem;
        gap: 0.24rem;
        &__image {
          padding: 0.084rem 0.21rem;
        }

        &__download-area {
          font-size: 0.18rem;
        }
      }
    }
  }
}
</style>
