<template>
  <HostTrafficInfoBlock class="host-traffic__bus-section" :title="data.title">
    <div class="content-section" v-for="item in data.paths" :key="item.name">
      <Text tag="h3" variant="h3" align="left">
        {{ item.name }}
      </Text>
      <template v-if="Array.isArray(item.text)">
        <ul>
          <li v-for="text in item.text" :key="text.value">
            <Text tag="p" variant="p" align="left" v-html="text.value"></Text>
          </li>
        </ul>
      </template>
      <template v-else>
        <Text tag="p" variant="p" align="left">
          {{ item.text }}
        </Text>
      </template>
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

const BusBlock = {
  title: '公車',
  paths: [
    {
      name: '捷運南港展覽館站(1館)南港路西向：',
      text: `捷運南港展覽館站2號出口
589, 951, 817, 藍22, 藍15, 605副, 藍21副, 藍39, 藍21, 675, 919, 955, 823, 1032, 1191, 1843,1877, 1878, 1879, 9026, 9026A, 1088, 605, 668, 675, 678, 823, 919, 955`,
    },
    {
      name: '南港展覽館站(2館)南港路西向：',
      text: `553,951,1032,1191,589,205,212,276,306,605,645,678,679,817,小1,小5 小12,藍15, 藍21, 藍22, 藍23, 藍39,市民小巴15`,
    },
    {
      name: '路線與時刻查詢：',
      text: [
        {
          type: 'link',
          value:
            '請見 <a class="link" href="https://ebus.gov.taipei/" target="_blank">臺北市公車即時動態系統</a>。',
        },
      ],
    },
  ],
  reminder: {
    title: '貼心提醒',
    list: [
      '高峰時段 >> 約為平日 07:00–09:00、17:00–19:00，候車人潮較多，建議預留等車時間。',
      '方向辨識 >> 往「南港展覽館」的班車，部分電子看板會標示「南港展覽館」、「經貿二路口」或南港方向終點站名稱；往市區的班車部分會標示「台北車站」、「西門町」、「松山機場」等重要地標名稱，上車前請再次向司機確認路線與行進方向，避免錯搭反方向的班車。',
    ],
  },
}
const BusBlockEn = {
  title: 'Buses',
  paths: [
    {
      name: 'MRT Nangang Exhibition center Station (Hall 1)—Westbound on Nangang Road：',
      text: `Near Exit 2 of MRT Nangang Exhibition Center Station
589, 951, 817, Blue 22, Blue 15, 605sub-route, Blue 21sub-route, Blue 39, Blue21, 675, 919, 955, 823, 1032, 1191, 1843,1877, 1878, 1879, 9026, 9026A, 1088, 605, 668, 675, 678, 823, 919, 955`,
    },
    {
      name: 'Nangang Exhibition Center Station(Hall 2)—Westbound on Nangang Road：',
      text: `553,951,1032,1191,589,205,212,276,306,605,645,678,679,817, Minibus 1, Minibus 5, Minibus 12, Blue 15, Blue 21, Blue 22, Blue 23, Blue 39, Citizen Minibus 15`,
    },
    {
      name: 'Route and Schedule information：',
      text: [
        {
          type: 'link',
          value:
          'Please refer to <a class="link" href="https://ebus.gov.taipei/" target="_blank">Taipei City Bus Real time information System</a> for up-to-date routes.'
        },
      ],
    },
  ],
  reminder: {
    title: 'Helpful Tips',
    list: [
      'Rush Hours: Weekdays from 07:00–09:00 and 17:00–19:00 are rush hours. Expect larger crowds and longer waiting time.',
      `Direction Awareness: Buses heading to "Nangang Exhibition Center" may display destinations such as "Nangang Exhibition Center," "Jingmao 2nd Road intersection, or other terminal stops in the Nangang area.
Buses heading toward downtown Taipei may show destinations like "Taipei Main Station,""Ximending," or"Songshan Airport."
To avoid boarding the wrong direction, double-check the route and destination with the driver
 before getting on.
`,
    ],
  },
}
const data = computed(() => {
  return locale.value === 'en' ? BusBlockEn : BusBlock
})
</script>

<style lang="scss" scoped>
@use 'sass:map';

.host-traffic__bus-section {
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

  :deep(.link) {
    text-decoration: underline;
  }
}
@include tablet {
  .host-traffic__bus-section {
    margin-top: 0.8rem;
  }
}
</style>
