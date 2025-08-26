<template>
  <section class="host-vegan" :aria-labelledby="$t('host.vegan_title')" id="vegan">
    <div class="host-vegan-container">
      <BaseTitle class="host-vegan__title" :title="$t('host.vegan_title')" />
      <div class="host-vegan__content">
        <div class="card" v-for="item in tourist" :key="item.name">
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

            <div class="card-footer card-group">
              <div class="footer-title">交通建議:</div>
              <div class="footer-content">{{ item.traffic }}</div>
            </div>
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
    name: '蔬醒- LaLaport 南港店 (Vege Burger)',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.2567753901244!2d121.61521352708488!3d25.059284677800004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad4379c692c3%3A0x4ed6272bd46b3d74!2z6JSs6YaSbGFsYXBvcnQg5Y2X5riv5bqX!5e0!3m2!1szh-TW!2stw!4v1756224466101!5m2!1szh-TW!2stw',
    // dump image 300 x 400
    imageUrl: 'https://dummyimage.com/576x346/000/fff',
    tel: { label: '(02)2782-0028', value: '+886-2-27820028' },
    socialMedia: [
      {
        label: '蔬醒 Vege Burger',
        value: 'https://www.facebook.com/profile.php?id=100064126631354',
      },
    ],
    address: '台北市南港區經貿二路131號B1美食街(LaLaport)',
    traffic: '從南港展覽館1館步行約3分鐘。',
    distance: '約0.05公里',
    rating: 'Google Maps 4.6⭐',
  },
  {
    name: 'PRESERVE - LaLaport 南港店',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.255001507171!2d121.6127115931259!3d25.059344820559136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad006ef51493%3A0x8885032af80d723a!2zUFJFU0VSVkUgTGFMYXBvcnQg5Y2X5riv5bqX!5e0!3m2!1szh-TW!2stw!4v1756224620926!5m2!1szh-TW!2stw',
    imageUrl: 'https://dummyimage.com/576x346/000/fff',
    tel: { label: '(02)2786-3757', value: '+886-2-27863757' },
    socialMedia: [
      {
        label: 'VEGE CREEK 蔬河',
        value: 'https://www.facebook.com/VEGECREEK',
      },
    ],
    address: '台北市南港區經貿二路131號1樓(LaLaport)',
    traffic: '從南港展覽館1館步行約3分鐘',
    distance: '約0.05公里',
    rating: 'Google Maps 4.7⭐',
  },
  {
    name: '太陽蕃茄拉麵- LaLaport 南港店',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.254999818876!2d121.61500757708504!3d25.059344877800008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9a034a87f09%3A0xdf41d989a697ede1!2z5aSq6Zm96JWD6IyE5ouJ6bq1IOWNl-a4r0xhTGFwb3J0!5e0!3m2!1szh-TW!2stw!4v1756227859099!5m2!1szh-TW!2stw',
    imageUrl: 'https://dummyimage.com/576x346/000/fff',
    tel: { label: '(02)2653-6786', value: '+886-2-26536786' },
    socialMedia: [
      {
        label: '太陽蕃茄拉麵 Taiyotomato 臺灣本部 ',
        value: 'https://www.facebook.com/Taiyotomato.tw',
      },
    ],
    address: '台北市南港區經貿二路131號5樓(LaLaport)',
    traffic: '從南港展覽館1館步行約3分鐘',
    distance: '約0.05公里',
    rating: 'Google Maps 4.1⭐',
  },
  {
    name: '尊上食坊',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.3700868437095!2d121.60959799312532!3d25.05544262056806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab585c30ca6d%3A0xd21073dc5fe5c542!2z5bCK5LiK6aOf5Z2K!5e0!3m2!1szh-TW!2stw!4v1756228066122!5m2!1szh-TW!2stw',
    imageUrl: 'https://dummyimage.com/576x346/000/fff',
    tel: { label: '(02)2782-5167', value: '+886-2-27825167' },
    socialMedia: [
      {
        label: '尊上食坊',
        value: 'https://www.facebook.com/p/%E5%B0%8A%E4%B8%8A%E9%A3%9F%E5%9D%8A-100052003945520/',
      },
    ],
    address: '台北市南港區南港路一段84號',
    traffic: '從南港展覽館1館步行約5分鐘。',
    distance: '約0.35公里',
    rating: 'Google Maps 4.4⭐',
  },
  {
    name: '蔬河-南港中信店 (Café VEGE CREEK)',
    mapUrl: 'https://maps.app.goo.gl/TuqfKHHtrmTbKB9YA',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d3614.270732067023!2d121.61256977708484!3d25.058811477800482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad2691279027%3A0x6d0f2c2a09656e0f!2zVkVHRSBDUkVFS-iUrOaysyDljZfmuK_kuK3kv6Hlupc!5e0!3m2!1szh-TW!2stw!4v1756228191329!5m2!1szh-TW!2stw',
    imageUrl: 'https://dummyimage.com/576x346/000/fff',
    tel: { label: '(02)2785-0508', value: '+886-2-27850508' },
    socialMedia: [
      {
        label: 'VEGE CREEK 蔬河',
        value: 'https://www.facebook.com/VEGECREEK',
      },
    ],
    address: `台北市南港區經貿二路186-1號C棟2樓`,
    traffic: '沿著經貿二路前進，途經106巷左轉，總共步行約5分鐘。',
    distance: '約1公里',
    rating: 'Google Maps 4.3⭐',
  },
  {
    name: 'Harbor Market Cafe',
    iframeKey:
      'embed?pb=!1m18!1m12!1m3!1d225.90673971549447!2d121.59409822233884!3d25.050771229289357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab7002140f4d%3A0xf4b5ec7af33b9a97!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5b-g5a2d5p2x6Lev5YWt5q61NDY1LTHomZ8!5e0!3m2!1szh-TW!2stw!4v1756228442715!5m2!1szh-TW!2stw',
    imageUrl: 'https://dummyimage.com/576x346/000/fff',
    tel: { label: '(02)2783-1272', value: '+886-2-27831272' },
    socialMedia: [
      {
        label: 'Harbor Market Cafe',
        value: 'https://www.facebook.com/harbormarkettw/',
      },
    ],
    address: '台北市南港區忠孝東路六段465-1號',
    traffic:
      '從「捷運南港展覽館站(BL23)」搭乘捷運板南線(藍線)至「昆陽站(BL21)」，3號出口出站步行約1分鐘即可抵達。',
    distance: '約7公里',
    rating: 'Google Maps 4.5⭐'
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

.host-vegan {
  margin-top: 2.4rem;
  .host-vegan-container {
    width: 12.8rem;
    margin: 0 auto;
  }
  .host-vegan__title {
    margin-bottom: 0.64rem;
  }
  .host-vegan__content {
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
          font-size: map-get($font-size-title, pc);
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
          font-size: map-get($font-size-info, pc);
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
          color: #899ca4;
          margin-bottom: 0.08rem;
        }
      }
    }
  }
}
@include tablet {
  .host-vegan {
    .host-vegan-container {
      width: 100%;
    }
    .host-vegan__content {
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
  .host-vegan {
    .host-vegan-container {
      width: 100%;
    }
    .host-vegan__content {
      padding: 0 0.16rem;
      gap: 0.2rem;
      .card {
        width: 100%;
        .card-content {
          .card-title {
            text-align: center;
            font-size: map-get($font-size-title, mobile);
            margin: 0.04rem 0;
          }
          .card-info {
            font-size: map-get($font-size-info, mobile);
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
