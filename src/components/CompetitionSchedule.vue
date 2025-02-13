<template>
  <div class="competition-schedule" id="schedule">
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
        <div v-for="(schedule, idx) in schedules" class="bar bar--item" :key="idx">
          <div class="bar__col">
            <div class="date">
              <div class="date__month">{{ schedule.date[0] }}</div>
              <div class="date__num">{{ schedule.date[1] }}</div>
              <div class="date__day">{{ schedule.date[2] }}</div>
            </div>
          </div>
          <div class="bar__col">
            <p class="code">{{ schedule.code }}</p>
          </div>
          <div class="bar__col">
            <p class="activity">
              {{ schedule.activity }}
            </p>
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

const schedules = computed(() => {
  return Array.from({ length: 8 }, (_, i) => {
    return {
      date: t('competition.schedule_date' + (i + 1)).split(' '),
      code: t('competition.schedule_code' + (i + 1)),
      activity: t('competition.schedule_activity' + (i + 1)),
    }
  })
})
</script>
<style lang="scss" scoped>
.competition-schedule {
  margin-bottom: 2.17rem;
  .schedule-container {
    @include withContainer;
  }
  .schedule {
    padding: 1.2rem;
    width: 100%;
    min-height: 12rem;
    padding-top: 0.94rem;
    background: #00000033;
    border-radius: 0.4rem;
    &__title {
      font-size: 0.48rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      text-align: center;
    }
    .bar {
      width: 100%;
      padding: 0.16rem 0.24rem;
      &:not(:last-child) {
        margin-bottom: 0.08rem;
      }
      &--header {
        font-size: 0.16rem;
        /* color: #9fa7a7; */
        color: #fff;
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
        display: flex;
        align-items: center;
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8) {
          background: linear-gradient(
            90deg,
            rgba(200, 225, 75, 0.15) 0%,
            rgba(235, 54, 120, 0.15) 100%
          );
        }
      }
      &__col {
        &:first-child {
          flex: 0.2;
        }
        &:nth-child(2) {
          flex: 0.2;
        }
        &:last-child {
          flex: 0.8;
        }
      }
    }
    .date {
      @include flexCenter(column);
      align-items: flex-start;
      color: #fff;
      &__month {
        font-size: 0.16rem;
      }
      &__num {
        font-size: 0.36rem;

        font-weight: 600;
      }
      &__day {
        color: #899ca4;
        font-size: 0.12rem;
      }
    }
    .code {
      font-size: 0.28rem;
    }
    .activity {
      font-size: 0.28rem;
    }
  }
}
@include tablet {
  .competition-schedule {
    margin-bottom: 1.6rem;
    .schedule {
      padding: 0.4rem;
      .schedule__title {
        font-size: 0.36rem;
      }
      .bar--item {
        height: auto;
      }
      .date {
        line-height: normal;
      }
      .activity {
        line-height: normal;
        font-weight: bold;
      }
    }
  }
}
@include mobile {
  .competition-schedule {
    .schedule {
      padding: 0.4rem 0.24rem;
      min-height: 100%;
      .schedule__title {
        font-size: 0.28rem;
        margin-bottom: 0.16rem;
      }
      .bar.bar--header {
        font-size: 0.12rem;
        padding: 0.08rem;
      }
      .bar--item {
        padding: 0.08rem;
      }
      .date {
        &__month {
          font-size: 0.12rem;
        }
        &__num {
          font-size: 0.16rem;
        }
        &__day {
          font-size: 0.12rem;
        }
      }
      .code,
      .activity {
        font-size: 0.16rem;
      }
    }
  }
}
</style>
