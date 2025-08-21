<template>
  <section class="host-tourist" :aria-labelledby="$t('host.tourist_title')">
    <div class="host-tourist-container">
      <BaseTitle class="host-tourist__title" :title="$t('host.tourist_title')" />
      <div class="host-tourist__content">
        <div class="card" v-for="item in tourist" :key="item.name">
          <div class="embed-map">
            <img :src="item.imageUrl" :alt="item.name" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-row card-media">
              <a
                v-for="media in item.socialMedia"
                :href="media.value"
                :key="media.value"
                target="_blank"
              >
                {{ media.label }}
              </a>
            </p>
            <p v-if="item.tel.label" class="card-row card-description">
              <img class="icon" src="/images/host/icons/tel-icon.svg" alt="電話" />
              <a :href="`tel:${item.tel.value}`" target="_blank">
                {{ item.tel.label }}
              </a>
            </p>
            <p class="card-row card-description">
              <img class="icon" src="/images/host/icons/map-icon.svg" alt="map-icon" />
              {{ item.address }}
            </p>
            <p class="card-row card-description">
              <img class="icon" src="/images/host/icons/distance-icon.svg" alt="distance-icon" />
              {{ item.distance }}
            </p>

            <p class="card-description">{{ item.traffic }}</p>
            <button class="card-row map-button">
              <a :href="item.mapUrl" target="_blank">{{ $t('host.map_button') }}</a>
              <img
                class="icon"
                src="/images/host/icons/arrow-right-icon.svg"
                alt="arrow-right-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseTitle from '@/components/BaseTitle.vue'
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()
// const { locale } = useI18n()

const tourist = [
  {
    name: 'LaLaport南港店 (Nangang LaLaport)',
    mapUrl: 'https://maps.app.goo.gl/SeqrQZCqhsRV5PB4A',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '(02)-2653-2888', value: '+886-2-26532888' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/profile.php?id=61572266827066',
      },
    ],
    address: '台北市南港區經貿二路131號',
    traffic: '交通建議：從南港展覽館1館步行約3分鐘。',
    distance: '約0.05公里',
  },
  {
    name: '松山文創園區 （Songshan Cultural and Creative Park）',
    mapUrl: 'https://maps.app.goo.gl/XjDNS6pQGRxzkiyL8',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '(02)2765-1388', value: '+886-2-27651388' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/SCCPTaipei/',
      },
    ],
    address: '台北市信義區光復南路133號',
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「市政府站(BL18)」，1號出口出站後步行約10分鐘。',
    distance: '約8公里',
  },
  {
    name: '台北101',
    mapUrl: 'https://maps.app.goo.gl/bbdnGwQ6PVScRRMr8',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '(02)8101-8800', value: '+886-2-81018800' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.taipei-101.com.tw/',
      },
    ],
    address: '台北市信義區信義路五段7號',
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「市政府站(BL18)」，3號出口出站後沿著信義連通空橋前進，步行約16分鐘。',
    distance: '約9公里',
  },
  {
    name: '華山1914文化創意產業園區 （Huashan 1914 Creative Park）',
    mapUrl: 'https://maps.app.goo.gl/gVrVtCfT2DAkLEKD7',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '(02)2392-0878', value: '+886-2-23920878' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/1914CP/',
      },
    ],
    address: '台北市中正區八德路一段1號',
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「忠孝新生站(BL14)」，1號出口出站後步行約7分鐘。',
    distance: '約12公里',
  },
  {
    name: '饒河街觀光夜市 （Raohe Street Night Market）',
    mapUrl: 'https://maps.app.goo.gl/TuqfKHHtrmTbKB9YA',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '', value: '' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.taiwan.net.tw/m1.aspx?sNo=0001090&id=R177',
      },
      {
        label: '尋找美食',
        value: 'https://www.travel.taipei/zh-tw/attraction/details/1538',
      },
    ],
    address: `台北市松山區饒河街(入口牌樓座標：25°03'03.3"N 121°34'39.2"E)`,
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「後山埤站(BL20)」，4號出口出站後步行約17分鐘。',
    distance: '約12公里',
  },
  {
    name: '中正紀念堂（Chiang Kai-shek Memorial Hall）',
    mapUrl: 'https://maps.app.goo.gl/n4u3Grp8FAbCnR6x5',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '(02)2343-1100', value: '+886-2-23431100' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/cksmhfb',
      },
    ],
    address: '台北市中正區中山南路21號',
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「台北車站(BL12)」，轉乘淡水信義線(紅線)至「中正紀念堂站R08」，5號出口出站後步行約3分鐘。',
    distance: '約14公里',
  },
  {
    name: '西門町商圈',
    mapUrl: 'https://maps.app.goo.gl/ppanRRgikCcnucmW9',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '(02)2375-3096', value: '+886-2-23753096' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.taiwan.net.tw/m1.aspx?sNo=0001090&id=2254',
      },
    ],
    address: '台北市中正區寶慶路32-1號(捷運西門町站6號出口)',
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「西門站(BL11)」，6號出口出站後即可進入商圈徒步區。',
    distance: '約15公里',
  },
  {
    name: '西門紅樓',
    mapUrl: 'https://maps.app.goo.gl/6L1A5co8sevRbJFF8',
    imageUrl: 'https://dummyimage.com/480x285/000/fff',
    tel: { label: '(02)2375-3096', value: '+886-2-23753096' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/TheRedHouse1908/',
      },
    ],
    address: '台北市萬華區成都路10號(捷運西門町站1號出口)',
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「西門站(BL11)」，1號出口出站步行約3分鐘。',
    distance: '約15公里',
  },
]
</script>

