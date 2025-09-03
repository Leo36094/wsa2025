<template>
  <HostTrafficInfoBlock
    class="host-traffic__info-block"
    :title="data.title"
    :imageUrl="data.imageUrl"
    :source="data.imageSource"
  >
    <div class="content-section">
      <div class="location-section">
        <div class="location-group">
          <Text tag="h3" variant="h3" align="left">
            {{ data.location.title }}
          </Text>
          <div class="location-group-content">
            <div
              class="location-group-content-item"
              v-for="item in data.location.list"
              :key="item.text"
            >
              <img class="icon" :src="item.icon" :alt="item.iconAlt" />
              <Text tag="p" variant="p" align="left">
                {{ item.text }}
              </Text>
            </div>
          </div>
        </div>
        <iframe
          class="map-card-content-iframe"
          :src="`https://www.google.com/maps/${data.location.map}`"
          width="390"
          height="191"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.reach.title }}
      </Text>
      <ul>
        <li v-for="item in data.reach.list" :key="item">
          <Text tag="p" variant="p" align="left">
            {{ item }}
          </Text>
        </li>
      </ul>
    </div>
    <div class="content-section">
      <Text tag="h3" variant="h3" align="left">
        {{ data.methods.title }}
      </Text>
      <ul>
        <li v-for="item in data.methods.list" :key="item.value">
          <template v-if="item.type === 'text'">
            <Text tag="p" variant="p" align="left">
              {{ item.value }}
            </Text>
          </template>
          <template v-else-if="item.type === 'link'">
            <Text tag="p" variant="p" align="left" v-html="item.value"></Text>
          </template>
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

const HSRBlock = {
  title: '高鐵/台鐵',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/transportation_03.jpg',
  imageSource: 'Photo by C.L. Kao (eddie5150), licensed under CC BY-SA 3.0',
  location: {
    title: '南港高鐵站/南港車站',
    map: 'embed?pb=!1m18!1m12!1m3!1d3614.426052767504!2d121.604474577085!3d25.053544777803683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab5e75055adb%3A0xadddb88c2f06b36!2z5Y2X5riv!5e0!3m2!1szh-TW!2stw!4v1756145599027!5m2!1szh-TW!2stw',
    list: [
      {
        icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
        text: '台北市南港區南港路一段313號',
        iconAlt: '地圖 icon',
      },
      {
        icon: import.meta.env.BASE_URL + 'images/host/icons/distance-icon.svg',
        text: '「南港高鐵站/南港車站」距離「南港展覽館」約1.8公里',
        iconAlt: '距離 icon',
      },
    ],
  },
  reach: {
    title: '前往方式',
    list: [
      '步行>>約20分鐘，經貿二路往研究院路一段走，途經市民大道交叉口右轉。',
      '搭乘捷運>>板南線往頂埔方向，一站即可抵達，車程約2分鐘。',
    ],
  },
  methods: {
    title: '購票方式',
    list: [
      {
        type: 'text',
        value:
          '高鐵>>可於超商多媒體機、高鐵站售票櫃檯、自動售票機購買，或使用高鐵官網、手機App預訂電子票。',
      },
      {
        type: 'text',
        value:
          '台鐵>>可於超商多媒體機、台鐵車站售票櫃檯、自動售票機購買，或使用台鐵官網、手機App預訂電子票。悠遊卡僅適用於區間車。',
      },
      {
        type: 'link',
        value:
          '查詢時刻表與票價：請見 <a class="link" href="https://www.thsrc.com.tw/" target="_blank">台灣高鐵網站</a>。',
      },
    ],
  },
  reminder: {
    title: '貼心提醒',
    list: ['高鐵南港站是結合捷運、台鐵和高鐵成為「三鐵共構」的大型車站，轉乘便利。'],
  },
}
const HSRBlockEn = {
  title: 'High-Speed Rail/Taiwan Railways',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/transportation_03.jpg',
  imageSource: 'Photo by C.L. Kao (eddie5150), licensed under CC BY-SA 3.0',
  location: {
    title: 'Nangang High-Speed Rail Station/Nangang Railway Station',
    map: 'embed?pb=!1m18!1m12!1m3!1d3614.426052767504!2d121.604474577085!3d25.053544777803683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab5e75055adb%3A0xadddb88c2f06b36!2z5Y2X5riv!5e0!3m2!1szh-TW!2stw!4v1756145599027!5m2!1szh-TW!2stw',
    list: [
      {
        icon: import.meta.env.BASE_URL + 'images/host/icons/map-icon.svg',
        text: 'No. 313, Section 1, Nangang Road, Nangang District, Taipei City',
        iconAlt: 'map icon',
      },
      {
        icon: import.meta.env.BASE_URL + 'images/host/icons/distance-icon.svg',
        text: 'Approximately 1.8 km from Nangang Exhibition Center',
        iconAlt: 'distance icon',
      },
    ],
  },
  reach: {
    title: 'How to get there',
    list: [
      'On foot : About a 20-minute walk. Head along Jingmao 2nd Road toward Section 1 of Academia Road, then turn right at the intersection with Civic Boulevard.',
      'By MRT : Take the Bannan Line (Blue line) toward Dingpu direction. Nangang Station (BL 22) is just one stop away, with a travel time of approximately 2 minutes.',
    ],
  },
  methods: {
    title: 'Ticketing Information',
    list: [
      {
        type: 'text',
        value:
          'High-Speed Rail: Tickets can be purchased at convenience store multimedia kiosks, HSR station ticket counters, automatic ticket machines, or booked online via the official HSR website or mobile APP.',
      },
      {
        type: 'text',
        value:
          'Taiwan Railways (TRA): Tickets are available at convenience store multimedia kiosks, TRA station counters, automatic ticket machines, or through the official TRA website and mobile APP. Note: EasyCard is only valid for local commuter trains. ',
      },
      {
        type: 'link',
        value:
          'For schedules and fares：Please refer to the Taiwan <a class="link" href="https://www.thsrc.com.tw/" target="_blank">High-Speed Rail website</a>.',
      },
    ],
  },
  reminder: {
    title: 'Helpful Tip',
    list: [
      'Nangang Station is a major transportation hub integrating MRT, Taiwan Railways, and High-Speed Rail, offering seamless transfers between systems.',
    ],
  },
}
const data = computed(() => {
  return locale.value === 'en' ? HSRBlockEn : HSRBlock
})
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
  .location-section {
    display: flex;
    gap: 0.16rem;
  }
  .location-group {
    display: flex;
    flex-direction: column;
    gap: 0.16rem;
    .location-group-content {
      display: flex;
      flex-direction: column;
      gap: 0.16rem;
    }
  }
  .location-group-content-item {
    display: flex;
    p {
      font-size: 0.16rem;
    }
  }
  :deep(.link) {
    text-decoration: underline;
  }
}
@include tablet {
  .host-traffic__info-block {
    margin-top: 0.8rem;
    .location-section {
      flex-direction: column;
      .map-card-content-iframe {
        width: 100%;
        height: 3.56rem;
      }
    }
  }
}
@include mobile {
  .host-traffic__info-block {
    .location-section {
      .map-card-content-iframe {
        height: 1.57rem;
      }
    }
  }
}
</style>
