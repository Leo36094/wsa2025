<template>
  <div class="country-by-skill-table-wrapper">
    <h2 class="table-title">{{ tableData.title }}</h2>
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

