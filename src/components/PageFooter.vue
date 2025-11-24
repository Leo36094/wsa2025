<template>
  <footer class="page-footer-wrapper">
    <div class="page-footer-container">
      <div class="page-footer">
        <div class="page-footer__row">
          <div class="row info contact-info">
            <div class="col contact-info__phone">
              <img class="icon" src="/images/ri_phone-fill.svg" alt="phone-icon" />
              <a href="tel:+97126132000">+971 2 613 2000</a>
            </div>
            <div class="col contact-info__email">
              <img class="icon" src="/images/ri_mail-fill.svg" alt="mail-icon" />
              <a href="mailto:secretariat@worldskillsasia.ae">secretariat@worldskillsasia.ae</a>
            </div>
            <div class="col address__street">
              <img class="icon" src="/images/ri_map-pin-fill-white.svg" alt="map-icon" />
              <span class="link" @click="goVenueMap">{{ $t('footer.address') }}</span>
            </div>
          </div>
          <div class="social-media-group">
            <div class="social-media">
              <a class="col" href="https://www.wda.gov.tw/" target="_blank">
                <img class="social-media__icon wda" src="/images/labor_logo.png" alt="wda-icon" />
              </a>
              <a
                class="col"
                href="https://www.facebook.com/share/12EaRgmYZyx/?mibextid=wwXIfr"
                target="_blank"
              >
                <img
                  class="social-media__icon facebook"
                  src="/images/ri_facebook-circle-fill.svg"
                  alt="facebook-icon"
                />
              </a>
              <a class="col" href="https://www.instagram.com/worldskillsasia/" target="_blank">
                <img
                  class="social-media__icon"
                  src="/images/Instagram_Glyph_White 1.svg"
                  alt="instagram-icon"
                  target="_blank"
                />
              </a>
              <a class="col" href="https://twitter.com/WorldSkillsAsia/" target="_blank">
                <img class="social-media__icon" src="/images/twitter.svg" alt="twitter-icon" />
              </a>
              <a class="col" href="https://line.me/R/ti/p/@153dnycq" target="_blank">
                <img class="social-media__icon" src="/images/line-icon.png" alt="line-icon" />
              </a>
            </div>
            <!-- PDF DOWNLOAD LINK -->
            <a
              class="pdf-download-link"
              href="/files/WSATaipei2025_Brand Guideline_V2.pdf"
              target="_blank"
            >
              <img
                class="social-media__icon"
                src="/images/ic_outline-file-download.png"
                alt="pdf-icon"
              />
              {{ $t('footer.download_brandbook') }}
            </a>
          </div>
        </div>
        <div class="copyrights">
          {{ $t('footer.copyrights') }}
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goVenueMap = async () => {
  // 先跳轉到 competition tab
  await router.push('/competition#competition')

  // 短暫延遲後修改 hash 為地圖位置，讓瀏覽器自動滾動
  setTimeout(() => {
    window.location.hash = '#venue-map'
  }, 100)
}
</script>
<style lang="scss" scoped>
.page-footer-wrapper {
  background-color: #180161;
  padding: 0.4rem 1.3rem;
}
.page-footer-container {
  @include withContainer;
}
.page-footer {
  font-size: 0.16rem;
  color: #fff;
  .icon {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.08rem;
  }
  .link {
    cursor: pointer;
  }
  .row {
    @include flexCenter(column);
    align-items: flex-start;
    > * {
      &:not(:last-child) {
        margin-bottom: 0.16rem;
      }
    }
  }
  .col {
    @include flexCenter;
  }
  &__row {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    .info {
      margin-right: 0.72rem;
    }
    .social-media-group {
      margin-left: auto;
      .pdf-download-link {
        display: flex;
        align-items: center;
        margin-top: 0.24rem;
        img {
          margin-right: 0.08rem;
          width: 0.24rem;
          height: 0.24rem;
        }
      }
    }
    .social-media {
      @include flexCenter;
      .col {
        &:not(:last-child) {
          margin-right: 0.24rem;
        }
      }
      &__icon {
        width: 0.32rem;
        height: 0.32rem;
        &.facebook {
          width: 0.4rem;
          height: 0.4rem;
        }
        &.wda {
          width: 0.38rem;
          height: 0.38rem;
        }
      }
    }
  }
  .copyrights {
    margin: auto;
    @include flexCenter;
    margin-top: 0.74rem;
  }
}
@include tablet {
  .page-footer-wrapper {
    padding: 0.4rem 0 0.21rem 0.48rem;
  }
  .page-footer {
    &__row {
      flex-direction: column;
      .info {
        margin-right: 0;
      }
    }
    .col {
      margin-bottom: 0.21rem;
    }
    .row.address {
      margin-bottom: 0.56rem;
      margin-right: 0;
    }
    .social-media-group {
      margin: 0;
      width: 100%;
      .pdf-download-link {
        justify-content: center;
        margin-top: 0.16rem;
        width: 100%;
      }
    }
    .social-media {
      width: 100%;
      .col {
        margin-bottom: 0;
      }
    }
    .copyrights {
      margin-top: 0.16rem;
    }
  }
}
@include mobile {
  .page-footer-wrapper {
    padding-left: 0.24rem;
    padding-right: 0.24rem;
  }
  .page-footer {
    .contact-info {
      .col {
        margin-bottom: 0.16rem;
      }
    }
    .row.address {
      margin-bottom: 0.4rem;
      .col {
        margin-bottom: 0;
      }
    }
    .external-links {
      .col {
        margin-bottom: 0.16rem;
      }
    }
  }
}
</style>
