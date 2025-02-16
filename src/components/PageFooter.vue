<template>
  <footer class="page-footer-wrapper">
    <div class="page-footer-container">
      <div class="page-footer">
        <div class="page-footer__row">
          <div class="row info contact-info">
            <div class="col contact-info__phone">
              <img class="icon" src="/images/ri_phone-fill.svg" alt="phone-icon" />
              <a href="tel:1234567890">+971 2 613 2000</a>
            </div>
            <div class="col contact-info__email">
              <img class="icon" src="/images/ri_mail-fill.svg" alt="mail-icon" />
              <a href="tel:1234567890">info@worldskillsasia.ae</a>
            </div>
            <div class="col address__street">
              <img class="icon" src="/images/ri_map-pin-fill.svg" alt="map-icon" />
              <span>{{ $t('footer.address') }}</span>
            </div>
          </div>
          <div class="social-media">
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
            <a class="col" href="https://www.instagram.com/wdagovtw/" target="_blank">
              <img
                class="social-media__icon"
                src="/images/Instagram_Glyph_White 1.svg"
                alt="instagram-icon"
                target="_blank"
              />
            </a>
            <a class="col" href="twitter.com/WorldSkillsAsia/" target="_blank">
              <img class="social-media__icon" src="/images/twitter.svg" alt="twitter-icon" />
            </a>
            <a class="col" href="https://line.me/R/ti/p/@153dnycq" target="_blank">
              <img class="social-media__icon" src="/images/LINE 1.png" alt="line-icon" />
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

    .social-media {
      margin-left: auto;
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
