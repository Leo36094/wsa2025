<template>
  <section class="host-medic" :aria-labelledby="$t('host.medic_title')" id="medic">
    <div class="host-medic-container">
      <BaseTitle class="host-medic__title" :title="$t('host.medic_title')" />
      <div class="host-medic__content">
        <div class="host-medic__content-item" v-for="item in data" :key="item.name">
          <h2 class="content-item-title">{{ item.name }}</h2>
          <div class="item-info">
            <ul class="info-list">
              <li>
                <span class="info-note">{{ item.note }}</span>
              </li>
              <li>
                <img class="icon" src="/images/host/icons/map-icon.svg" alt="map-icon" />
                {{ item.address }}
              </li>
              <li class="tel-item">
                <img class="icon" src="/images/host/icons/tel-icon.svg" alt="tel-icon" />
                <div class="tel-list">
                  <a
                    v-for="tel in item.tel"
                    :key="tel.value"
                    class="tel-link"
                    :href="`tel:${tel.value}`"
                  >
                    {{ tel.label }}
                  </a>
                </div>
              </li>
              <li>
                <img class="icon" src="/images/host/icons/distance-icon.svg" alt="distance-icon" />
                {{ item.distance }}
              </li>
              <li>
                <img class="icon" src="/images/host/icons/clock-icon.svg" alt="clock-icon" />
                {{ item.time }}
              </li>
            </ul>
            <div class="embed-map">
              <iframe
                width="453"
                height="262"
                style="border: 0"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="`https://www.google.com/maps/${item.iframeKey}`"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const hostipal = [
  {
    name: '康寧醫院',
    address: '台北市內湖區成功路五段420巷26號',
    distance: '約3公里(以南港展覽館 1 館為起點估算）',
    tel: [
      { label: '服務電話：(02)2634-5500', value: '+886-2-26345500' },
      { label: '急診電話：(02)2631-2929', value: '+886-2-26312929' },
    ],
    note: '大型綜合醫院',
    mapUrl: 'https://maps.app.goo.gl/6xrcBV3kPeFw5d7F6',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3613.7685489164687!2d121.60888519999997!3d25.0758327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acbef193c44d%3A0x5b14521ca9adbf46!2z5bq35a-n6Yar55mC6LKh5ZyY5rOV5Lq65bq35a-n6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755971612812!5m2!1szh-TW!2stw',
    time: '約10分鐘(以南港展覽館 1 館為起點估算）',
  },
  {
    name: '台北市立聯合醫院(忠孝院區)',
    address: '台北市南港區同德路87號',
    distance: '約4公里(以南港展覽館 1 館為起點估算）',
    tel: [
      { label: '服務電話：(02)2786-1288', value: '+886-2-27861288' },
      { label: '急診電話：(02)2786-1288#6666', value: '+886-2-27861288#6666' },
    ],
    note: '區域醫院',
    mapUrl: 'https://maps.app.goo.gl/P46aZ3PDuvJmoAif8',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.630823961765!2d121.5861422!3d25.046599699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab74382c490b%3A0xfaaf975a3cdac74a!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5ZCM5b636LevODfomZ8!5e0!3m2!1szh-TW!2stw!4v1755971887760!5m2!1szh-TW!2stw',
    time: '約13分鐘(以南港展覽館 1 館為起點估算）',
  },
  {
    name: '三軍總醫院（內湖院區）',
    address: '台北市內湖區成功路二段325號',
    distance: '約5公里(以南港展覽館 1 館為起點估算）',
    tel: [
      { label: '服務電話：(02)8792-3311', value: '+886-2-87923311' },
      { label: '急診電話：(02)8792-3311#16616', value: '+886-2-87923311#16616' },
    ],
    note: '醫學中心',
    mapUrl: 'https://maps.app.goo.gl/w1bnEJqk1bk8pVRV7',
    iframeKey:
      'embed?pb=!1m14!1m8!1m3!1d3613.9048800489463!2d121.5883293!3d25.0712129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac85b9062427%3A0x91f123e0976ad553!2z5LiJ6LuN57i96Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755971938572!5m2!1szh-TW!2stw',
    time: '約15分鐘(以南港展覽館 1 館為起點估算）',
  },
  {
    name: '中國醫藥大學附設醫院(臺北分院)',
    address: '台北市內湖區內湖路二段360號',
    distance: '約6公里(以南港展覽館 1 館為起點估算）',
    tel: [
      { label: '服務電話：(02)2791-9696', value: '+886-2-27919696' },
      { label: '急診電話：(02)2791-9696', value: '+886-2-27919696' },
    ],
    note: '大型綜合醫院',
    mapUrl: 'https://maps.app.goo.gl/hvHLMAKV7L9DZ61C6',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3613.5835946772904!2d121.59072520000001!3d25.0820989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac8ccffe716d%3A0xafe3828a39551310!2z5Lit5ZyL6Yar6Jel5aSn5a246ZmE6Kit6Yar6Zmi6Ie65YyX5YiG6Zmi!5e0!3m2!1szh-TW!2stw!4v1755972275658!5m2!1szh-TW!2stw',
    time: '約18分鐘(以南港展覽館 1 館為起點估算）',
  },
  {
    name: '台北市立聯合醫院(仁愛院區)',
    address: '台北市大安區仁愛路四段10號',
    distance: '約10公里(以南港展覽館 1 館為起點估算）',
    tel: [
      { label: '服務電話：(02)2709-3600', value: '+886-2-27093600' },
      { label: '急診電話：(02)2709-3600', value: '+886-2-27093600' },
    ],
    note: '大型綜合醫院',
    mapUrl: 'https://maps.app.goo.gl/jnt2cx3YLFnpQsrB6',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.9077155642285!2d121.54522419999999!3d25.0372057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd10b548a99%3A0xfd840bcfff0ed64f!2z6Ie65YyX5biC56uL6IGv5ZCI6Yar6ZmiIOS7geaEm-mZouWNgA!5e0!3m2!1szh-TW!2stw!4v1755972009302!5m2!1szh-TW!2stw',
    time: '約20分鐘(以南港展覽館 1 館為起點估算）',
  },
  {
    name: '台北醫學大學附設醫院',
    address: '台北市信義區吳興街252號',
    distance: '約10公里(以南港展覽館 1 館為起點估算）',
    tel: [
      { label: '服務電話：(02)2737-2181', value: '+886-2-27372181' },
      { label: '急診電話：(02)2737-2181#8101~8105', value: '+886-2-27372181#8101' },
    ],
    note: '醫學中心',
    mapUrl: 'https://maps.app.goo.gl/8fmjrawQWjXRQ3627',
    iframeKey:
      'embed?pb=!1m14!1m8!1m3!1d14460.026504289619!2d121.5311839!3d25.0338492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb4d144907b%3A0xb7e4efe417f00091!2z6Ie65YyX6Yar5a245aSn5a246ZmE6Kit6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755972051583!5m2!1szh-TW!2stw',
    time: '約20分鐘(以南港展覽館 1 館為起點估算）',
  },
  {
    name: '國立台灣大學醫學院附設醫院（台大醫院 / 東址大樓）',
    address: '台北市中正區中山南路7號',
    distance: '約13公里(以南港展覽館 1 館為起點估算）',
    tel: [
      { label: '服務電話：(02)2312-3456', value: '+886-2-23123456' },
      { label: '急診電話：(02)2312-3456#65651', value: '+886-2-23123456#65651' },
    ],
    note: '大型綜合醫院暨醫學中心',
    mapUrl: 'https://maps.app.goo.gl/U9HPkVL9zfRLg2Jy7',
    iframeKey:
      'embed?pb=!1m14!1m8!1m3!1d903.7034898516243!2d121.5194147!3d25.0403869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a973c658b995%3A0xfde0dc33b0bfb0ff!2z5ZyL56uL6Ie654Gj5aSn5a246Yar5a246Zmi6ZmE6Kit6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755972097358!5m2!1szh-TW!2stw',
    time: '約30分鐘(以南港展覽館 1 館為起點估算）',
  },
]
const hostipalEn = [
  {
    name: 'Kang-Ning General Hospital',
    address: 'No. 26, Lane 420, Section 5, Chenggong Road, Neihu District, Taipei City',
    distance: 'Approximately 3 km (estimated from Nangang Exhibition Hall 1)',
    tel: [
      { label: 'Service Phone：(02)2634-5500', value: '+886-2-26345500' },
      { label: 'Emergency Phone：(02)2631-2929', value: '+886-2-26312929' },
    ],
    note: 'Large General Hospital',
    mapUrl: 'https://maps.app.goo.gl/6xrcBV3kPeFw5d7F6',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3613.7685489164687!2d121.60888519999997!3d25.0758327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acbef193c44d%3A0x5b14521ca9adbf46!2z5bq35a-n6Yar55mC6LKh5ZyY5rOV5Lq65bq35a-n6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755971612812!5m2!1szh-TW!2stw',
    time: 'Approximately 10 minutes (estimated from Nangang Exhibition Hall 1)',
  },
  {
    name: 'Taipei City Hospital (Zhongxiao Branch)',
    address: 'No. 87, Tongde Road, Nangang District, Taipei City',
    distance: 'Approximately 4 km (estimated from Nangang Exhibition Hall 1)',
    tel: [
      { label: 'Service Phone：(02)2786-1288', value: '+886-2-27861288' },
      { label: 'Emergency Phone：(02)2786-1288#6666', value: '+886-2-27861288#6666' },
    ],
    note: 'Regional Hospital',
    mapUrl: 'https://maps.app.goo.gl/P46aZ3PDuvJmoAif8',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.630823961765!2d121.5861422!3d25.046599699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab74382c490b%3A0xfaaf975a3cdac74a!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5ZCM5b636LevODfomZ8!5e0!3m2!1szh-TW!2stw!4v1755971887760!5m2!1szh-TW!2stw',
    time: 'Approximately 13 minutes (estimated from Nangang Exhibition Hall 1)',
  },
  {
    name: 'Tri-Service General Hospital (Neihu Branch)',
    address: 'No. 325, Section 2, Chenggong Road, Neihu District, Taipei City',
    distance: 'Approximately 5 km (estimated from Nangang Exhibition Hall 1)',
    tel: [
      { label: 'Service Phone：(02)8792-3311', value: '+886-2-87923311' },
      { label: 'Emergency Phone：(02)8792-3311#16616', value: '+886-2-87923311#16616' },
    ],
    note: 'Medical Center',
    mapUrl: 'https://maps.app.goo.gl/w1bnEJqk1bk8pVRV7',
    iframeKey:
      'embed?pb=!1m14!1m8!1m3!1d3613.9048800489463!2d121.5883293!3d25.0712129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac85b9062427%3A0x91f123e0976ad553!2z5LiJ6LuN57i96Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755971938572!5m2!1szh-TW!2stw',
    time: 'Approximately 15 minutes (estimated from Nangang Exhibition Hall 1)',
  },
  {
    name: 'China Medical University Hospital (Taipei Branch)',
    address: 'No. 360, Neihu Road, Neihu District, Taipei City',
    distance: 'Approximately 6 km (estimated from Nangang Exhibition Hall 1)',
    tel: [
      { label: 'Service Phone：(02)2791-9696', value: '+886-2-27919696' },
      { label: 'Emergency Phone：(02)2791-9696', value: '+886-2-27919696' },
    ],
    note: 'Large General Hospital',
    mapUrl: 'https://maps.app.goo.gl/hvHLMAKV7L9DZ61C6',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3613.5835946772904!2d121.59072520000001!3d25.0820989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac8ccffe716d%3A0xafe3828a39551310!2z5Lit5ZyL6Yar6Jel5aSn5a246ZmE6Kit6Yar6Zmi6Ie65YyX5YiG6Zmi!5e0!3m2!1szh-TW!2stw!4v1755972275658!5m2!1szh-TW!2stw',
    time: 'Approximately 18 minutes (estimated from Nangang Exhibition Hall 1)',
  },
  {
    name: 'Taipei City Hospital (Renai Branch)',
    address: 'No. 10, Section 4, Renai Road, Da’an District, Taipei City',
    distance: 'Approximately 10 km (estimated from Nangang Exhibition Hall 1)',
    tel: [
      { label: 'Service Phone：(02)2709-3600', value: '+886-2-27093600' },
      { label: 'Emergency Phone：(02)2709-3600', value: '+886-2-27093600' },
    ],
    note: 'Large General Hospital',
    mapUrl: 'https://maps.app.goo.gl/jnt2cx3YLFnpQsrB6',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.9077155642285!2d121.54522419999999!3d25.0372057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd10b548a99%3A0xfd840bcfff0ed64f!2z6Ie65YyX5biC56uL6IGv5ZCI6Yar6ZmiIOS7geaEm-mZouWNgA!5e0!3m2!1szh-TW!2stw!4v1755972009302!5m2!1szh-TW!2stw',
    time: 'Approximately 20 minutes (estimated from Nangang Exhibition Hall 1)',
  },
  {
    name: 'Taipei Medical University Hospital—Main Campus',
    address: 'No. 252, WuXing Street, Xinyi District, Taipei City',
    distance: 'Approximately 10 km (estimated from Nangang Exhibition Hall 1)',
    tel: [
      { label: 'Service Phone：(02)2737-2181', value: '+886-2-27372181' },
      { label: 'Emergency Phone：(02)2737-2181#8101~8105', value: '+886-2-27372181#8101' },
    ],
    note: 'Medical Center',
    mapUrl: 'https://maps.app.goo.gl/8fmjrawQWjXRQ3627',
    iframeKey:
      'embed?pb=!1m14!1m8!1m3!1d14460.026504289619!2d121.5311839!3d25.0338492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb4d144907b%3A0xb7e4efe417f00091!2z6Ie65YyX6Yar5a245aSn5a246ZmE6Kit6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755972051583!5m2!1szh-TW!2stw',
    time: 'Approximately 20 minutes (estimated from Nangang Exhibition Hall 1)',
  },
  {
    name: 'National Taiwan University Hospital (East Campus)',
    address: 'No. 7, Zhongshan South Road, Zhongzheng District, Taipei City',
    distance: 'Approximately 13 km (estimated from Nangang Exhibition Hall 1)',
    tel: [
      { label: 'Service Phone：(02)2312-3456', value: '+886-2-23123456' },
      { label: 'Emergency Phone：(02)2312-3456#65651', value: '+886-2-23123456#65651' },
    ],
    note: 'Large General Hospital and Medical Center',
    mapUrl: 'https://maps.app.goo.gl/U9HPkVL9zfRLg2Jy7',
    iframeKey:
      'embed?pb=!1m14!1m8!1m3!1d903.7034898516243!2d121.5194147!3d25.0403869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a973c658b995%3A0xfde0dc33b0bfb0ff!2z5ZyL56uL6Ie654Gj5aSn5a246Yar5a246Zmi6ZmE6Kit6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1755972097358!5m2!1szh-TW!2stw',
    time: 'Approximately 30 minutes (estimated from Nangang Exhibition Hall 1)',
  },
]

