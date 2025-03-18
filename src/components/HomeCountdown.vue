<template>
  <section
    class="home-countdown"
    role="status"
    :aria-label="$t('home.countdown_title')"
    tabindex="0"
  >
    <div data-aos="fade" class="club-decoration" aria-hidden="true"></div>
    <div class="countdown-container">
      <h2
        data-aos="fade-right"
        data-aos-duration="500"
        :class="['countdown-title', { [locale]: locale }]"
      >
        {{ $t('home.countdown_title') }}
        <span :class="['countdown-event', { [locale]: locale }]">
          <span class="count-event">{{ $t('home.countdown_event') }}</span>
          <span class="count-supplement">{{ $t('home.countdown_supplement') }}</span>
        </span>
      </h2>
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="500"
        class="countdown-cubes"
        aria-live="polite"
        tabindex="0"
      >
        <div class="days">
          <div class="cubes" role="group" :aria-label="$t('home.countdown_days')" tabindex="0">
            <div class="cube" v-for="(day, idx) in remainDays" :key="idx" tabindex="0">
              {{ day }}
            </div>
          </div>
          <p class="cube-label" id="days-label">{{ $t('home.countdown_days') }}</p>
        </div>
        <div class="semicolon">:</div>
        <div class="hours">
          <div class="cubes" role="group" :aria-label="$t('home.countdown_hours')" tabindex="0">
            <div class="cube" v-for="(hour, idx) in remainHours" :key="idx" tabindex="0">
              {{ hour }}
            </div>
          </div>
          <p class="cube-label" id="hours-label">{{ $t('home.countdown_hours') }}</p>
        </div>
        <div class="semicolon">:</div>
        <div class="mins">
          <div class="cubes" role="group" :aria-label="$t('home.countdown_mins')" tabindex="0">
            <div class="cube" v-for="(min, idx) in remainMins" :key="idx" tabindex="0">
              {{ min }}
            </div>
          </div>
          <p class="cube-label" id="mins-label">{{ $t('home.countdown_mins') }}</p>
        </div>
        <div class="semicolon">:</div>
        <div class="secs">
          <div class="cubes" role="group" :aria-label="$t('home.countdown_secs')" tabindex="0">
            <div class="cube" v-for="(sec, idx) in remainSecs" :key="idx" tabindex="0">
              {{ sec }}
            </div>
          </div>
          <p class="cube-label" id="secs-label">{{ $t('home.countdown_secs') }}</p>
        </div>
      </div>
      <div class="visually-hidden" role="status">
        {{ $t('home.countdown_title') }}: {{ remainDays.join('') }} {{ $t('home.countdown_days') }}
        {{ remainHours.join('') }} {{ $t('home.countdown_hours') }} {{ remainMins.join('') }}
        {{ $t('home.countdown_mins') }} {{ remainSecs.join('') }} {{ $t('home.countdown_secs') }}
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })
const remainDays = ref(['0'])
const remainHours = ref(['0'])
const remainMins = ref(['0'])
const remainSecs = ref(['0'])
const timeInterval = ref<null | ReturnType<typeof setInterval>>(null)

function updateTimeRemaining() {
  const target = dayjs('2025-11-27')
  const now = dayjs()
  const diff = target.diff(now, 'day')
  const hours = target.diff(now, 'hour') % 24
  const mins = target.diff(now, 'minute') % 60
  const secs = target.diff(now, 'second') % 60

  remainDays.value = diff.toString().split('')
  remainHours.value = hours.toString().padStart(2, '0').split('')
  remainMins.value = mins.toString().padStart(2, '0').split('')
  remainSecs.value = secs.toString().padStart(2, '0').split('')
}
updateTimeRemaining()
onMounted(() => {
  timeInterval.value = setInterval(updateTimeRemaining, 1000)
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
  position: relative;
  overflow: hidden;
  .club-decoration {
    position: absolute;
    top: -1.5rem;
    right: -2rem;
    @include bgCenter(contain);
    background-image: url('/images/club_empty_green.png');
    width: 3.5rem;
    height: 3.5rem;
    animation: rotate 10s linear infinite;
  }
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
    @include bgCenter(cover);
    width: 11.8rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .countdown-title {
      font-size: $title-font-size;
      font-weight: 700;
      color: #000;
      margin-bottom: 0.16rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 0.56rem;
      .countdown-event {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        &.tw {
          flex-direction: column;
        }
        .count-event {
          font-size: $desc-font-size;
          margin-top: 0.16rem;
        }
        .count-supplement {
          margin-top: 0.16rem;
          font-size: $desc-font-size;
        }
      }
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
      align-items: flex-start;
      font-weight: 700;
    }
    .cube-label {
      font-size: $desc-font-size;
    }
    .hours,
    .days,
    .mins,
    .secs {
      @include flexCenter(column);
    }
    .semicolon {
      margin-left: 0.16rem;
      margin-right: 0.16rem;
      height: 0.9rem;
      font-size: $title-font-size;
      @include flexCenter;
      font-weight: 700;
      color: #000;
    }
    .cubes {
      @include flexCenter(row);
      .cube {
        @include flexCenter(column);
        width: 0.64rem;
        height: 0.9rem;
        font-size: $title-font-size;
        background: linear-gradient(180deg, #484b3b 0%, #1c1e15 100%);
        border-radius: 0.08rem;
        margin-right: 0.04rem;
        margin-bottom: 0.08rem;
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
      padding: 0 0.5rem;
      flex-direction: column;
      margin-bottom: 0.24rem;
      .countdown-title {
        align-items: center;
        justify-content: center;
        margin-right: 0;
        .countdown-event {
          align-items: center;
          justify-content: center;
          .count-event,
          .count-supplement {
            margin: 0;
          }
        }
      }
      .semicolon {
        margin-left: 0.08rem;
        margin-right: 0.08rem;
        font-size: $title-font-size;
        font-weight: 700;
        color: #000;
      }
    }
  }
}
@include mobile {
  .home-countdown {
    padding: 0.4rem 0;
    .club-decoration {
      width: 1.5rem;
      height: 1.5rem;
      top: -0.5rem;
      right: -1rem;
    }
    .countdown-container {
      width: 3.04rem;
      padding: 0.16rem;
      margin-bottom: 0.16rem;
      .countdown-title {
        font-size: $title-font-size-m;
        .countdown-event {
          .count-event {
            font-size: $desc-font-size-m;
          }
          .count-supplement {
            font-size: $desc-font-size-m;
          }
        }
      }

      .countdown-cubes {
        @include flexCenter(column);
        .cube {
          margin-bottom: 0;
          font-size: $title-font-size-m;
          height: 0.76rem;
        }
        .cube-label {
          font-size: $desc-font-size-m;
        }
        .semicolon {
          display: none;
        }

        .mins,
        .secs,
        .hours {
          margin-left: 0;
          margin-top: 0.16rem;
        }
      }
    }
  }
}
</style>
