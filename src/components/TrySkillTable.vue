<template>
  <div class="try-skill-table-wrapper">
    <div class="table-container">
      <table class="try-skill-table">
        <thead>
          <tr>
            <th>{{ tableData.headers.company }}</th>
            <th>{{ tableData.headers.activity }}</th>
            <th>{{ tableData.headers.category }}</th>
            <th>{{ tableData.headers.location }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData.items" :key="item.company">
            <td :data-label="tableData.headers.company">{{ item.company }}</td>
            <td :data-label="tableData.headers.activity">{{ item.activity }}</td>
            <td :data-label="tableData.headers.category">{{ item.category }}</td>
            <td :data-label="tableData.headers.location">{{ item.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { trySkillDataTw, trySkillDataEn } from '@/data/trySkillData'

const { locale } = useI18n()

// Data-driven approach with i18n support
const tableData = computed(() => {
  return locale.value === 'en' ? trySkillDataEn : trySkillDataTw
})
</script>

<style lang="scss" scoped>
.try-skill-table-wrapper {
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

.try-skill-table {
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
      }

      &:nth-child(2) {
        min-width: 2.5rem;
      }

      &:nth-child(3) {
        min-width: 2.5rem;
      }

      &:nth-child(4) {
        min-width: 2rem;
      }

      &:nth-child(5) {
        min-width: 1.5rem;
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
    }
  }
}

// Tablet styles
@include tablet {
  .try-skill-table-wrapper {
    max-width: 100%;
    padding: 0.3rem;
  }

  .try-skill-table {
    font-size: 0.13rem;

    thead th {
      padding: 0.14rem 0.1rem;
    }

    tbody td {
      padding: 0.1rem 0.08rem;
    }
  }
}

// Mobile styles - Card layout
@include mobile {
  .try-skill-table-wrapper {
    max-width: 100%;
    padding: 0rem;
  }

  .table-container {
    height: auto;
    background: transparent;
    box-shadow: none;
  }

  .try-skill-table {
    display: block;
    font-size: 0.12rem;

    thead {
      display: none; // Hide headers on mobile
    }

    tbody {
      display: block;

      tr {
        display: block;
        margin-bottom: 0.16rem;
        border: 0.02rem solid rgba(200, 225, 75, 0.3);
        border-radius: 0.08rem;
        padding: 0.16rem;
      }

      td {
        display: block;
        text-align: left;
        padding: 0.08rem 0;
        border: none;

        &:before {
          content: attr(data-label);
          font-weight: 700;
          display: inline-block;
          width: 1rem;
          color: #18475b;
        }

        &:first-child {
          text-align: left;
          font-size: 0.14rem;
          font-weight: 700;
          color: #18475b;
          margin-bottom: 0.08rem;
          padding-bottom: 0.08rem;
          border-bottom: 0.02rem solid #c8e14b;

          &:before {
            width: auto;
            margin-right: 0.04rem;
          }
        }
      }
    }
  }
}
</style>

