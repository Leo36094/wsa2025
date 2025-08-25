<template>
  <HostTrafficInfoBlock
    class="host-traffic__info-block"
    :title="MRTBlock.title"
    :imageUrl="MRTBlock.imageUrl"
  >
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ MRTBlock.location.title }}
      </Text>
    </div>
    <div class="content-section">
      <div class="map-cards">
        <div class="map-card" v-for="card in MRTBlock.location.cards" :key="card.title">
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
              width="378"
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
        {{ MRTBlock.methods.title }}
      </Text>
      <ul>
        <li v-for="item in MRTBlock.methods.list" :key="item">
          <Text tag="p" variant="p" align="left">
            {{ item }}
          </Text>
        </li>
      </ul>
    </div>
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ MRTBlock.reminder.title }}
      </Text>
      <ul>
        <li v-for="item in MRTBlock.reminder.list" :key="item">
          <Text tag="p" variant="p" align="left">
            {{ item }}
          </Text>
        </li>
      </ul>
    </div>
  </HostTrafficInfoBlock>
</template>

<script setup lang="ts">
import HostTrafficInfoBlock from '@/components/HostTraffic/InfoBlock.vue'
import Text from '@/components/HostTraffic/Text.vue'

const MRTBlock = {
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
      'YouBike除了使用悠遊卡之外，如果您是外地來的遊客，沒有悠遊卡時，可以利用信用卡（VISA、MASTER或JCB）單次租車。',
      '需使用YouBike App進行信用卡綁定，租借教學請見：點擊查看。',
    ],
  },
  reminder: {
    title: '貼心提醒',
    list: ['展覽、活動或比賽期間可能較難租到車，建議提前規劃取、還車點。'],
  },
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
  .icon {
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.08rem;
  }
  .map-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.24rem 0.16rem;
    .map-card {
      width: 3.78rem;
      .text-row {
        margin-bottom: 0.16rem;
      }
      .map-card-content {
        display: flex;
        flex-direction: column;
        .map-card-content-item {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
@include tablet {
  .host-traffic__info-block {
    margin-top: 0.8rem;
    .map-cards {
      gap: 0.16rem 0.24rem;
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
