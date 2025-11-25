<template>
  <div class="country-by-skill-table-wrapper">
    <h2 class="table-title">{{ tableData.title }}</h2>

    <!-- Time Information Card -->
    <div class="time-info-card">
      <div class="time-info-item">
        <span class="time-label">{{ $t('page_tabs.country_by_skill_date') }}</span>
        <span class="time-value">{{ tableData.timeInfo.competitionDate }}</span>
      </div>
      <div class="time-info-divider"></div>
      <div class="time-info-item">
        <span class="time-label">{{ $t('page_tabs.country_by_skill_start_time') }}</span>
        <span class="time-value">{{ tableData.timeInfo.startTime }}</span>
      </div>
      <div class="time-info-divider"></div>
      <div class="time-info-item">
        <span class="time-label">{{ $t('page_tabs.country_by_skill_break_time') }}</span>
        <span class="time-value">{{ tableData.timeInfo.breakTime }}</span>
      </div>
      <div class="time-info-divider"></div>
      <div class="time-info-item">
        <span class="time-label">{{ $t('page_tabs.country_by_skill_end_time') }}</span>
        <span class="time-value">{{ tableData.timeInfo.endTime }}</span>
      </div>
    </div>

    <!-- Schedule Button -->
    <div class="schedule-button-wrapper">
      <router-link to="/competition#schedule" class="schedule-button">
        {{ $t('page_tabs.country_by_skill_view_schedule') }}
      </router-link>
    </div>

    <div class="table-container">
      <table class="country-by-skill-table">
        <thead>
          <tr>
            <th>{{ tableData.headers.code }}</th>
            <th>{{ tableData.headers.skill }}</th>
            <th>{{ tableData.headers.memberCountries }}</th>
            <th>{{ tableData.headers.nonMemberCountries }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData.items" :key="item.code">
            <td :data-label="tableData.headers.code">{{ item.code }}</td>
            <td :data-label="tableData.headers.skill">{{ item.skill }}</td>
            <td :data-label="tableData.headers.memberCountries">{{ item.memberCountries }}</td>
            <td :data-label="tableData.headers.nonMemberCountries">{{ item.nonMemberCountries }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { countryBySkillDataTw, countryBySkillDataEn } from '@/data/countryBySkill'

const { locale } = useI18n()

// Data-driven approach with i18n support
const tableData = computed(() => {
  return locale.value === 'en' ? countryBySkillDataEn : countryBySkillDataTw
})
</script>

<style lang="scss" scoped>
.country-by-skill-table-wrapper {
  width: 100%;
  max-width: 12rem; // 1200px
  margin: 0 auto;
  padding: 0.4rem;
}

.table-title {
  font-size: 0.28rem;
  font-weight: 700;
  color: #18475b;
  text-align: center;
  margin-bottom: 0.24rem;
}

.time-info-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.24rem;
  padding: 0.2rem 0.24rem;
  margin-bottom: 0.24rem;
  background: linear-gradient(135deg, #18475b 0%, #2a5f75 100%);
  border-radius: 0.08rem;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.1);
}

.time-info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.08rem;
}

.time-label {
  font-size: 0.14rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  white-space: nowrap;
}

.time-value {
  font-size: 0.18rem;
  color: #c8e14b;
  font-weight: 700;
  white-space: nowrap;
}

.time-info-divider {
  width: 0.01rem;
  height: 0.4rem;
  background: rgba(255, 255, 255, 0.2);
}

.schedule-button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 0.24rem;
}

.schedule-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.12rem 0.32rem;
  background: linear-gradient(135deg, #c8e14b 0%, #a8c639 100%);
  color: #18475b;
  font-size: 0.16rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 0.08rem;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #a8c639 0%, #8ea62f 100%);
    box-shadow: 0 0.04rem 0.12rem rgba(0, 0, 0, 0.2);
    transform: translateY(-0.02rem);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0.02rem 0.06rem rgba(0, 0, 0, 0.15);
  }
}

.table-container {
  width: 100%;
  height: auto;
  overflow: auto;
  background: #fff;
  border-radius: 0.08rem;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.1);

  // Custom scrollbar styling
  &::-webkit-scrollbar {
    width: 0.08rem;
    height: 0.08rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.04rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #c8e14b;
    border-radius: 0.04rem;

    &:hover {
      background: #b5ca3f;
    }
  }
}

.country-by-skill-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.16rem;
  color: #333;

  thead {
    position: sticky;
    top: 0;
    background: #18475b;
    color: #fff;
    z-index: 10;

    th {
      padding: 0.16rem 0.12rem;
      text-align: left;
      font-weight: 700;
      border-bottom: 0.02rem solid #c8e14b;
      white-space: nowrap;

      &:first-child {
        width: 0.8rem;
        text-align: center;
      }

      &:nth-child(2) {
        min-width: 2rem;
      }

      &:nth-child(3) {
        min-width: 3rem;
      }

      &:nth-child(4) {
        min-width: 2.5rem;
      }
    }
  }

  tbody {
    tr {
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #e8f5e9;
      }
    }

    td {
      padding: 0.12rem;
      border-bottom: 0.01rem solid #e0e0e0;
      vertical-align: top;

      &:first-child {
        text-align: center;
        font-weight: 600;
        color: #18475b;
      }

      &:nth-child(2) {
        font-weight: 600;
      }

      &:nth-child(3),
      &:nth-child(4) {
        line-height: 1.6;
      }
    }
  }
}

// Tablet styles
@include tablet {
  .country-by-skill-table-wrapper {
    max-width: 100%;
    padding: 0.3rem;
  }

  .table-title {
    font-size: 0.24rem;
    margin-bottom: 0.2rem;
  }

  .time-info-card {
    gap: 0.16rem;
    padding: 0.16rem 0.2rem;
  }

  .time-label {
    font-size: 0.13rem;
  }

  .time-value {
    font-size: 0.16rem;
  }

  .time-info-divider {
    height: 0.36rem;
  }

  .schedule-button-wrapper {
    margin-bottom: 0.2rem;
  }

  .schedule-button {
    padding: 0.1rem 0.28rem;
    font-size: 0.15rem;
  }

  .country-by-skill-table {
    font-size: 0.14rem;

    thead th {
      padding: 0.14rem 0.1rem;
    }

    tbody td {
      padding: 0.1rem 0.08rem;
    }
  }
}

// Mobile styles - Keep table format with horizontal scroll
@include mobile {
  .country-by-skill-table-wrapper {
    max-width: 100%;
    padding: 0.16rem;
  }

  .table-title {
    font-size: 0.2rem;
    margin-bottom: 0.16rem;
  }

  .time-info-card {
    flex-direction: column;
    gap: 0.12rem;
    padding: 0.16rem;
  }

  .time-label {
    font-size: 0.12rem;
  }

  .time-value {
    font-size: 0.15rem;
  }

  .time-info-divider {
    width: 100%;
    height: 0.01rem;
  }

  .schedule-button-wrapper {
    margin-bottom: 0.16rem;
  }

  .schedule-button {
    padding: 0.1rem 0.24rem;
    font-size: 0.14rem;
  }

  .table-container {
    // Enable horizontal scrolling
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  }

  .country-by-skill-table {
    font-size: 0.13rem;
    min-width: 7rem; // Minimum width to ensure table doesn't get too compressed

    thead th {
      padding: 0.12rem 0.08rem;
      font-size: 0.13rem;
    }

    tbody td {
      padding: 0.1rem 0.08rem;
    }
  }
}
</style>

