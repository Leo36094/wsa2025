<template>
  <div class="try-skill-tables-wrapper">
    <div
      v-for="tableGroup in tablesData"
      :key="tableGroup.tableNumber"
      class="table-group"
    >
      <!-- Redeem image before specific tables -->
      <div
        v-if="shouldShowImage(tableGroup.tableNumber)"
        class="redeem-image-container"
        @click="showLightbox(getImageIndex(tableGroup.tableNumber))"
      >
        <img
          :src="getRedeemImage(tableGroup.tableNumber)"
          :alt="`Redeem information ${getImageIndex(tableGroup.tableNumber) + 1}`"
        />
      </div>

      <h3 class="table-title">Try a Skill {{ tableGroup.tableNumber }}</h3>
      <div class="table-container">
        <table class="try-skill-table">
          <thead>
            <tr>
              <th>{{ headers.companyName }}</th>
              <th>{{ headers.experienceActivity }}</th>
              <th>{{ headers.location }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableGroup.items" :key="index">
              <td :data-label="headers.companyName">{{ item.companyName }}</td>
              <td :data-label="headers.experienceActivity">{{ item.experienceActivity }}</td>
              <td :data-label="headers.location">{{ item.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Lightbox -->
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="lightboxImages"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEasyLightbox } from 'vue-easy-lightbox'
import { trySkillTablesDataTw, trySkillTablesDataEn, trySkillTableHeaders } from '@/data/trySkillTableData'

const { locale } = useI18n()

// Data-driven approach with i18n support
const tablesData = computed(() => {
  return locale.value === 'en' ? trySkillTablesDataEn : trySkillTablesDataTw
})

const headers = computed(() => {
  return locale.value === 'en' ? trySkillTableHeaders.en : trySkillTableHeaders.zh
})

// Redeem images - i18n based image selection
const redeemImages = computed(() => {
  return [
    {
      tableNumber: 1,
      src: `${import.meta.env.BASE_URL}images/host/trySkill/skill-map1.jpg`,
      alt: 'Redeem information 1',
    },
    {
      tableNumber: 4,
      src: `${import.meta.env.BASE_URL}images/host/trySkill/skill-map2.jpg`,
      alt: 'Redeem information 2',
    },
    {
      tableNumber: 5,
      src: `${import.meta.env.BASE_URL}images/host/trySkill/skill-map3.jpg`,
      alt: 'Redeem information 3',
    },
  ]
})

// Check if image should be shown after this table
const shouldShowImage = (tableNumber: number) => {
  return redeemImages.value.some(img => img.tableNumber === tableNumber)
}

// Get image source for specific table
const getRedeemImage = (tableNumber: number) => {
  return redeemImages.value.find(img => img.tableNumber === tableNumber)?.src || ''
}

// Get image index in the lightbox array
const getImageIndex = (tableNumber: number) => {
  return redeemImages.value.findIndex(img => img.tableNumber === tableNumber)
}

// Lightbox images array for vue-easy-lightbox
const lightboxImages = computed(() => redeemImages.value.map(img => img.src))

// Setup lightbox
const {
  show,
  onHide,
  visibleRef,
  indexRef
} = useEasyLightbox({
  imgs: lightboxImages.value,
  initIndex: 0
})

// Show lightbox with specific image index
const showLightbox = (index: number) => {
  indexRef.value = index
  show()
}
</script>

<style lang="scss" scoped>
.try-skill-tables-wrapper {
  width: 100%;
  max-width: 12rem;
  margin: 0 auto;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.table-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.16rem;
}

.redeem-image-container {
  width: 100%;
  margin-bottom: 0.24rem;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-0.08rem);

    img {
      box-shadow: 0 0.08rem 0.24rem rgba(0, 0, 0, 0.15);
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 0.08rem;
    box-shadow: 0 0.04rem 0.16rem rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
}

.table-title {
  font-size: 0.24rem;
  font-weight: 700;
  color: #18475b;
  margin: 0;
  padding: 0.16rem 0;
}

.table-container {
  width: 100%;
  overflow-x: auto;
  background: #fff;
  border-radius: 0.08rem;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.1);
  position: relative;

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
        min-width: 1.4rem;
      }

      &:nth-child(2) {
        min-width: 3rem;
      }

      &:nth-child(3) {
        min-width: 1.8rem;
      }
    }
  }

  tbody {
    tr {
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #e8f5e9;
      }

      &:last-child td {
        border-bottom: none;
      }
    }

    td {
      padding: 0.12rem;
      border-bottom: 0.01rem solid #e0e0e0;
      vertical-align: top;

      &:first-child {
        font-weight: 600;
      }
    }
  }
}

// Tablet styles
@include tablet {
  .try-skill-tables-wrapper {
    max-width: 100%;
    padding: 0.3rem;
    gap: 0.3rem;
  }

  .table-title {
    font-size: 0.22rem;
    padding: 0.12rem 0;
  }

  .redeem-image-container {
    margin-bottom: 0.2rem;

    img {
      border-radius: 0.06rem;
    }
  }

  .try-skill-table {
    font-size: 0.14rem;

    thead th {
      padding: 0.14rem 0.1rem;

      &:first-child {
        position: sticky;
        left: 0;
        background: #18475b;
        z-index: 11;
        max-width: 1.4rem;
        box-shadow: 0.02rem 0 0.04rem rgba(0, 0, 0, 0.1);
      }
    }

    tbody td {
      padding: 0.1rem 0.08rem;

      &:first-child {
        position: sticky;
        left: 0;
        background: #fff;
        z-index: 9;
        max-width: 1.4rem;
        box-shadow: 0.02rem 0 0.04rem rgba(0, 0, 0, 0.1);
      }
    }

    tbody tr:hover td:first-child {
      background-color: #e8f5e9;
    }
  }
}

// Mobile styles
@include mobile {
  .try-skill-tables-wrapper {
    max-width: 100%;
    padding: 0.16rem;
    gap: 0.24rem;
  }

  .table-title {
    font-size: 0.18rem;
    padding: 0.08rem 0;
  }

  .redeem-image-container {
    margin-bottom: 0.16rem;

    img {
      border-radius: 0.04rem;
    }
  }

  .table-container {
    border-radius: 0.06rem;
  }

  .try-skill-table {
    font-size: 0.12rem;

    thead th {
      padding: 0.12rem 0.08rem;
      font-size: 0.12rem;

      &:first-child {
        position: sticky;
        left: 0;
        background: #18475b;
        z-index: 11;
        max-width: 1.4rem;
        box-shadow: 0.02rem 0 0.04rem rgba(0, 0, 0, 0.1);
      }
    }

    tbody td {
      padding: 0.1rem 0.08rem;
      font-size: 0.12rem;

      &:first-child {
        position: sticky;
        left: 0;
        background: #fff;
        z-index: 9;
        max-width: 1.4rem;
        box-shadow: 0.02rem 0 0.04rem rgba(0, 0, 0, 0.1);
      }
    }

    tbody tr:hover td:first-child {
      background-color: #e8f5e9;
    }
  }
}
</style>