<style lang="scss" scoped>
$block-bg-color: #fff;

$font-size-title: (
  pc: 0.28rem,
  tablet: 0.2rem,
  mobile: 0.16rem,
);

$font-size-info: (
  pc: 0.16rem,
  tablet: 0.14rem,
  mobile: 0.12rem,
);

.host-tourist {
  .host-tourist-container {
    width: 14.4rem;
    margin: 0 auto;
  }
  .host-tourist__title {
    margin-bottom: 0.64rem;
  }
  .host-tourist__content {
    @include flexCenter();
    flex-wrap: wrap;
    align-items: stretch;
    gap: 0.8rem;
    margin-bottom: 0.64rem;
    .card {
      width: 4.8rem;
      background-color: $block-bg-color;
      box-shadow: 0 0.08rem 0.16rem 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .embed-map {
        width: 100%;
        height: 2.85rem;
        img {
          object-fit: cover;
        }
      }
      .icon {
        width: 0.2rem;
      }
      .card-title {
        margin: 0.16rem 0;
        font-size: map-get($font-size-title, pc);
        font-weight: 700;
      }
      .card-media {
        font-size: map-get($font-size-info, pc);
        color: #455861;
        font-weight: 700;
      }
      .card-content {
        padding: 0.16rem;
        .card-row {
          display: flex;
          align-items: center;
          gap: 0.08rem;
        }
      }
    }
  }
}
@include tablet {
  .host-tourist {
    .host-tourist-container {
      width: 100%;
    }
    .host-tourist__title {
      margin-bottom: 0.4rem;
    }
    .host-tourist__content {
      margin-bottom: 0.4rem;
      .card {
        width: 6.64rem;
        .embed-map {
          height: auto;
          @include flexCenter();
          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
@include mobile {
  .host-tourist {
    .host-tourist-container {
      width: 100%;
    }
    .host-tourist__content {
      gap: 0.4rem;
      .card {
        width: 100%;
        .card-title {
          text-align: center;
          font-size: map-get($font-size-title, mobile);
          margin: 0.04rem 0;
        }
        .card-content {
          > p {
            font-size: map-get($font-size-info, mobile);
          }
        }
        .map-button {
          font-size: map-get($font-size-info, mobile);
        }
      }
    }
  }
}
@include listStyle();
</style>
