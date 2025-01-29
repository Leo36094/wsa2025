<template>
  <div class="power">
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
        <img src="https://fakeimg.pl/410x140/" alt="power" />
      </div>
    </div>
  </div>
</template>
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
    background-image: url('/images/host/circle-blue.png');
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
    overflow: hidden;
    @include flexCenter;
  }
}
</style>