const data = computed(() => {
  return locale.value === 'en' ? hostipalEn : hostipal;
});
</script>

<style lang="scss" scoped>
$block-bg-color: #fff;
$note-bg-color: #c8e14b;
/* $note-color: #101E24; */

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

.host-medic {
  .host-medic-container {
    width: 14.4rem;
    margin: 0 auto;
  }
  .host-medic__title {
    margin-bottom: 0.64rem;
  }
  .host-medic__content {
    @include flexCenter(column);
    gap: 0.08rem;
    margin-bottom: 0.64rem;
    .host-medic__content-item {
      width: 10.4rem;
      background-color: $block-bg-color;
      box-shadow: 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0.32rem;
      border-radius: 0.1rem;
      .content-item-title {
        margin-bottom: 0.16rem;
        font-size: map-get($font-size-title, pc);
        font-weight: 700;
      }
      .item-info {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .info-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: map-get($font-size-info, pc);
          padding-left: 0;
          gap: 0.09rem;
          li {
            display: flex;
            align-items: center;
            flex: 1 1 0;
            .icon {
              width: 0.2rem;
              margin-right: 0.08rem;
            }
          }
          .tel-item {
            position: relative;
            display: flex;
            align-items: flex-start;
            .tel-list {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }
          }
        }
        .info-note {
          font-size: map-get($font-size-info, pc);
          background-color: $note-bg-color;
          padding: 0 0.04rem;
          border-radius: 0.02rem;
        }
      }
    }
  }
}
@include tablet {
  .host-medic {
    .host-medic-container {
      width: 100%;
    }
    .host-medic__title {
      margin-bottom: 0.4rem;
    }
    .host-medic__content {
      margin-bottom: 0.4rem;
      .host-medic__content-item {
        width: 6.64rem;
        .content-item-title {
          text-align: center;
        }
      }
      .embed-map {
        iframe {
          width: 100%;
          height: 2rem;;
        }
      }
    }
  }
}
@include mobile {
  .host-medic {
    .host-medic-container {
      width: 100%;
    }
    .host-medic__content {
      .host-medic__content-item {
        width: 100%;
        padding: 0.16rem 0.08rem;
        .content-item-title {
          font-size: map-get($font-size-title, mobile);
        }
        .item-info {
          @include flexCenter(column);
          font-size: map-get($font-size-info, mobile);
          .info-list {
            @include flexCenter(column);
            li {
              font-size: map-get($font-size-info, mobile);
            }
          }
          .info-note {
            font-size: map-get($font-size-info, mobile);
          }
        }
      }
      .embed-map {
        iframe {
          width: 100%;
          height: 1.2rem;
        }
      }
    }
  }
}
@include listStyle();
</style>
