<template>
  <div class="host-currency">
    <div class="container">
      <aside class="column sidebar" :style="{ position: cancelSticky ? 'static' : 'sticky' }">
        <div class="sitebar-light"></div>
        <!-- 左邊的內容 -->
        <h4 class="currency-title">{{ $t('host.currency_title') }}</h4>
        <p class="currency-desc">{{ $t('host.currency_desc') }}</p>
      </aside>
      <div class="column right-panel">
        <!-- 右邊的內容 -->
        <div class="content">
          <div class="currency-table">
            <div class="row">
              <div class="col">
                <HostCurrencyCoin :label="$t('host.coin50')" :imgs="[coinImages[4]]" />
              </div>
              <div class="col">
                <HostCurrencyCoin :label="$t('host.coin20')" :imgs="[coinImages[3]]" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <HostCurrencyCoin :label="$t('host.coin10')" :imgs="[coinImages[2]]" />
              </div>
              <div class="col">
                <HostCurrencyCoin :label="$t('host.coin5')" :imgs="[coinImages[1]]" />
              </div>
              <div class="col">
                <HostCurrencyCoin :label="$t('host.coin1')" :imgs="[coinImages[0]]" />
              </div>
            </div>
          </div>
        </div>
        <div ref="lastCurrency" class="content">
          <div class="currency-table">
            <div class="row">
              <div class="col">
                <HostCurrencBill :label="$t('host.banknote2000')" :img="billImages[4]" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <HostCurrencBill :label="$t('host.banknote1000')" :img="billImages[3]" />
              </div>
              <div class="col">
                <HostCurrencBill :label="$t('host.banknote500')" :img="billImages[2]" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <HostCurrencBill :label="$t('host.banknote200')" :img="billImages[1]" />
              </div>
              <div class="col">
                <HostCurrencBill :label="$t('host.banknote100')" :img="billImages[0]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HostCurrencyCoin from './HostCurrencyCoin.vue'
import HostCurrencBill from './HostCurrencBill.vue'

const lastCurrency = ref<HTMLElement | null>(null)
const cancelSticky = ref(false)

const coinImages = [
  `${import.meta.env.BASE_URL}images/wsa/host_section02_1.png`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_5.png`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_10.png`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_20.png`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_50.png`,
]
const billImages = [
  `${import.meta.env.BASE_URL}images/wsa/host_section02_100.jpg`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_200.jpg`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_500.jpg`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_1000.jpg`,
  `${import.meta.env.BASE_URL}images/wsa/host_section02_2000.jpg`,
]

function handleScroll() {
  if (lastCurrency.value) {
    const { top } = lastCurrency.value.getBoundingClientRect()
    cancelSticky.value = top < 0
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="scss" scoped>
$border-color: #18475b;
.container {
  display: flex;
  @include withContainer;
  padding: 0 0.8rem;
  .column {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
.sitebar-light {
  width: 5rem;
  height: 5rem;
  @include bgCenter(100%);
  background-image: url('/images/host/circle-blue.png');
  position: absolute;
  top: -1.5rem;
  left: -0.9rem;
}
.sidebar {
  width: 4.26rem;
  color: #000;
  position: sticky;
  top: 2rem;
  color: #fff;
  margin-right: 0.32rem;
  h4 {
    font-size: 0.36rem;
    margin-bottom: 0.32rem;
  }
  p {
    font-size: 0.16rem;
  }
}

.right-panel {
  width: 8.21rem;
  height: 300vh;
}

.content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .currency-table {
    width: 100%;
    min-height: 3.38rem;
    border-radius: 0.08rem;
    overflow: hidden;
    .row {
      display: flex;
      &:not(:last-child) {
        border-bottom: 0.01rem solid $border-color;
      }
      .col {
        padding: 0.24rem;
        flex: 1;
        min-height: 1.6rem;
        background-color: #f5f5f5;
        @include flexCenter;
        &:not(:last-child) {
          border-right: 0.01rem solid $border-color;
        }
      }
    }
  }
  &--2 {
    background-color: red;
  }
  &--3 {
    background-color: blue;
  }
}
</style>
