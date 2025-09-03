<template>
  <section class="host-muslim" :aria-labelledby="$t('host.muslim_title')" id="muslim">
    <div class="host-muslim-container">
      <BaseTitle class="host-muslim__title" :title="$t('host.muslim_title')" />
      <div class="host-muslim__content">
        <div class="card" v-for="item in data" :key="item.name">
          <div class="card-map">
            <iframe
              v-for="(iframeKey, idx) in item.iframeKey"
              :key="idx"
              width="200"
              height="120"
              style="border: 0"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              :src="`https://www.google.com/maps/${iframeKey}`"
            >
            </iframe>
          </div>
          <div class="card-content">
            <h3 class="card-title card-group">{{ item.name }}</h3>

            <div class="card-info card-group">
              <div class="text-group">
                <div class="card-row card-description">
                  <img class="icon" src="/images/host/icons/map-icon.svg" alt="map-icon" />
                  <div class="col">
                    <p v-for="address in item.address">{{ address }}</p>
                  </div>
                </div>
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
                <div class="card-row card-description">
                  <img class="icon" src="/images/host/icons/tel-icon.svg" alt="電話" />
                  <div class="col">
                    <a v-for="tel in item.tel" :href="`tel:${tel.value}`" target="_blank">
                      {{ tel.label }}
                    </a>
                  </div>
                </div>

                <p class="card-row card-description">
                  <img
                    class="icon"
                    src="/images/host/icons/check-icon.svg"
                    alt="certification-icon"
                  />
                  {{ item.certification }}
                </p>
                <p class="card-row card-description">
                  <img class="icon" src="/images/host/icons/rating-icon.svg" alt="distance-icon" />
                  {{ item.rating }}
                </p>
                <p class="card-row card-description">
                  <img
                    class="icon"
                    src="/images/host/icons/distance-icon.svg"
                    alt="distance-icon"
                  />
                  {{ item.distance }}
                </p>
              </div>
            </div>

            <div class="card-footer card-group">
              <div class="footer-title">{{ $t('host.transportation_suggestion') }}</div>
              <div class="footer-content">{{ item.traffic }}</div>
            </div>
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

const { t } = useI18n()
const { locale } = useI18n()

