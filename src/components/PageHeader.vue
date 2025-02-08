<template>
  <header class="page-header">
    <div class="wrapper">
      <router-link to="/" class="logo">
        <IconLogo />
      </router-link>
      <nav>
        <router-link v-for="navItem in nav" :key="navItem.name" :to="navItem.path">{{
          navItem.name
        }}</router-link>
      </nav>
      <div class="langs">
        <button
          :class="['langs-btn', { 'langs-btn--active': currentLangs === lang.lang }]"
          @click.prevent="changeLang(lang)"
          :key="lang.lang"
          v-for="lang in langBtns"
        >
          {{ lang.text }}
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { localeMessages } from '@/i18n'
import IconLogo from '@/components/icons/IconLogo.vue'

import { useI18n } from 'vue-i18n'

const currentLangs = ref('en')

const { t, locale, setLocaleMessage } = useI18n({ useScope: 'global' })

const nav = computed(() => [
  { name: t('header.host'), path: '/host' },
  { name: t('header.competition'), path: '/competition' },
  { name: t('header.skill'), path: '/skills' },
  { name: t('header.involved'), path: '/get-involved' },
  { name: t('header.news'), path: '/news' },
])

type LangBtn = {
  lang: string
  text: string
  message: (typeof localeMessages)[keyof typeof localeMessages]
}

const langBtns = computed(() => [
  { lang: 'en', text: t('header.lang_en'), message: localeMessages.en },
  { lang: 'tw', text: t('header.lang_tw'), message: localeMessages.tw },
])

function changeLang(lang: LangBtn) {
  currentLangs.value = lang.lang
  setLocaleMessage(lang.lang, lang.message)
  locale.value = lang.lang
}
</script>
<style lang="scss" scoped>
$header-bg: #07100e;
$langs-bg: #00000033;
.page-header {
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 100;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $container-width;
    margin: auto;
    min-height: 0.76rem;
    padding-left: 1.04rem;
    padding-right: 1.06rem;
    font-size: 0.16rem;
    .logo {
      width: 1.1rem;
      height: 0.63rem;
      @include flexCenter;
    }
    nav {
      @include flexCenter;
      font-weight: bold;
      > a:not(:last-child) {
        margin-right: 0.4rem;
      }
    }
    .langs {
      min-width: 1.65rem;
      height: 0.5rem;
      border-radius: 1rem;
      background-color: $langs-bg;
      @include flexCenter;
      .langs-btn {
        @include flexCenter;
        color: #fff;
        width: auto;
        height: 0.35rem;
        background: transparent;
        border-radius: 1rem;
        padding: 0.08rem;
        color: #899ca4;
        &--active {
          color: #fff;
          border: 1px solid #fff;
        }
      }
    }
  }
}
</style>
