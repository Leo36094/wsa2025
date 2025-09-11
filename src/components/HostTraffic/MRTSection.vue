<template>
  <HostTrafficInfoBlock
    class="host-traffic__info-block"
    :title="data.title"
    :imageUrl="data.imageUrl"
    :source="data.imageSource"
  >
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.stop.title }}
      </Text>
      <Text tag="p" variant="p" align="left">
        {{ data.stop.name }}
      </Text>
    </div>
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.route.title }}
      </Text>
      <ul>
        <li v-for="route in data.route.list" :key="route">
          <Text tag="p" variant="p" align="left">
            {{ route }}
          </Text>
        </li>
      </ul>
      <div class="modal-trigger" @click="toggleModal(true)">
        <Text tag="p" variant="p" align="left">
          {{ data.modal.name }}
        </Text>
        <Teleport to="body">
          <div v-if="showModal" class="modal">
            <div class="modal-background" @click="showModal = false"></div>
            <div class="modal-content">
              <div class="close-button" @click="showModal = false"></div>
              <img
                class="modal-image-container"
                :src="data.modal.image"
                :alt="data.modal.name"
              />
              <div class="click-to-close"></div>
            </div>
          </div>
        </Teleport>
      </div>
    </div>
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.purchaseMethod.title }}
      </Text>
      <div class="purchase-method-container">
        <div
          class="purchase-method-item"
          v-for="method in data.purchaseMethod.methods"
          :key="method.title"
        >
          <img class="purchase-method-item-image" :src="method.image" :alt="method.title" />
          <div class="purchase-method-item-content">
            <Text tag="h4" variant="h4" align="left" class="method-title">
              {{ method.title }}
            </Text>

            <div class="method-item" v-for="(item, idx) in method.list" :key="idx">
              <img class="icon" :src="item.icon" :alt="item.iconAlt" />
              <template v-if="Array.isArray(item.text)">
                <ul>
                  <li v-for="(text, idx) in item.text" :key="idx">
                    <Text tag="p" variant="p" align="left">
                      {{ text }}
                    </Text>
                  </li>
                </ul>
              </template>
              <Text v-else tag="p" variant="p" align="left">
                {{ item.text }}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.reminder.title }}
      </Text>
      <ul>
        <li v-for="item in data.reminder.list" :key="item">
          <Text tag="p" variant="p" align="left">
            {{ item }}
          </Text>
        </li>
      </ul>
    </div>
  </HostTrafficInfoBlock>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import HostTrafficInfoBlock from '@/components/HostTraffic/InfoBlock.vue'
import Text from '@/components/HostTraffic/Text.vue'

const { locale } = useI18n()

const MRTBlock = {
  title: '捷運',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/transportation_01_01.jpg',
  imageSource: 'Photo by C.L. Kao (eddie5150), licensed under CC BY-SA 3.0',
  stop: {
    title: '站名',
    name: '南港展覽館站',
  },
  route: {
    title: '路線',
    list: ['板南線（藍線、BL23）', '文湖線（棕線、BR24）'],
  },
  modal: {
    name: '查看車站出入口',
    image: 'https://web.metro.taipei/img/ALL/Route2200/031.jpg',
  },
  purchaseMethod: {
    title: '購票方式',
    methods: [
      {
        title: '單程票',
        image: import.meta.env.BASE_URL + 'images/host/transportation/transportation_01_02.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: '時間 icon',
            text: '當日有效，逾期作廢。',
          },
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/home-icon.svg',
            iconAlt: '地點 icon',
            text: ['捷運站的自動售票機', '捷運站的旅客詢問處'],
          },
        ],
      },
      {
        title: '悠遊卡（儲值卡）',
        image: import.meta.env.BASE_URL + 'images/host/transportation/transportation_01_03.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: '時間 icon',
            text: '可重複儲值使用，適用於台北捷運、公車及部分商店。',
          },
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/home-icon.svg',
            iconAlt: '地點 icon',
            text: '於便利超商或捷運站的旅客詢問處皆可購買。',
          },
        ],
      },
    ],
  },
  reminder: {
    title: '貼心提醒',
    list: [
      '本站擁有藍線、棕線兩條路線交會，轉乘便利。',
      '展覽、活動或比賽期間人潮較多，建議提早抵達月台邊候車。',
      '台北捷運票價依里程計算，單程最低20元新台幣，票卡需於進站及出站時感應。',
    ],
  },
}
const MRTBlockEn = {
  title: 'Taipei Mass Rapid Transit (MRT)',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/transportation_01_01.jpg',
  imageSource: 'Photo by C.L. Kao (eddie5150), licensed under CC BY-SA 3.0',
  stop: {
    title: 'Station',
    name: 'Nangang Exhibition Center Hall',
  },
  route: {
    title: 'Route',
    list: ['Bannan Line（Blue Line、BL 23）', 'Wenhu Line（Brown Line、BR 24）'],
  },
  modal: {
    name: 'View Station Exit',
    image: 'https://web.metro.taipei/img/ALL/Route2200/031.jpg',
  },
  purchaseMethod: {
    title: 'Ticketing Information',
    methods: [
      {
        title: 'One-way Ticket',
        image: import.meta.env.BASE_URL + 'images/host/transportation/transportation_01_02.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: 'Time icon',
            text: 'Valid on the same day, expired and void.',
          },
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/home-icon.svg',
            iconAlt: 'Location icon',
            text: ['Available at automatic ticket machines', 'Information counters in MRT stations.'],
          },
        ],
      },
      {
        title: 'EasyCard (Stored-Value Card)',
        image: import.meta.env.BASE_URL + 'images/host/transportation/transportation_01_03.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: 'Time icon',
            text: 'Rechargeable and reuseable on Taipei MRT, buses, and selected retail stores.',
          },
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/home-icon.svg',
            iconAlt: 'Location icon',
            text: 'Available at convenience stores and MRT station information counters. ',
          },
        ],
      },
    ],
  },
  reminder: {
    title: 'Helpful Tips：',
    list: [
      'This station is an interchange for both the Blue Line and Brown Line, offering convenient transfers.',
      'During exhibitions, events, or competitions, the station may be crowded. We recommend arriving early and waiting on the platform.',
      'Taipei MRT fares are distance-based. The minimum fare for a single journey is NT$ 20. Please tap your card when entering and exiting the station.',
    ],
  },
}