const muslim = [
  {
    name: '炸雞大獅（Fried Chicken Master）',
    nameEn: 'Fried Chicken Master',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.3509722768313!2d121.6150150770416!3d25.05609077780203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aca81a280a7f%3A0x940c4b25932d02d9!2z54K46Zue5aSn542FIOWMl-W4guWNl-a4r-S4gOmkqOW6lw!5e0!3m2!1szh-TW!2stw!4v1756749237572!5m2!1szh-TW!2stw',
      'embed?pb=!1m18!1m12!1m3!1d3614.344286641235!2d121.6132554770849!3d25.05631747780192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab2e781b06ff%3A0xe0292216ca92cd4b!2z54K46beE5aSn542F5YyX5biC5Y2X5riv5LqM6aSo5bqX!5e0!3m2!1szh-TW!2stw!4v1756231648843!5m2!1szh-TW!2stw',
    ],
    tel: [
      { label: '南港展覽館1館(02)7746-2978', value: '+886-2-77462978' },
      { label: '南港展覽館2館(02)2653-5547', value: '+886-2-26535547' },
    ],
    socialMedia: [
      {
        label: '炸雞大獅（Fried Chicken Master）',
        value: 'https://www.facebook.com/FCM.tw/',
      },
    ],
    address: [
      '台北市南港區經貿二路1號(南港展覽館1館1F)',
      '台北市南港區經貿二路2號(南港展覽館2館B1)',
    ],
    traffic: '從南港展覽館1館步行約5分鐘',
    distance: '約0.5公里',
    rating: 'Google Maps 4.3⭐',
    certification: '清真認證(Halal Food)',
  },
  {
    name: '一千零一夜廚房（1001 Nights Kitchen）',
    nameEn: '1001 Nights Kitchen',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.5369146681064!2d121.57113307708487!3d25.049784977806297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab408c304ce5%3A0x2efaf0d65483adcd!2z5LiA5Y2D6Zu25LiA5aSc5bua5oi_!5e0!3m2!1szh-TW!2stw!4v1756231795531!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2767-1661', value: '+886-2-27671661' }],
    socialMedia: [
      {
        label: '一千零一夜廚房 (1001 Nights Kitchen)',
        value: 'https://www.facebook.com/1001NightsKitchen/?locale=zh_TW',
      },
    ],
    address: ['台北市松山區八德路四段618號2樓'],
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「南港站(BL22)」，轉乘台鐵從「台鐵南港站」搭一站至「台鐵松山站」，出站後自市民大道六段步行至八德路四段約7分鐘。',
    distance: '約6公里',
    rating: 'Google Maps 4.5⭐',
    certification: '清真認證(Halal Food)',
  },
  {
    name: '饗印印度巴基斯坦料理餐廳（khana khazana-Halal Food）',
    nameEn: 'khana khazana-Halal Food',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.962260716576!2d121.55806027600124!3d25.035354777815456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb62bc466df%3A0x4513ce85e0f5db05!2z6aWX5Y2w5Y2w5bqm5paZ55CGS2hhbmFraGF6YW5hIGhhbGFsIHJlc3RhdXJhbnQ!5e0!3m2!1szh-TW!2stw!4v1756232202652!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)8786-9366', value: '+886-2-87869366' }],
    socialMedia: [
      {
        label: '饗印印度巴基斯坦料理餐廳（khana khazana-Halal Food）',
        value: 'https://www.facebook.com/indian.pakistan.halal.veg/?locale=zh_TW',
      },
    ],
    address: ['台北市信義區基隆路一段366號'],
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「市政府站(BL18)」，2號出口出站後往基隆路一段方向再步行約12分鐘。',
    distance: '約9公里',
    rating: 'Google Maps 4.4⭐',
    certification: '清真認證(Halal Food)',
  },
  {
    name: '昆明園（Kunming Islamic Restaurant）',
    nameEn: 'Kunming Islamic Restaurant',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.499108057304!2d121.54029508579276!3d25.0510672205781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdd9952edd9%3A0x4d5e331728f1473a!2z5piG5piO5ZySIEt1bm1pbmcgSXNsYW1pYyBSZXN0YXVyYW50!5e0!3m2!1szh-TW!2stw!4v1756232363713!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2751-6776', value: '+886-2-27516776' }],
    socialMedia: [
      {
        label: '昆明園（Kunming Islamic Restaurant）',
        value: 'https://www.facebook.com/kunming.islamic.restaurant/?locale=zh_TW',
      },
    ],
    address: ['台北市松山區復興北路81巷26號'],
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「忠孝復興站(BL15)」，5號 出口站後經過復興南路一段、往復興北路前進至81巷右轉。',
    distance: '約10公里',
    rating: 'Google Maps 4.4⭐',
    certification: '清真認證(Halal Food)',
  },
  {
    name: 'TAJ泰姬印度餐廳（TAJ Indian Restaurant）',
    nameEn: 'TAJ Indian Restaurant',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.685759689287!2d121.5432673760015!3d25.04473617780946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc5642aca47%3A0x93340bf02e06e7d5!2zVEFKIOazsOWnrOWNsOW6pumkkOW7syAoVEFKIEluZGlhbiBSZXN0YXVyYW50KQ!5e0!3m2!1szh-TW!2stw!4v1756232484263!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)8773-0175', value: '+886-2-87730175' }],
    socialMedia: [
      {
        label: 'TAJ泰姬印度餐廳 (TAJ Indian Restaurant)',
        value: 'https://www.facebook.com/TAJ.Indian/?locale=zh_TW',
      },
    ],
    address: ['台北市大安區市民大道四段48巷1號1樓'],
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「忠孝復興站(BL15)」，5號出口站後經過復興南路一段、往復興北路前進至79巷右轉。',
    distance: '約10公里',
    rating: 'Google Maps 4.7⭐',
    certification: '清真認證(Halal Food)',
  },
  {
    name: '清真黃牛肉麵館',
    nameEn: 'Halal Beef Noodle Restaurant',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.6599331638145!2d121.50821017708465!3d25.04561227780893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90c5d084873%3A0x1100bf99d89ef9c6!2z5riF55yf6buD54mb6IKJ6bq16aSo!5e0!3m2!1szh-TW!2stw!4v1756750026901!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2331-8203', value: '+886-2-23318203' }],
    socialMedia: [
      {
        label: '清真黃牛肉麵館',
        value: 'https://www.facebook.com/Yushan23318203/?locale=zh_TW',
      },
    ],
    address: ['台北市中正區延平南路23號'],
    traffic:
      '交通建議：從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「西門站(BL11)」，5號出口站後中華路一段直走、遇漢口街一段右轉後於延平南路口左轉。',
    distance: '約13公里',
    rating: 'Google Maps 4.1⭐',
    certification: '清真認證(Halal Food)',
  },
  {
    name: '酷思多披薩 (Gusto Pizza)',
    nameEn: 'Gusto Pizza',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.993932455979!2d121.52737547708458!3d25.03427997781619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9820b1f2095%3A0x7db2767efae8af3c!2sGusto%20Pizza!5e0!3m2!1szh-TW!2stw!4v1756750281799!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2358-7001', value: '+886-2-23587001' }],
    socialMedia: [
      {
        label: '酷思多披薩 Gusto Pizza',
        value: 'https://www.facebook.com/gustopizzatw/?locale=zh_TW',
      },
    ],
    address: ['台北市中正區延平南路23號'],
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「忠孝新生(BL14)」，轉乘中和新蘆線(橘線)至「東門站O06」，6號出口出站後步行約2分鐘。',
    distance: '約15公里',
    rating: 'Google Maps 4.6⭐',
    certification: '清真認證(Halal Food)',
  },
]
const muslimEn = [
  {
    name: 'Fried Chicken Master',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.3509722768313!2d121.6150150770416!3d25.05609077780203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aca81a280a7f%3A0x940c4b25932d02d9!2z54K46Zue5aSn542FIOWMl-W4guWNl-a4r-S4gOmkqOW6lw!5e0!3m2!1szh-TW!2stw!4v1756749237572!5m2!1szh-TW!2stw',
      'embed?pb=!1m18!1m12!1m3!1d3614.344286641235!2d121.6132554770849!3d25.05631747780192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab2e781b06ff%3A0xe0292216ca92cd4b!2z54K46beE5aSn542F5YyX5biC5Y2X5riv5LqM6aSo5bqX!5e0!3m2!1szh-TW!2stw!4v1756231648843!5m2!1szh-TW!2stw',
    ],
    tel: [
      { label: 'Nangang Exhibition Hall 1(02)7746-2978', value: '+886-2-77462978' },
      { label: 'Nangang Exhibition Hall 2(02)2653-5547', value: '+886-2-26535547' },
    ],
    socialMedia: [
      {
        label: 'Fried Chicken Master',
        value: 'https://www.facebook.com/FCM.tw/',
      },
    ],
    address: [
      'No. 1, Jingmao 2nd Road, Nangang District, Taipei City (Nangang Exhibition Hall 1, 1st Floor)',
      'No. 2, Jingmao 2nd Road, Nangang District, Taipei City (Nangang Exhibition Hall 2, B1) ',
    ],
    traffic: 'Walk for 5 minutes from Nangang Exhibition Hall 1',
    distance: 'Approximately 0.5 km',
    rating: 'Google Maps 4.3⭐',
    certification: 'Halal Certified',
  },
  {
    name: '1001 Nights Kitchen',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.5369146681064!2d121.57113307708487!3d25.049784977806297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab408c304ce5%3A0x2efaf0d65483adcd!2z5LiA5Y2D6Zu25LiA5aSc5bua5oi_!5e0!3m2!1szh-TW!2stw!4v1756231795531!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2767-1661', value: '+886-2-27671661' }],
    socialMedia: [
      {
        label: '1001 Nights Kitchen',
        value: 'https://www.facebook.com/1001NightsKitchen/?locale=zh_TW',
      },
    ],
    address: ['2nd Floor, No. 618, Section 4, Bade Road, Songshan District, Taipei City'],
    traffic: `Take the Taipei Metro Bannan Line (Blue Line) from Nangang
Exhibition Center Station (BL 23) to Nangang Station (BL 22)
From there, transfer to Taiwan Railways and ride one stop to Songshan Station. After
exiting the station, walk along Section 6 of Civic Boulevard toward Section 4 of Bade
Road—it’s about a 7-minute walk.`,
    distance: 'Approximately 6 km',
    rating: 'Google Maps 4.5⭐',
    certification: 'Halal Certified',
  },
  {
    name: 'Khana Khazana-Halal Food',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.962260716576!2d121.55806027600124!3d25.035354777815456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb62bc466df%3A0x4513ce85e0f5db05!2z6aWX5Y2w5Y2w5bqm5paZ55CGS2hhbmFraGF6YW5hIGhhbGFsIHJlc3RhdXJhbnQ!5e0!3m2!1szh-TW!2stw!4v1756232202652!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)8786-9366', value: '+886-2-87869366' }],
    socialMedia: [
      {
        label: 'Khana Khazana-Halal Food',
        value: 'https://www.facebook.com/indian.pakistan.halal.veg/?locale=zh_TW',
      },
    ],
    address: ['No. 366, Section 1, Keelung Road, Xinyi District, Taipei City'],
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Taipei City Hall Station (BL 18). Exit via Exit 2 and walk for about 12 minutes toward Section 1 of Keelung Road',
    distance: 'Approximately 9 km',
    rating: 'Google Maps 4.4⭐',
    certification: 'Halal Certified',
  },
  {
    name: 'Kunming Islamic Restaurant',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.499108057304!2d121.54029508579276!3d25.0510672205781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdd9952edd9%3A0x4d5e331728f1473a!2z5piG5piO5ZySIEt1bm1pbmcgSXNsYW1pYyBSZXN0YXVyYW50!5e0!3m2!1szh-TW!2stw!4v1756232363713!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2751-6776', value: '+886-2-27516776' }],
    socialMedia: [
      {
        label: 'Kunming Islamic Restaurant',
        value: 'https://www.facebook.com/kunming.islamic.restaurant/?locale=zh_TW',
      },
    ],
    address: ['No, 26, Lane 81, Fuxing North Road, Songshan District, Taipei City'],
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Zhongxiao Fuxing Station (BL 15). Exit via Exit 5, walk along Section 1 of Fuxing South Road , then continue north on Fuxing North Road. Turn right onto Lane 81, Fuxing North Road, and proceed to No. 26.',
    distance: 'Approximately 10 km',
    rating: 'Google Maps 4.4⭐',
    certification: 'Halal Certified',
  },
  {
    name: 'TAJ Indian Restaurant',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.685759689287!2d121.5432673760015!3d25.04473617780946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc5642aca47%3A0x93340bf02e06e7d5!2zVEFKIOazsOWnrOWNsOW6pumkkOW7syAoVEFKIEluZGlhbiBSZXN0YXVyYW50KQ!5e0!3m2!1szh-TW!2stw!4v1756232484263!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)8773-0175', value: '+886-2-87730175' }],
    socialMedia: [
      {
        label: 'TAJ Indian Restaurant',
        value: 'https://www.facebook.com/TAJ.Indian/?locale=zh_TW',
      },
    ],
    address: ['1st Floor, No. 1, Lane 48, Section 4, Civic Boulevard, Daan District, Taipei City'],
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Zhongxiao Fuxing Station (BL 15)，Exit via Exit 5, walk along Section 1 of Fuxing South Road, then continue north on Fuxing North Road. Turn right onto Lane 79, Fuxing North Road, and proceed to No. 1.',
    distance: 'Approximately 10 km',
    rating: 'Google Maps 4.7⭐',
    certification: 'Halal Certified',
  },
  {
    name: 'Halal Beef Noodle Restaurant',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.6599331638145!2d121.50821017708465!3d25.04561227780893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90c5d084873%3A0x1100bf99d89ef9c6!2z5riF55yf6buD54mb6IKJ6bq16aSo!5e0!3m2!1szh-TW!2stw!4v1756750026901!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2331-8203', value: '+886-2-23318203' }],
    socialMedia: [
      {
        label: 'Halal Beef Noodle Restaurant',
        value: 'https://www.facebook.com/Yushan23318203/?locale=zh_TW',
      },
    ],
    address: ['No. 23, Yanping South Road, Zhongzheng District, Taipei City'],
    traffic:
      'Transportation suggestion：Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Ximen Station (BL 11), Exit via Exit 5, walk straight along Section 1 of Zhonghua Road, turn right onto Section 1 of Hankou Street, then turn left at the intersection with Yanping South Road and then proceed to No. 23.',
    distance: 'Approximately 13 km',
    rating: 'Google Maps 4.1⭐',
    certification: 'Halal Certified',
  },
  {
    name: 'Gusto Pizza',
    iframeKey: [
      'embed?pb=!1m18!1m12!1m3!1d3614.993932455979!2d121.52737547708458!3d25.03427997781619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9820b1f2095%3A0x7db2767efae8af3c!2sGusto%20Pizza!5e0!3m2!1szh-TW!2stw!4v1756750281799!5m2!1szh-TW!2stw',
    ],
    tel: [{ label: '(02)2358-7001', value: '+886-2-23587001' }],
    socialMedia: [
      {
        label: 'Gusto Pizza',
        value: 'https://www.facebook.com/gustopizzatw/?locale=zh_TW',
      },
    ],
    address: ['No. 23, Yanping South Road, Zhongzheng District, Taipei City'],
    traffic:
      'Take the Taipei Metro Bannan Line (Blue Line) from Nangang Exhibition Center Station (BL 23) to Zhongxiao Xinsheng Station (BL 14). Transfer to Zhonghe-Xinlu Line (Orange Line) and ride to Dongmen Station (O 06), Exit via Exit 6 and walk for about 2 minutes.',
    distance: 'Approximately 15 km',
    rating: 'Google Maps 4.6⭐',
    certification: 'Halal Certified',
  },
]

