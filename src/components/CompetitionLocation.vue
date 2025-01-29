<template>
  <div class="location">
    <div class="location-container">
      <header>
        <h4 class="location-subtitle">
          {{ $t('competition.location_subtitle') }}
        </h4>
        <h2 class="location-title">
          {{ $t('competition.location_title') }}
        </h2>
      </header>
      <div class="info-bar">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3358992883273!2d121.61554097708489!3d25.056601877801867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab57f02092dd%3A0x87862fa2121f7e46!2z5Y-w5YyX5Y2X5riv5bGV6Ka96aSoMemkqA!5e0!3m2!1szh-TW!2stw!4v1738190342523!5m2!1szh-TW!2stw"
          width="600"
          height="356"
          style="border: 0"
          class="info-bar__map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p class="info-bar__desc">
          {{ $t('competition.location_map_desc') }}
        </p>
      </div>
      <div class="info-bar">
        <div class="info-bar__img"></div>
        <div class="info-bar__detail">
          <div class="hall-info">
            <img class="hall-info__pin" src="/images/ri_map-pin-fill.svg" alt="map-pin" />
            <span>{{ $t('competition.location_hall1') }}</span>
          </div>
          <div class="location-row">
            <div class="floor">4F</div>
            <div class="floor-name">
              {{ $t('competition.location_hall1_floor1') }}
            </div>
          </div>
          <div class="location-row location-row--with-list">
            <div class="floor">1F</div>
            <div class="floor-name">
              {{ $t('competition.location_hall1_floor2') }}
              <ul class="floor-name__list">
                <li>{{ $t('competition.location_hall1_floor2_list1') }}</li>
                <li>{{ $t('competition.location_hall1_floor2_list2') }}</li>
                <li>{{ $t('competition.location_hall1_floor2_list3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="info-bar">
        <div class="info-bar__img"></div>
        <p class="info-bar__detail">
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
                <li>{{ $t('competition.location_hall2_floor3_list2') }}</li>
              </ul>
            </div>
          </div>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
$title-color: #ebd63b;
$pin-color: #c8e14b;
.location {
  .location-container {
    @include withContainer;
    header {
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
      height: 4.36rem;
      background: #00000033;
      border-radius: 0.4rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 0.16rem;
      }
      &:last-child {
        margin-bottom: 1.2rem;
      }
      .info-bar__map {
        max-width: 6rem;
        height: 3.56rem;
        @include bgCenter;
        flex-shrink: 0;
      }
      .info-bar__desc {
        font-size: 0.16rem;
        margin-left: 0.3rem;
      }
      .info-bar__img {
        width: 6rem;
        height: 3.56rem;
        @include bgCenter;
        background-image: url('https://fakeimg.pl/600x356/');
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
        &__pin {
          margin-right: 0.08rem;
        }
        font-size: 0.16rem;
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
      }
      .floor-name__list {
        display: flex;
        flex-direction: column;
        list-style: inside;
        list-style-type: circle;
        padding-left: 0.16rem;
        margin-top: 0.04rem;
        li {
          list-style-type: circle;
        }
        > * {
          font-size: 0.12rem;
          color: #899ca4;
        }
      }
    }
  }
}
</style>