const data = computed(() => {
  return locale.value === 'en' ? MRTBlockEn : MRTBlock;
});

const showModal = ref(false)
const toggleModal = (show: boolean) => {
  console.log(show)
  showModal.value = show
}
</script>

<style lang="scss" scoped>
@use 'sass:map';

.host-traffic__info-block {
  margin-top: 1.04rem;
  .content-section {
    margin-bottom: map.get($traffic, 'section-margin');
    ul {
      list-style: disc;
      padding-left: 0.24rem;
      li {
        list-style: disc;
      }
    }
  }
  .modal-trigger {
    cursor: pointer;
    text-decoration: underline;
    margin-top: 0.24rem;
    margin-bottom: map.get($traffic, 'section-margin');
  }
  .purchase-method-container {
    .purchase-method-item {
      display: flex;
      align-items: center;
      padding: 0.32rem;
      &:first-child {
        border-bottom: 0.01rem solid #f3f4f5;
      }
      .purchase-method-item-image {
        width: 2.4rem;
        height: 1.39rem;
        object-fit: contain;
        margin-right: 0.32rem;
      }
      .method-title {
        margin-bottom: 0.16rem;
      }
      .method-item {
        display: flex;
        align-items: stretch;
        line-height: 1.5;
        margin-bottom: 0.16rem;
        p,
        ul {
          line-height: 0.2rem;
        }
      }
    }
  }
  .icon {
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.08rem;
  }
}
@include tablet {
  .host-traffic__info-block {
    margin-top: 0.8rem;
    .purchase-method-container {
      display: flex;
      .purchase-method-item {
        flex-direction: column;
        width: 3.08rem;
        padding: 0 0.16rem;
        .purchase-method-item-image {
          margin-right: 0;
          margin-bottom: 0.32rem;
        }
      }
    }
  }
}
@include mobile {
  .host-traffic__info-block {
    .purchase-method-container {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      .purchase-method-item {
        padding: 0;
        .purchase-method-item-content {
          width: 100%;
          .method-title {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  @include flexCenter;
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
  }
  .modal-content {
    position: relative;
    width: 12.8rem;
    height: 100vh;
    @include flexCenter;
    background-color: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.1);
    z-index: 15;
    .close-button {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      width: 0.24rem;
      height: 0.24rem;
      &::after {
        cursor: pointer;
        content: '\00d7'; /* This will render the 'X' */
        position: absolute;
        top: 0.2rem;
        right: 0.05rem;
        font-size: 0.4rem;
        line-height: 0.24rem;
        color: #000;
      }
    }
    .modal-image-container {
      width: 100%;
      height: 90%;
      object-fit: contain;
    }
  }
}
@include tablet {
  .modal {
    .modal-content {
      width: 6.56rem;
      height: 5.4rem;
      .close-button {
        right: 0.24rem;
      }
    }
  }
}
@include mobile {
  .modal {
    .modal-content {
      width: 100%;
      height: 5rem;
      padding: 0.16rem;
      .close-button {
        right: 0.08rem;
        top: 2%;
      }
    }
  }
}
</style>
