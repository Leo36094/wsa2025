<template>
  <div class="competition">
    <div class="competition-banner" @click="switchSlide">
      <Transition name="fade" mode="out-in">
        <div class="slide first-slide" v-if="currentSlide === 0">
          <h1 class="first-slide__title">
            {{ $t('competition.title') }}
          </h1>
          <div class="first-slide__photos">
            <div
              class="photo-item"
              v-for="item in 3"
              :key="item"
              :style="{ backgroundImage: `url('https://fakeimg.pl/447x251/')` }"
            ></div>
          </div>
        </div>
        <div class="slide second-slide" v-else>
          <div class="slide-gallery">
            <div
              class="photo-item"
              v-for="item in 3"
              :key="item"
              :style="{ backgroundImage: `url('https://fakeimg.pl/480x330/')` }"
            ></div>
          </div>
          <div class="competition__about">
            <header class="competition__about-header">
              <h4>{{ $t('competition.title_tag') }}</h4>
              <h1>{{ $t('competition.title') }}</h1>
            </header>
            <p class="competition__about-desc">{{ $t('competition.desc') }}</p>
          </div>
          <div class="slide-gallery">
            <div
              class="photo-item"
              v-for="item in 3"
              :key="item"
              :style="{ backgroundImage: `url('https://fakeimg.pl/480x330/')` }"
            ></div>
          </div>
        </div>
      </Transition>
    </div>
    <div class="competition-schedule">
      <div class="schedule-container">
        <div class="schedule">
          <h2 class="schedule__title">
            {{ $t('competition.schedule_title') }}
          </h2>
          <div class="bar bar--header">
            <div class="bar__col">{{ $t('competition.schedule_date') }}</div>
            <div class="bar__col">{{ $t('competition.schedule_code') }}</div>
            <div class="bar__col">{{ $t('competition.schedule_activity') }}</div>
          </div>
          <div v-for="item in 8" class="bar bar--item" :key="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const currentSlide = ref(0)

function switchSlide() {
  currentSlide.value = currentSlide.value === 0 ? 1 : 0
}
</script>
<style lang="scss" scoped>
.competition {
  padding-top: 0.76rem;
  .slide {
    height: 11.6rem;
  }
  .first-slide {
    &__title {
      font-size: 0.88rem;
      margin: 1.45rem auto 1.13rem auto;
      text-align: center;
    }
    &__photos {
      @include withContainer;
      padding: 0 0.32rem;
      @include flexCenter;
      justify-content: space-between;
      .photo-item {
        @include bgCenter;
        width: 4.47rem;
        height: 2.51rem;
      }
    }
  }
  .second-slide {
    margin-top: 0.95rem;
    .slide-gallery {
      @include flexCenter;
    }
    .photo-item {
      @include bgCenter;
      width: 4.8rem;
      width: 33.3%;
      height: 3.3rem;
    }
  }
  &__about {
    padding-left: 0.64rem;
    padding-right: 1.23rem;
    margin-top: 0.32rem;
    margin-bottom: 0.7rem;
    display: flex;
    align-items: center;
    .competition__about-header {
      @include flexCenter(column);
      align-items: flex-start;
      font-weight: 700;
      margin-right: 1.5rem;
      h4 {
        font-size: 0.48rem;
      }
      h1 {
        font-size: 0.88rem;
      }
    }
    .competition__about-desc {
      font-size: 0.16rem;
      width: 5.66rem;
    }
  }

  .competition-schedule {
    margin-bottom: 2.17rem;
    .schedule-container {
      @include withContainer;
      padding: 0 0.53rem;
    }
    .schedule {
      width: 100%;
      min-height: 12rem;
      padding-top: 0.94rem;
      background: #00000033;
      border-radius: 1.37rem;
      padding: 0.94rem 1.38rem 0.81rem 1.38rem;
      &__title {
        font-size: 0.48rem;
        font-weight: 700;
        margin-bottom: 0.94rem;
        text-align: center;
      }
      .bar {
        width: 100%;
        padding: 0.16rem 0.24rem;
        margin-bottom: 0.08rem;
        &--header {
          font-size: 0.16rem;
          color: #9fa7a7;
          @include flexCenter;
          justify-content: flex-start;
          background-color: #1f4352;
          border-top-left-radius: 0.1rem;
          border-top-right-radius: 0.1rem;
          border-bottom: 1px solid #586566;
        }
        &--item {
          height: 0.95rem;

          border-radius: 0.1rem;
          border: 1px solid rgba(#fff, 0.2);
        }
        &__col {
          &:first-child {
            flex: 0.2;
          }
          &:nth-child(2) {
            flex: 0.2;
          }
          &:last-child {
            flex: 0.5;
          }
        }
      }
    }
  }
}
</style>