const data = computed(() => {
  return locale.value === 'en' ? muslimEn : muslim;
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

.host-muslim {
  .host-muslim-container {
    width: 12.8rem;
    margin: 0 auto;
  }
  .host-muslim__title {
    margin-bottom: 0.64rem;
  }
  .host-muslim__content {
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

      .card-map {
        width: 5.76rem;
        height: 100%;
        margin-right: 0.32rem;
        overflow: hidden;
        flex-shrink: 0;
        @include flexCenter(column);
        gap: 0.2rem;
        iframe {
          border-radius: 0.1rem;
          width: 100%;
          height: 3rem;
          object-fit: cover;
        }
      }
      .icon {
        width: 0.2rem;
        margin-top: 0.02rem;
      }
      .card-content {
        flex: 1;
        .card-title {
          font-size: map.get($font-size-title, pc);
          font-weight: 700;
        }
        .card-info {
          display: flex;
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
        .card-row {
          display: flex;
          align-items: center;
          align-items: flex-start;
          gap: 0.08rem;
          margin-bottom: 0.08rem;
        }
        .col {
          display: flex;
          flex-direction: column;
        }
      }
      .card-footer {
        padding: 0.16rem 0;
        border-top: 1px solid #f3f4f5;
        display: flex;
        flex-direction: column;
        .footer-title {
          color: #899ca4;
          margin-bottom: 0.08rem;
        }
      }
    }
  }
}
@include tablet {
  .host-muslim {
    .host-muslim-container {
      width: 100%;
    }
    .host-muslim__content {
      margin-bottom: 0.4rem;
      .card {
        width: 6.64rem;
        @include flexCenter(column);
        .card-content {
          flex: 1;
          width: 100%;
        }
        .card-map {
          margin: 0 auto;
          width: 100%;
        }
        .card-image {
          width: 100%;
          height: 100%;
          margin-right: 0;
          margin-bottom: 0.16rem;
        }
      }
    }
  }
}
@include mobile {
  .host-muslim {
    .host-muslim-container {
      width: 100%;
    }
    .host-muslim__content {
      padding: 0 0.16rem;
      gap: 0.2rem;
      .card {
        width: 100%;
        flex-direction: column-reverse;
        .card-map {
          width: 100%;
          margin: 0.16rem auto;
          iframe {
            width: 100%;
            height: 1.6rem;
          }
        }
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
        }
      }
    }
  }
}
@include listStyle();
</style>
