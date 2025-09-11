<template>
  <section class="host-tourist" :aria-labelledby="$t('host.tourist_title')" id="tourist">
    <div class="host-tourist-container">
      <BaseTitle class="host-tourist__title" :title="$t('host.tourist_title')" />
      <div class="host-tourist__content">
        <div class="card" v-for="item in data" :key="item.name">
          <div class="card-image">
            <img :src="item.imageUrl" :alt="item.name" />
          </div>
          <div class="card-content">
            <h3 class="card-title card-group">{{ item.name }}</h3>

            <div class="card-info card-group">
              <div class="text-group">
                <p class="card-row card-description">
                  <img class="icon" src="/images/host/icons/map-icon.svg" alt="map-icon" />
                  {{ item.address }}
                </p>
                <p class="card-row card-media">
                  <img class="icon" src="/images/host/icons/web-icon.svg" alt="web-icon" />
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
                  <img class="icon" src="/images/host/icons/distance-icon.svg" alt="distance-icon" />
                  {{ item.distance }}
                </p>
              </div>
              <div class="card-map">
                <iframe
                width="200"
                height="120"
                style="border: 0"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="`https://www.google.com/maps/${item.iframeKey}`"
              >
              </iframe>
              </div>
            </div>

            <p class="card-footer card-group">
              <div class="footer-title">{{ $t('host.transportation_suggestion') }}</div>
              <div class="footer-content">{{ item.traffic }}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseTitle from '@/components/BaseTitle.vue'

const { locale } = useI18n()

