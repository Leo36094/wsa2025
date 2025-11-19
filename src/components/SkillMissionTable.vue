<template>
  <div class="skill-mission-table-wrapper">
    <div class="table-container">
      <table class="skill-mission-table">
        <thead>
          <tr>
            <th>{{ tableData.headers.experienceArea }}</th>
            <th>{{ tableData.headers.redemptionArea }}</th>
            <th>{{ tableData.headers.howToParticipate }}</th>
            <th>{{ tableData.headers.howToRedeem }}</th>
            <th>{{ tableData.headers.giftGiveaways }}</th>
          </tr>
        </thead>
        <tbody>
          <!-- Row 1 & 2 (merged first column) -->
          <tr>
            <td :data-label="tableData.headers.experienceArea" rowspan="2" class="merged-cell preserve-line-breaks">
              {{ tableData.items[0].experienceArea }}
            </td>
            <td :data-label="tableData.headers.redemptionArea" rowspan="2" class="merged-cell">
              {{ tableData.items[0].redemptionArea }}
            </td>
            <td :data-label="tableData.headers.howToParticipate" rowspan="2" class="merged-cell">
              {{ tableData.items[0].howToParticipate }}
            </td>
            <td :data-label="tableData.headers.howToRedeem" rowspan="2" class="merged-cell">
              {{ tableData.items[0].howToRedeem }}
            </td>
            <td :data-label="tableData.headers.giftGiveaways" rowspan="2" class="merged-cell">
              {{ tableData.items[0].giftGiveaways }}
            </td>
          </tr>
          <!-- Row 2 (placeholder for rowspan) -->
          <tr class="continuation-row">
          </tr>
          <!-- Row 3 -->
          <tr>
            <td :data-label="tableData.headers.experienceArea"></td>
            <td
              :data-label="tableData.headers.redemptionArea"
              class="preserve-line-breaks"
              colspan="3"
            >
              {{ tableData.items[1].howToRedeem }}
            </td>
            <td
              :data-label="tableData.headers.giftGiveaways"
              class="preserve-line-breaks gift-list"
            >
              {{ tableData.items[1].giftGiveaways }}
            </td>
          </tr>
          <!-- Row 4 -->
          <tr>
            <td :data-label="tableData.headers.experienceArea" rowspan="2" class="merged-cell">
              {{ tableData.items[2].experienceArea }}
            </td>
            <td :data-label="tableData.headers.redemptionArea" rowspan="2" class="merged-cell">
              {{ tableData.items[2].redemptionArea }}
            </td>
            <td :data-label="tableData.headers.howToParticipate" rowspan="2" class="merged-cell">
              {{ tableData.items[2].howToParticipate }}
            </td>
            <td :data-label="tableData.headers.howToRedeem">
              {{ tableData.items[2].howToRedeem }}
            </td>
            <td :data-label="tableData.headers.giftGiveaways">
              {{ tableData.items[2].giftGiveaways }}
            </td>
          </tr>
          <!-- Row 5 -->
          <tr class="continuation-row">
            <td :data-label="tableData.headers.howToRedeem" class="preserve-line-breaks">
              {{ tableData.items[3].howToRedeem }}
            </td>
            <td :data-label="tableData.headers.giftGiveaways" class="preserve-line-breaks">
              {{ tableData.items[3].giftGiveaways }}
            </td>
          </tr>
          <!-- Row 6 -->
          <tr>
            <td :data-label="tableData.headers.experienceArea" class="preserve-line-breaks">
              {{ tableData.items[4].experienceArea }}
            </td>
            <td :data-label="tableData.headers.redemptionArea">
              {{ tableData.items[4].redemptionArea }}
            </td>
            <td :data-label="tableData.headers.howToParticipate" class="preserve-line-breaks">
              {{ tableData.items[4].howToParticipate }}
            </td>
            <td :data-label="tableData.headers.howToRedeem" class="preserve-line-breaks">
              {{ tableData.items[4].howToRedeem }}
            </td>
            <td :data-label="tableData.headers.giftGiveaways">
              {{ tableData.items[4].giftGiveaways }}
            </td>
          </tr>
          <!-- Row 7 -->
          <tr>
            <td :data-label="tableData.headers.experienceArea" class="preserve-line-breaks">
              {{ tableData.items[5].experienceArea }}
            </td>
            <td :data-label="tableData.headers.redemptionArea">
              {{ tableData.items[5].redemptionArea }}
            </td>
            <td :data-label="tableData.headers.howToParticipate" class="preserve-line-breaks">
              {{ tableData.items[5].howToParticipate }}
            </td>
            <td :data-label="tableData.headers.howToRedeem" class="preserve-line-breaks">
              {{ tableData.items[5].howToRedeem }}
            </td>
            <td :data-label="tableData.headers.giftGiveaways">
              {{ tableData.items[5].giftGiveaways }}
            </td>
          </tr>
          <!-- Row 8 -->
          <tr>
            <td :data-label="tableData.headers.experienceArea" class="preserve-line-breaks">
              {{ tableData.items[6].experienceArea }}
            </td>
            <td :data-label="tableData.headers.redemptionArea">
              {{ tableData.items[6].redemptionArea }}
            </td>
            <td :data-label="tableData.headers.howToParticipate" class="preserve-line-breaks">
              {{ tableData.items[6].howToParticipate }}
            </td>
            <td :data-label="tableData.headers.howToRedeem" class="preserve-line-breaks">
              {{ tableData.items[6].howToRedeem }}
            </td>
            <td :data-label="tableData.headers.giftGiveaways">
              {{ tableData.items[6].giftGiveaways }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { skillMissionDataTw, skillMissionDataEn } from '@/data/skillMissionData'

const { locale } = useI18n()

// Data-driven approach with i18n support
const tableData = computed(() => {
  return locale.value === 'en' ? skillMissionDataEn : skillMissionDataTw
})
</script>

<style lang="scss" scoped>
.skill-mission-table-wrapper {
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

.skill-mission-table {
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
      text-align: center;
      font-weight: 700;
      border-bottom: 0.02rem solid #c8e14b;
      white-space: pre-wrap;

      &:nth-child(1) {
        min-width: 1.5rem;
      }

      &:nth-child(2) {
        min-width: 1.5rem;
      }

      &:nth-child(3) {
        min-width: 1.5rem;
      }

      &:nth-child(4) {
        min-width: 2rem;
      }

      &:nth-child(5) {
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

      &.continuation-row {
        td:first-child {
          border-top: none;
        }
      }
    }

    td {
      padding: 0.12rem;
      border: 0.01rem solid #e0e0e0;
      vertical-align: middle;
      text-align: center;

      &.preserve-line-breaks {
        white-space: pre-wrap;
      }

      &.merged-cell {
        vertical-align: middle;
      }

      &.gift-list {
        text-align: left;
        padding-left: 0.2rem;
      }

      &[colspan='3'] {
        text-align: left;
        padding-left: 0.2rem;
      }
    }
  }
}

// Tablet styles
@include tablet {
  .skill-mission-table-wrapper {
    max-width: 100%;
    padding: 0.3rem;
  }

  .skill-mission-table {
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
  .skill-mission-table-wrapper {
    max-width: 100%;
    padding: 0rem;
  }

  .skill-mission-table {
    font-size: 0.12rem;

    thead {
      display: none; // Hide header on mobile for card layout
    }

    tbody {
      tr {
        display: block;
        margin-bottom: 0.16rem;
        border: 0.01rem solid #e0e0e0;
        border-radius: 0.08rem;
        box-shadow: 0 0.02rem 0.04rem rgba(0, 0, 0, 0.1);

        &:last-child {
          margin-bottom: 0;
        }

        &.continuation-row {
          display: none; // Hide continuation rows on mobile
        }
      }

      td {
        display: block;
        padding: 0.08rem 0.12rem;
        border: none;
        border-bottom: 0.01rem solid #f0f0f0;
        text-align: left !important;

        &:last-child {
          border-bottom: none;
        }

        &::before {
          content: attr(data-label);
          font-weight: 700;
          color: #18475b;
          display: block;
          margin-bottom: 0.04rem;
        }

        &:empty {
          display: none;
        }

        &[colspan] {
          padding-left: 0.12rem;
        }
      }
    }
  }
}
</style>

