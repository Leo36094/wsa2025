<template>
  <HostTrafficInfoBlock
    class="host-traffic__info-block"
    :title="data.title"
    :imageUrl="data.imageUrl"
  >
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.location.title }}
      </Text>
    </div>
    <div class="content-section">
      <div class="map-cards">
        <div class="map-card" v-for="card in data.location.cards" :key="card.title">
          <Text class="text-row" tag="h4" variant="h4" align="left">
            {{ card.title }}
          </Text>
          <div class="map-card-content">
            <div class="map-card-content-item text-row" v-for="item in card.list" :key="item.text">
              <img :src="item.icon" :alt="item.iconAlt" class="icon" />
              <Text tag="p" variant="p" align="left">
                {{ item.text }}
              </Text>
            </div>
            <iframe
              class="map-card-content-iframe"
              :src="`https://www.google.com/maps/${card.iframeKey}`"
              width="auto"
              height="219"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.methods.title }}
      </Text>
      <ul>
        <li v-for="item in data.methods.list" :key="item.value">
          <Text v-if="item.type === 'text'" tag="p" variant="p" align="left">
            {{ item.value }}
          </Text>
          <Text v-else tag="p" variant="p" align="left" v-html="item.value"> </Text>
        </li>
      </ul>
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
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import HostTrafficInfoBlock from '@/components/HostTraffic/InfoBlock.vue'
import Text from '@/components/HostTraffic/Text.vue'

const { locale } = useI18n()

const BikeBlock = {
  title: 'YouBike',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/transportation_02.jpg',
  location: {
    title: '站點資訊',
    cards: [
      {
        title: '南港展覽館2館',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: '經貿二路/南港路一段(西北側)',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.3698692221965!2d121.61645999999999!3d25.05545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE5LjYiTiAxMjHCsDM2JzU5LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1756143321633!5m2!1szh-TW!2stw',
      },
      {
        title: '南港展覽館1館(5號出口)',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: '研究院路一段1號(5號出口)',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.392281520031!2d121.61668999999998!3d25.054689999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE2LjkiTiAxMjHCsDM3JzAwLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1756143815731!5m2!1szh-TW!2stw',
      },
      {
        title: '南港展覽館1館(4號出口)',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: '南港路一段32號(4號出口)',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.3728182450864!2d121.61838!3d25.055349999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE5LjMiTiAxMjHCsDM3JzA2LjIiRQ!5e0!3m2!1szh-TW!2stw!4v1756143945753!5m2!1szh-TW!2stw',
      },
      {
        title: '南港展覽館(6號出口)',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: '台北市南港區南港路一段28號',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.3934610970377!2d121.61849999999998!3d25.054650000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE2LjciTiAxMjHCsDM3JzA2LjYiRQ!5e0!3m2!1szh-TW!2stw!4v1756144003272!5m2!1szh-TW!2stw',
      },
    ],
  },
  methods: {
    title: '租借方式',
    list: [
      {
        type: 'text',
        value:
          'YouBike除了使用悠遊卡之外，如果您是外地來的遊客，沒有悠遊卡時，可以利用信用卡（VISA、MASTER或JCB）單次租車。',
      },
      {
        type: 'link',
        value:
          `需使用YouBike App進行信用卡綁定，租借教學請見：<a class="link" href="https://en.youbike.com.tw/region/main/" target="_blank">點擊查看</a>。`,
      },
    ],
  },
  reminder: {
    title: '貼心提醒',
    list: ['展覽、活動或比賽期間可能較難租到車，建議提前規劃取、還車點。'],
  },
}
const BikeBlockEn = {
  title: 'YouBike',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/transportation_02.jpg',
  location: {
    title: 'Station Information',
    cards: [
      {
        title: 'Nangang Exhibition Center Hall 2',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: 'Jingmao 2nd Rd./Section 1, Nangang Rd. (Northwest side)',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.3698692221965!2d121.61645999999999!3d25.05545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE5LjYiTiAxMjHCsDM2JzU5LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1756143321633!5m2!1sen!2sus',
      },
      {
        title: 'Exhibition Center Hall 1 (Exit 5)',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: 'No. 1, Section 1, Academia Rd. (Exit 5)',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.392281520031!2d121.61668999999998!3d25.054689999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE2LjkiTiAxMjHCsDM3JzAwLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1756143815731!5m2!1sen!2sus',
      },
      {
        title: 'Exhibition Center Hall (Exit 4)',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: 'No. 32, Section 1, Nangang Rd. (Exit 4)',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.3728182450864!2d121.61838!3d25.055349999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE5LjMiTiAxMjHCsDM3JzA2LjIiRQ!5e0!3m2!1szh-TW!2stw!4v1756143945753!5m2!1sen!2sus',
      },
      {
        title: 'Exhibition Center Hall (Exit 6)',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
            iconAlt: '地圖 icon',
            text: 'No. 28, Section 1, Nangang Rd. (Exit 6)',
          },
        ],
        iframeKey:
          'embed?pb=!1m17!1m12!1m3!1d3614.3934610970377!2d121.61849999999998!3d25.054650000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE2LjciTiAxMjHCsDM3JzA2LjYiRQ!5e0!3m2!1szh-TW!2stw!4v1756144003272!5m2!1sen!2sus',
      },
    ],
  },
  methods: {
    title: 'Bike Rental Instructions',
    list: [
      {
        type: 'text',
        value:
          'In addition to using an EasyCard, YouBike also allows single-use rentals with credit cards (Visa, MasterCard, or JCB) perfect for out-of-town visitors without an EasyCard.',
      },
      {
        type: 'link',
        value: `To use a credit card, you must bind it through the YouBike APP. For rental instructions, please refer to: <a class="link" href="https://en.youbike.com.tw/region/main/" target="_blank">Click to view</a>.`,
      },
    ],
  },
  reminder: {
    title: 'Friendly Reminder',
    list: ['During exhibitions, events, or competitions, bikes may be in short supply. We recommend planning your pick-up and return locations in advance. '],
  },
}
const data = computed(() => {
  return locale.value === 'en' ? BikeBlockEn : BikeBlock;
});
</script>

<style lang="scss" scoped>
@use 'sass:map';

.host-traffic__info-block {
  margin-top: 1.04rem;
  :deep(.link) {
    text-decoration: underline;
  }
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
  .icon {
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.08rem;
    margin-top: 0.03rem;
  }
  .map-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.48rem 0.16rem;
    .map-card {
      width: 3.78rem;
      align-self: stretch;
      .text-row {
        margin-bottom: 0.16rem;
      }
      .map-card-content {
        height: 3.64rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .map-card-content-item {
          display: flex;
        }
        .map-card-content-iframe {
          margin-top: auto;
          flex-grow: 1;
          max-height: 80%;
        }
      }
    }
  }
}
@include tablet {
  .host-traffic__info-block {
    margin-top: 0.8rem;
    .map-cards {
      gap: 0.4rem 0.16rem;
      justify-content: space-between;
      .map-card {
        width: 2.88rem;
        .map-card-content {
          width: 100%;
          .map-card-content-item {
            width: 100%;
          }
          .map-card-content-iframe {
            width: 100%;
            height: 1.66rem;
          }
        }
      }
    }
  }
}
</style>