const tourist = [
  {
    name: 'LaLaport南港店',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.2549696695237!2d121.6175823!3d25.059345900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad0038e0034b%3A0x3ca02f9afeace511!2sMitsui%20Shopping%20Park%20LaLaport%20%E5%8D%97%E6%B8%AF!5e0!3m2!1szh-TW!2stw!4v1756057632898!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_01.jpg',
    tel: { label: '(02)-2653-2888', value: '+886-2-26532888' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/profile.php?id=61572266827066',
      },
    ],
    address: '台北市南港區經貿二路131號',
    traffic: '從南港展覽館1館步行約3分鐘。',
    distance: '約0.05公里',
  },
  {
    name: '松山文創園區',
    iframeKey: 'embed?pb=!1m14!1m8!1m3!1d903.6766131655214!2d121.5603766!3d25.0440342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abbf23ce4b3b%3A0xc82b0f87ff7df9dc!2z5p2-5bGx5paH5Ym15ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1756057695253!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_02.jpg',
    tel: { label: '(02)2765-1388', value: '+886-2-27651388' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/SCCPTaipei/',
      },
    ],
    address: '台北市信義區光復南路133號',
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「市政府站(BL18)」，1號出口出站後步行約10分鐘。',
    distance: '約8公里',
  },
  {
    name: '台北101',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3615.0250041138825!2d121.5648684!3d25.0332255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe10238cb87%3A0x8c0ca929f18c0d23!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1756057738579!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_03.jpg',
    tel: { label: '(02)8101-8800', value: '+886-2-81018800' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.taipei-101.com.tw/',
      },
    ],
    address: '台北市信義區信義路五段7號',
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「市政府站(BL18)」，3號出口出站後沿著信義連通空橋前進，步行約16分鐘。',
    distance: '約9公里',
  },
  {
    name: '華山1914文化創意產業園區',
    iframeKey: 'embed?pb=!1m14!1m8!1m3!1d3614.707171917994!2d121.5269967!3d25.0440098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96523e0246d%3A0xf1c9276707165c71!2z6I-v5bGxMTkxNOaWh-WMluWJteaEj-eUoualreWckuWNgA!5e0!3m2!1szh-TW!2stw!4v1756057777193!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_04.jpg',
    tel: { label: '(02)2358-1914', value: '+886-2-23581914' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/1914CP/',
      },
    ],
    address: '台北市中正區八德路一段1號',
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「忠孝新生站(BL14)」，1號出口出站後步行約7分鐘。',
    distance: '約12公里',
  },
  {
    name: '饒河街觀光夜市',
    mapUrl: 'https://maps.app.goo.gl/TuqfKHHtrmTbKB9YA',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.5044691022017!2d121.5774891!3d25.0508854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab9c0db4a583%3A0x3da21183815df6f6!2z6aWS5rKz6KGX6KeA5YWJ5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1756057811604!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_05.jpg',
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
    address: `台北市松山區饒河街`,
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「後山埤站(BL20)」，4號出口出站後步行約17分鐘。',
    distance: '約12公里',
  },
  {
    name: '中正紀念堂（Chiang Kai-shek Memorial Hall）',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.95792233815!2d121.5201832!3d25.035501999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99db9a2a94d%3A0x43e9034292df69b2!2z5ZyL56uL5Lit5q2j57SA5b-15aCC!5e0!3m2!1szh-TW!2stw!4v1756057846981!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_06.jpg',
    tel: { label: '(02)2343-1100', value: '+886-2-23431100' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/cksmhfb',
      },
    ],
    address: '台北市中正區中山南路21號',
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「台北車站(BL12)」，轉乘淡水信義線(紅線)至「中正紀念堂站R08」，5號出口出站後步行約3分鐘。',
    distance: '約14公里',
  },
  {
    name: '西門町商圈',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.741839864972!2d121.5077445!3d25.0428337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90970cf4007%3A0x95aa06583d52d4c0!2z6KW_6ZaA55S65ZWG5ZyI!5e0!3m2!1szh-TW!2stw!4v1756057878642!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_07.jpg',
    tel: { label: '(02)2375-3096', value: '+886-2-23753096' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.taiwan.net.tw/m1.aspx?sNo=0001090&id=2254',
      },
    ],
    address: '台北市中正區寶慶路32-1號(捷運西門町站6號出口)',
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「西門站(BL11)」，6號出口出站後即可進入商圈徒步區。',
    distance: '約15公里',
  },
  {
    name: '西門紅樓',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.7660042416856!2d121.5068592!3d25.0420139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a909a4acec8b%3A0x7c34275cfedcc1c5!2z6KW_6ZaA57SF5qiT!5e0!3m2!1szh-TW!2stw!4v1756057905970!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_08.jpg',
    tel: { label: '(02)2375-3096', value: '+886-2-23753096' },
    socialMedia: [
      {
        label: '社群網站',
        value: 'https://www.facebook.com/TheRedHouse1908/',
      },
    ],
    address: '台北市萬華區成都路10號(捷運西門町站1號出口)',
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「西門站(BL11)」，1號出口出站步行約3分鐘。',
    distance: '約15公里',
  },
]
const touristEn = [
  {
    name: 'LaLaport  Nangang Branch',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.2549696695237!2d121.6175823!3d25.059345900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad0038e0034b%3A0x3ca02f9afeace511!2sMitsui%20Shopping%20Park%20LaLaport%20%E5%8D%97%E6%B8%AF!5e0!3m2!1szh-TW!2stw!4v1756057632898!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_01.jpg',
    tel: { label: '(02)-2653-2888', value: '+886-2-26532888' },
    socialMedia: [
      {
        label: 'LaLaport Taipei Nangang',
        value: 'https://www.facebook.com/profile.php?id=61572266827066',
      },
    ],
    address: 'No. 131, Jingmao 2nd Road, Nangang District, Taipei City',
    traffic: 'Approximately a 3-minute walk from Nangang Exhibition Hall 1.',
    distance: 'Approximately 0.05 km',
  },
  {
    name: 'Songshan Cultural and Creative Park',
    iframeKey: 'embed?pb=!1m14!1m8!1m3!1d903.6766131655214!2d121.5603766!3d25.0440342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abbf23ce4b3b%3A0xc82b0f87ff7df9dc!2z5p2-5bGx5paH5Ym15ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1756057695253!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_02.jpg',
    tel: { label: '(02)2765-1388', value: '+886-2-27651388' },
    socialMedia: [
      {
        label: 'SCCP Taipei',
        value: 'https://www.facebook.com/SCCPTaipei/',
      },
    ],
    address: 'No. 133, Guangfu South Road, Xinyi District, Taipei City',
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Taipei City Hall Station (BL 18), and then exit via Exit 1, walk for about 10 minutes to reach the destination.',
    distance: 'Approximately 8 km',
  },
  {
    name: 'Taipei 101',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3615.0250041138825!2d121.5648684!3d25.0332255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe10238cb87%3A0x8c0ca929f18c0d23!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1756057738579!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_03.jpg',
    tel: { label: '(02)8101-8800', value: '+886-2-81018800' },
    socialMedia: [
      {
        label: 'Taipei 101',
        value: 'https://www.taipei-101.com.tw/',
      },
    ],
    address: 'No. 7, Section 5, Xinyi Road, Xinyi District, Taipei City',
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Taipei City Hall Station (BL 18).Exit via Exit 3 and then walk along Xinyi Skywalk for approximately 16 minutes.',
    distance: 'Approximately 9 km',
  },
  {
    name: 'Huashan 1914 Creative Park ',
    iframeKey: 'embed?pb=!1m14!1m8!1m3!1d3614.707171917994!2d121.5269967!3d25.0440098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96523e0246d%3A0xf1c9276707165c71!2z6I-v5bGxMTkxNOaWh-WMluWJteaEj-eUoualreWckuWNgA!5e0!3m2!1szh-TW!2stw!4v1756057777193!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_04.jpg',
    tel: { label: '(02)2358-1914', value: '+886-2-23581914' },
    socialMedia: [
      {
        label: 'Huashan 1914 Creative Park ',
        value: 'https://www.facebook.com/1914CP/',
      },
    ],
    address: 'No. 1, Section 1, Bade Road, Zhongzheng District, Taipei City',
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Zhongxiao Xinsheng Station (BL 14). Exit via Exit 1 and then walk for about 7 minutes.',
    distance: 'Approximately 12 km',
  },
  {
    name: 'Raohe Street Night Market',
    mapUrl: 'https://maps.app.goo.gl/TuqfKHHtrmTbKB9YA',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.5044691022017!2d121.5774891!3d25.0508854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab9c0db4a583%3A0x3da21183815df6f6!2z6aWS5rKz6KGX6KeA5YWJ5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1756057811604!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_05.jpg',
    tel: { label: '', value: '' },
    socialMedia: [
      {
        label: 'Raohe Street Night Market',
        value: 'https://www.taiwan.net.tw/m1.aspx?sNo=0001090&id=R177',
      },
      {
        label: 'Map for Food',
        value: 'https://www.travel.taipei/zh-tw/attraction/details/1538',
      },
    ],
    address: `Raohe Street, Songshan District, Taipei City (Entrance Arc：25°03'03.3"N 121°34'39.2"E)`,
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Houshapi Station (BL 20). Exit via Exit 4, then walk for approximately 17 minutes.',
    distance: 'Approximately 12 km',
  },
  {
    name: 'Chiang Kai-shek Memorial Hall',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.95792233815!2d121.5201832!3d25.035501999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99db9a2a94d%3A0x43e9034292df69b2!2z5ZyL56uL5Lit5q2j57SA5b-15aCC!5e0!3m2!1szh-TW!2stw!4v1756057846981!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_06.jpg',
    tel: { label: '(02)2343-1100', value: '+886-2-23431100' },
    socialMedia: [
      {
        label: 'Chiang Kai-shek Memorial Hall',
        value: 'https://www.facebook.com/cksmhfb',
      },
    ],
    address: 'No. 21, Zhongshan South Road, Zhongzheng District, Taipei City',
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Taipei Main Station (BL 12)Transfer to the Tamsui-Xinyi Line (Red Line) and ride to Chiang Kai-shek Memorial Hall Station (R 08). Exit via Exit 5, then walk for about 3 minutes.',
    distance: 'Approximately 14 km',
  },
  {
    name: 'Ximending Shopping District',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.741839864972!2d121.5077445!3d25.0428337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90970cf4007%3A0x95aa06583d52d4c0!2z6KW_6ZaA55S65ZWG5ZyI!5e0!3m2!1szh-TW!2stw!4v1756057878642!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_07.jpg',
    tel: { label: '(02)2375-3096', value: '+886-2-23753096' },
    socialMedia: [
      {
        label: 'Ximending Shopping District',
        value: 'https://www.taiwan.net.tw/m1.aspx?sNo=0001090&id=2254',
      },
    ],
    address: 'No. 32-1, Baoqing Road, Zhongzheng District, Taipei City ',
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Ximen Station (BL 11), Exit via Exit 6 to enter the pedestrian shopping area. ',
    distance: 'Approximately 15 km',
  },
  {
    name: 'The Red House (Ximen Red House)',
    iframeKey: 'embed?pb=!1m18!1m12!1m3!1d3614.7660042416856!2d121.5068592!3d25.0420139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a909a4acec8b%3A0x7c34275cfedcc1c5!2z6KW_6ZaA57SF5qiT!5e0!3m2!1szh-TW!2stw!4v1756057905970!5m2!1szh-TW!2stw',
    imageUrl: import.meta.env.BASE_URL + 'images/host/tourist/tourist_08.jpg',
    tel: { label: '(02)2375-3096', value: '+886-2-23753096' },
    socialMedia: [
      {
        label: 'The Red House (Ximen Red House)',
        value: 'https://www.facebook.com/TheRedHouse1908/',
      },
    ],
    address: 'No. 10, Chengdu Road, Wanhua District, Taipei City ',
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Ximen Station (BL 11), Exit via Exit 1, and then walk for about 3 minutes.',
    distance: 'Approximately 15 km',
  },
]

