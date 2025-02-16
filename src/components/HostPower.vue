<template>
  <div class="power" id="electricity">
    <div class="power-container">
      <aside>
        <div class="sitebar-light"></div>
        <div class="power-title">
          <h4>{{ $t('host.power_title') }}</h4>
          <p>{{ $t('host.power_desc') }}</p>
        </div>
        <div class="power-desc"></div>
      </aside>
      <div class="power-content">
        <div class="power-img"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.power {
  position: relative;
  .power-container {
    @include withContainer;
    padding: 0 0.8rem;
    display: flex;
    position: relative;
  }
  .sitebar-light {
    width: 5rem;
    height: 5rem;
    @include bgCenter(100%);
    background-image: url('/images/host/circle-yellow.png');
    position: absolute;
    top: -1.5rem;
    left: 0rem;
  }
  .power-title {
    width: 4.26rem;
    margin-right: 0.32rem;
    h4 {
      font-size: 0.36rem;
      font-weight: 700;
      margin-bottom: 0.32rem;
    }
    p {
      font-size: 0.16rem;
      font-weight: 400;
    }
  }
  .power-content {
    width: 8.21rem;
    height: 2.85rem;
    border-radius: 0.08rem;
    background-color: #fff;
    border: 0.01rem solid #18475b;
    overflow: hidden;
    @include flexCenter;
    .power-img {
      @include bgCenter(100% 100%);
      width: 5.775rem;
      height: 2.655rem;
      background-image: url('/images/wsa/host_section02_plug.png');
    }
  }
}
@include tablet {
  .power {
    .power-container {
      flex-direction: column;
      padding: 0 0.4rem;
    }
    .power-title {
      width: 100%;
      margin-right: 0;
      h4 {
        margin-bottom: 0;
      }
      p {
        margin: 0.32rem 0;
      }
    }
    .sitebar-light {
      width: 3rem;
      height: 3rem;
    }
    .power-content {
      width: 100%;
      .power-img {
        width: 4.6rem;
        height: 2.12rem;
      }
    }
  }
}
@include mobile {
  .power {
    margin: 0.56rem auto;
    .power-title {
      h4 {
        font-size: 0.24rem;
        line-height: normal;
      }
      p {
        font-size: 0.16rem;
        line-height: normal;
      }
    }
    .sitebar-light {
      display: none;
    }
    .power-content {
      width: 100%;
      height: 1.43rem;
      @include flexCenter;
      padding: 0.2rem;
      .power-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
