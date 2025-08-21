<template>
  <section class="host-traffic" :aria-labelledby="$t('host.traffic_title')">
    <div class="host-traffic-container">
      <BaseTitle class="host-traffic__title" :title="$t('host.traffic_title')" />
      <div class="host-traffic__content">
        <div class="host-traffic__content-item">
          <h2 class="content-item-title">大眾交通運輸</h2>
          <div class="content-item-desc">
            <div class="block">
              <h3 class="block-title">🚆 1. 捷運</h3>
              <div class="block-content">
                <p>站名：南港展覽館</p>
                <p>路線：板南線（藍線、BL23）、文湖線（棕線、BR24）</p>
                <p>車站出入口：</p>
                <div class="block-img">
                  <img src="https://web.metro.taipei/img/ALL/Route2200/031.jpg" alt="車站出入口" />
                </div>
              </div>
            </div>
            <div class="block">
              <h3 class="block-title">🚲 2. YouBike</h3>
              <div class="block-content">
                <div class="row-headers">
                  <div class="col">站點</div>
                  <div class="col">位置</div>
                  <div class="col">Google Map</div>
                  <div class="col">站點地圖</div>
                </div>
                <div class="row">
                  <div class="col">南港展覽館2館</div>
                  <div class="col">台北市南港區經貿二路1號</div>
                  <div class="col">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.3698692221965!2d121.61645999999999!3d25.05545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE5LjYiTiAxMjHCsDM2JzU5LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1755716803948!5m2!1szh-TW!2stw"
                      width="600"
                      height="450"
                      style="border: 0"
                      allowfullscreen="true"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div class="col">
                    <a href="https://reurl.cc/nYvM8v" target="_blank">點我查看</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { SECTION_ID } from '@/types/page_section'
import BaseTitle from '@/components/BaseTitle.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { locale } = useI18n()
</script>

<style lang="scss" scoped>
$block-bg-color: #fafcf2;

.host-traffic {
  .host-traffic-container {
    width: 14.4rem;
    margin: 0 auto;
  }
  .host-traffic__content {
    margin-top: 1.35rem;
    .host-traffic__content-item {
      @include flexCenter(column);
      .content-item-title {
        margin-right: 0.45rem;
        width: 4.26rem;
        flex-shrink: 0;
        align-self: flex-start;
      }
      .content-item-desc {
        @include flexCenter(column);
        max-width: 7.25rem;
      }
    }
  }
}
.block {
  width: 100%;
  .block-img {
    width: 100%;
    height: 4rem;
    display: flex;
    img {
      object-fit: contain;
    }
  }
  .row-headers {
    display: flex;
    .col {
      flex: 1;
    }
  }
  .row {
    display: flex;
    .col {
      flex: 1;
    }
  }
}
@include tablet {
}
@include mobile {
}
@include listStyle();
</style>
