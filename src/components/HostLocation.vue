<template>
  <main class="location" id="location" :aria-labelledby="`${$t('competition.location_title')}`">
    <article class="location-container" aria-labelledby="location-title">
      <div class="location-header">
        <h2 class="location-subtitle">
          {{ $t('competition.location_subtitle') }}
        </h2>
        <h3 class="location-title">
          {{ $t('competition.location_title') }}
        </h3>
      </div>

      <section class="info-bar" aria-label="Location Map">
        <iframe
          :src="currentMap"
          width="600"
          height="356"
          style="border: 0"
          class="info-bar__map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          aria-label="WorldSkills Asia Location Map"
          :title="$t('competition.location_title')"
        ></iframe>
        <div class="info-bar__desc-container">
          <div class="info-bar__desc" v-html="$t('competition.location_map_desc')"></div>

          <a
            class="info-bar__link"
            rel="noopener noreferrer"
            href="https://www.tainex.com.tw/"
            target="_blank"
            :aria-label="$t('host.location_visit_website')"
          >
            <img src="/images/ri_global-fill.svg" alt="map-pin" />
            {{ $t('host.location_visit_website') }}
          </a>
        </div>
      </section>

      <section class="info-bar" role="region" :aria-label="$t('competition.location_hall1')">
        <h3 id="halls-title" class="visually-hidden">{{ $t('competition.location_hall1') }}</h3>
        <div class="info-bar__img info-bar__img--hall1"></div>
        <div class="info-bar__detail">
          <div class="hall-info">
            <img class="hall-info__pin" src="/images/ri_map-pin-fill.svg" alt="map-pin" />
            <span>{{ $t('competition.location_hall1') }}</span>
          </div>
          <div class="location-row location-row--with-list">
            <div class="floor">1F</div>
            <div class="floor-name">
              {{ $t('competition.location_hall1_floor1') }}
              <ul class="floor-name__list">
                <li>{{ $t('competition.location_hall1_floor2_list1') }}</li>
                <li>{{ $t('competition.location_hall1_floor2_list2') }}</li>
                <li>{{ $t('competition.location_hall1_floor2_list3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="info-bar" role="region" :aria-label="$t('competition.location_hall2')">
        <div class="info-bar__img info-bar__img--hall2"></div>
        <div class="info-bar__detail">
          <div class="hall-info">
            <img class="hall-info__pin" src="/images/ri_map-pin-fill.svg" alt="map-pin" />
            <span>{{ $t('competition.location_hall2') }}</span>
          </div>
          <div class="location-row">
            <div class="floor">7F</div>
            <div class="floor-name">
              {{ $t('competition.location_hall2_floor1') }}
            </div>
          </div>
          <div class="location-row location-row--with-list">
            <div class="floor">4F</div>
            <div class="floor-name">
              {{ $t('competition.location_hall2_floor2') }}
              <ul class="floor-name__list">
                <li>{{ $t('competition.location_hall2_floor2_list1') }}</li>
                <li>{{ $t('competition.location_hall2_floor2_list2') }}</li>
              </ul>
            </div>
          </div>
          <div class="location-row location-row--with-list">
            <div class="floor">1F</div>
            <div class="floor-name">
              {{ $t('competition.location_hall2_floor3') }}
              <ul class="floor-name__list">
                <li>{{ $t('competition.location_hall2_floor3_list1') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const twMap =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3358992883273!2d121.61554097708489!3d25.056601877801867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab57f02092dd%3A0x87862fa2121f7e46!2z5Y-w5YyX5Y2X5riv5bGV6Ka96aSoMemkqA!5e0!3m2!1szh-TW!2stw!4v1738190342523!5m2!1szh-TW!2stw'
const enMap =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7228.671791369028!2d121.618116!3d25.056602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab57f02092dd%3A0x87862fa2121f7e46!2sTaipei%20Nangang%20Exhibition%20Center%20Hall%201!5e0!3m2!1sen!2stw!4v1739504746300!5m2!1sen!2stw'

const currentMap = computed(() => {
  return locale.value === 'en' ? enMap : twMap
})
</script>
<style lang="scss" scoped>
$title-color: #fb773c;
$pin-color: $green-primary;
.location {
  background: #fff;
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .location-container {
    @include withContainer;
    padding: 1.6rem 0;
    .location-header {
      font-weight: 700;
      margin: auto;
      text-align: center;
      margin-bottom: 0.8rem;
      .location-title {
        font-size: 0.48rem;
      }
      .location-subtitle {
        color: $title-color;
        font-size: 0.28rem;
      }
    }
    .info-bar {
      padding: 0.4rem;
      width: 12rem;
      min-height: 4.36rem;
      background: #f3f4f5;
      border-radius: 0.4rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 0.16rem;
      }
      .info-bar__map {
        max-width: 6rem;
        height: 3.56rem;
        @include bgCenter;
        flex-shrink: 0;
      }
      .info-bar__link {
        display: flex;
        align-items: center;
        margin-top: 0.16rem;
        font-size: 0.16rem;
        cursor: pointer;
        img {
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.08rem;
        }
      }
      .info-bar__desc-container {
        display: flex;
        flex-direction: column;
        margin-left: 0.3rem;
      }
      .info-bar__desc {
        font-size: 0.16rem;
      }
      .info-bar__img {
        width: 6rem;
        height: 3.56rem;
        @include bgCenter;
        background-image: url('https://fakeimg.pl/600x356/');
        &--hall1 {
          background-image: url('/images/wsa/host_section01_02.jpg');
        }
        &--hall2 {
          background-image: url('/images/wsa/competition_section01_07.jpg');
        }
      }
      .info-bar__detail {
        width: 5.04rem;
        min-height: 2.78rem;
        padding: 0.32rem 0.48rem;
      }
      .hall-info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.32rem;
        font-size: 0.16rem;
        &__pin {
          margin-right: 0.08rem;
        }
      }
    }
    .location-row {
      display: flex;
      align-items: center;
      font-size: 0.28rem;
      &:not(:last-child) {
        margin-bottom: 0.32rem;
      }
      &--with-list {
        align-items: flex-start;
      }
      .floor {
        width: 0.66rem;
        height: 0.5rem;
        background: $pin-color;
        border-radius: 1rem;
        @include flexCenter;
        font-weight: 700;
        color: #101e24;
        margin-right: 0.16rem;
        flex-shrink: 0;
        line-height: normal;
      }
      .floor-name {
        line-height: normal;
      }
      .floor-name__list {
        display: flex;
        flex-direction: column;
        list-style: inside;
        list-style-type: circle;
        padding-left: 0.16rem;
        margin-top: 0.04rem;
        color: $black-primary;
        line-height: normal;
        li {
          list-style-type: disc;
        }
        > * {
          font-size: 0.16rem;
        }
      }
    }
  }
}
@include tablet {
  .location {
    .location-container {
      padding: 1.6rem 0.4rem;
      .location-header {
        margin-bottom: 0.32rem;
        line-height: normal;
        .location-title {
          font-size: 0.36rem;
          margin-top: 0.08rem;
        }
        .location-subtitle {
          color: $title-color;
          font-size: 0.16rem;
        }
      }
      .info-bar {
        width: 100%;
        flex-direction: column;
        height: auto;
        &__map {
          width: 5.84rem;
          height: 3.56rem;
          margin-bottom: 0.24rem;
        }
        .info-bar__desc {
          margin-left: 0;
        }
        .info-bar__detail {
          margin-top: 0.32rem;
          width: 100%;
          padding: 0;
          min-height: 100%;
        }
      }
    }
  }
}

@include mobile {
  .location {
    .location-container {
      padding: 0.8rem 0;
      .location-header {
        padding: 0 0.24rem;
        margin-bottom: 0.24rem;
        .location-title {
          font-size: 0.24rem;
          margin-top: 0.08rem;
        }
        .location-subtitle {
          color: $title-color;
          font-size: 0.16rem;
        }
      }
      .info-bar {
        width: 100%;
        flex-direction: column;
        height: auto;
        padding: 0.24rem;
        &__map {
          width: 2.72rem;
          height: 1.53rem;
          margin-bottom: 0.16rem;
        }
        .info-bar__desc-container {
          margin-left: 0;
          text-align: left;
        }
        .info-bar__img {
          width: 2.72rem;
          height: 1.53rem;
        }
        .info-bar__detail {
          margin-top: 0.16rem;
        }
      }
      .location-row {
        &:not(:last-child) {
          margin-bottom: 0.16rem;
        }
        .floor {
          width: 0.45rem;
          height: 0.27rem;
          font-size: 0.16rem;
          margin-right: 0.16rem;
        }
        .floor-name {
          font-size: 0.16rem;
        }
        .floor-name__list {
          li {
            font-size: 0.12rem;
          }
        }
      }
    }
  }
}
</style>
