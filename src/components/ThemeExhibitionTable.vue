<template>
  <div class="theme-exhibition-table-wrapper">
    <div class="table-container">
      <table class="theme-exhibition-table">
        <thead>
          <tr>
            <th>{{ tableData.headers.number }}</th>
            <th>{{ tableData.headers.company }}</th>
            <th>{{ tableData.headers.displayItem }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData.items" :key="item.number">
            <td :data-label="tableData.headers.number">{{ item.number }}</td>
            <td :data-label="tableData.headers.company">{{ item.company }}</td>
            <td :data-label="tableData.headers.displayItem">{{ item.displayItem }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { themeExhibitionDataTw, themeExhibitionDataEn } from '@/data/themeExhibitionData'

const { locale } = useI18n()

// Data-driven approach with i18n support
const tableData = computed(() => {
  return locale.value === 'en' ? themeExhibitionDataEn : themeExhibitionDataTw
})
</script>

<style lang="scss" scoped>
.theme-exhibition-table-wrapper {
  width: 100%;
  max-width: 12rem; // 1200px
  margin: 0 auto;
  padding: 0.4rem;
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

.theme-exhibition-table {
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
        width: 0.6rem;
        text-align: center;
      }

      &:nth-child(2) {
        min-width: 1.5rem;
      }

      &:nth-child(3) {
        min-width: 3rem;
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
      }

      &:nth-child(2) {
        font-weight: 600;
      }
    }
  }
}

// Tablet styles
@include tablet {
  .theme-exhibition-table-wrapper {
    max-width: 100%;
    padding: 0.3rem;
  }

  .theme-exhibition-table {
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
  .theme-exhibition-table-wrapper {
    max-width: 100%;
    padding: 0.16rem;
  }

  .table-container {
    // Enable horizontal scrolling
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  }

  .theme-exhibition-table {
    font-size: 0.13rem;
    min-width: 6rem; // Minimum width to ensure table doesn't get too compressed

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

