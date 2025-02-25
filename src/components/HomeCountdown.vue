<template>
  <section
    class="home-countdown"
    role="status"
    :aria-label="$t('home.countdown_title')"
    tabindex="0"
  >
    <div class="countdown-container">
      <h2 class="countdown-title">
        {{ $t('home.countdown_title') }}
      </h2>
      <div class="countdown-date" :aria-label="$t('home.banner_date')">
        {{ $t('home.banner_date') }}
      </div>
      <div class="countdown-cubes" aria-live="polite" tabindex="0">
        <div class="days">
          <div class="cubes" role="group" :aria-label="$t('home.countdown_days')" tabindex="0">
            <div
              class="cube"
              v-for="(day, idx) in remainDays"
              :key="idx"
              aria-hidden="true"
              tabindex="0"
            >
              {{ day }}
            </div>
          </div>
          <p id="days-label">{{ $t('home.countdown_days') }}</p>
        </div>
        <div class="hours">
          <div class="cubes" role="group" :aria-label="$t('home.countdown_hours')" tabindex="0">
            <div
              class="cube"
              v-for="(hour, idx) in remainHours"
              :key="idx"
              aria-hidden="true"
              tabindex="0"
            >
              {{ hour }}
            </div>
          </div>
          <p id="hours-label">{{ $t('home.countdown_hours') }}</p>
        </div>
      </div>
      <div class="visually-hidden" role="status">
        {{ $t('home.countdown_title') }}: {{ remainDays.join('') }} {{ $t('home.countdown_days') }}
        {{ remainHours.join('') }} {{ $t('home.countdown_hours') }}
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'

const remainDays = ref(['0'])
const remainHours = ref(['0'])
const timeInterval = ref<null | ReturnType<typeof setInterval>>(null)

function updateTimeRemaining() {
  const target = dayjs('2025-11-27')
  const now = dayjs()
  const diff = target.diff(now, 'day')
  const hours = target.diff(now, 'hour') % 24
  remainDays.value = diff.toString().split('')
  remainHours.value = hours.toString().split('')
}
updateTimeRemaining()
onMounted(() => {
  timeInterval.value = setInterval(updateTimeRemaining, 1000 * 60 * 60)
})

onUnmounted(() => {
  if (timeInterval.value) {
    clearInterval(timeInterval.value)
  }
})
</script>
<style lang="scss" scoped>
.home-countdown {
  padding: 1.6rem 0;
  @include flexCenter;
  border-radius: 0.18rem;
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .countdown-container {
    border-radius: 0.1rem;
    background: radial-gradient(59.83% 274.2% at 50% 50%, #ffffff 0%, #c8e14b 100%);
    width: 11.2rem;
    margin: 0 auto;
    padding: 0.48rem 0.96rem;
    .countdown-title {
      font-size: 0.36rem;
      font-weight: 700;
      color: #000;
      margin-bottom: 0.16rem;
      @include flexCenter(row);
    }
    .countdown-date {
      font-size: 0.18rem;
      color: #000;
      font-weight: 700;
      margin-bottom: 0.32rem;
      text-align: center;
    }
    .countdown-cubes {
      @include flexCenter(row);
      margin-bottom: 0.32rem;
      font-weight: 700;
    }
    .hours,
    .days {
      @include flexCenter(column);
    }
    .hours {
      margin-left: 0.32rem;
    }
    .cubes {
      @include flexCenter(row);
      .cube {
        @include flexCenter(column);
        width: 0.64rem;
        height: 0.9rem;
        font-size: 0.48rem;
        background: #000;
        border-radius: 0.08rem;
        margin-right: 0.04rem;
        font-weight: 700;
        color: #fff;
      }
    }
  }
}
@include tablet {
  .home-countdown {
    padding: 0.8rem 0;
    .countdown-container {
      width: 6rem;
      padding: 0.32rem;
    }
  }
}
@include mobile {
  .home-countdown {
    padding: 0.4rem 0;
    .countdown-container {
      width: 2.72rem;
      padding: 0.16rem;
      .countdown-title {
        font-size: 0.32rem;
      }
      .countdown-cubes {
        @include flexCenter(column);
        &:first-child {
          margin-bottom: 0.24rem;
        }
        .hours {
          margin-left: 0;
          margin-top: 0.24rem;
        }
      }
    }
  }
}
</style>