const data = computed(() => {
  return locale.value === 'en' ? touristEn : tourist;
});
</script>

<style lang="scss" scoped>
@use "sass:map";
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
    width: 12.8rem;
    margin: 0 auto;
  }
  .host-tourist__title {
    margin-bottom: 0.64rem;
  }
  .host-tourist__content {
    @include flexCenter(column);
    gap: 0.8rem;
    margin-bottom: 0.64rem;
    .card {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .card-group {
        margin-bottom: 0.24rem;
      }

      .card-image {
        width: 5.76rem;
        height: 3.46rem;
        border-radius: 0.1rem;
        margin-right: 0.32rem;
        overflow: hidden;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .icon {
        width: 0.2rem;
      }
      .card-content {
        flex: 1;
        .card-title {
          font-size: map.get($font-size-title, pc);
          font-weight: 700;
        }
        .card-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .text-group {
            display: flex;
            flex-direction: column;
          }
        }
        .card-media {
          font-size: map.get($font-size-info, pc);
          color: #455861;
          font-weight: 700;
        }
        .card-map {
          height: 1.2rem;
        }
        .card-row {
          display: flex;
          align-items: center;
          gap: 0.08rem;
        }
      }
      .card-footer {
        padding: 0.16rem 0;
        border-top: 1px solid #f3f4f5;
        display: flex;
        flex-direction: column;
        .footer-title {
          color: #899CA4;
          margin-bottom: 0.08rem;
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
    .host-tourist__content {
      margin-bottom: 0.4rem;
      .card {
        width: 6.64rem;
        @include flexCenter(column);
        .card-image {
          width: 100%;
          height: 100%;
          margin-right: 0;
          margin-bottom: 0.16rem;
        }
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
      padding: 0 0.16rem;
      gap: 0.2rem;
      .card {
        width: 100%;
        .card-content {
          .card-title {
            text-align: center;
            font-size: map.get($font-size-title, mobile);
            margin: 0.04rem 0;
          }
          .card-info {
            font-size: map.get($font-size-info, mobile);
            flex-direction: column;
          }
          .card-map {
            width: 100%;
            margin-top: 0.16rem;
            iframe {
              width: 100%;
              height: 1.6rem;
            }
          }
        }
      }
    }
  }
}
@include listStyle();
</style>
