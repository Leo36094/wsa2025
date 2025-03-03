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
            <p class="activity" v-html="schedule.activity"></p>
          </div>
        </div>
        <ul class="schedule__note">
          <li v-for="(note, idx) in notes" :key="idx" v-html="note"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const schedules = computed(() => {
  return Array.from({ length: 7 }, (_, i) => {
    return {
      date: t('competition.schedule_date' + (i + 1)).split(' '),
      code: t('competition.schedule_code' + (i + 1)),
      activity: t('competition.schedule_activity' + (i + 1)),
    }
  })
})
const notes = computed(() => {
  return [t('competition.schedule_note1'), t('competition.schedule_note2')]
})
</script>
<style lang="scss" scoped>
.competition-schedule {
  .schedule-container {
    @include withContainer;
    padding-bottom: 1.2rem;
  }
  .schedule {
    padding: 1.2rem;
    width: 100%;
    min-height: 12rem;
    padding-top: 0.94rem;
    background: #fafcf2;
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
        color: $black-primary;
        @include flexCenter;
        justify-content: flex-start;
        border-radius: 0.1rem;
        margin-bottom: 0.08rem;
        border: 1px solid #899ca4;
      }
      &--item {
        height: 0.95rem;
        backdrop-filter: blur(0.6rem);
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 0.1rem;
        display: flex;
        align-items: center;
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7) {
          background: linear-gradient(
            90deg,
            rgba(251, 119, 60, 0.2) 0%,
            rgba(0, 145, 229, 0.2) 100%
          );
        }
      }
      &__col {
        line-height: normal;
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
      color: $black-primary;
      line-height: normal;
      &__month {
        font-size: 0.16rem;
      }
      &__num {
        font-size: 0.36rem;
        font-weight: 600;
      }
      &__day {
        font-size: 0.16rem;
      }
    }
    .code {
      font-size: 0.28rem;
    }
    .activity {
      font-size: 0.28rem;
    }
    .schedule__note {
      font-size: 0.16rem;
      color: $black-primary;
      list-style: disc;
      padding-left: 0.2rem;
      margin-top: 0.4rem;
      li {
        list-style-type: disc;
      }
    }
  }
}
@include tablet {
  .competition-schedule {
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
    .schedule-container {
      padding-bottom: 0.8rem;
    }
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
