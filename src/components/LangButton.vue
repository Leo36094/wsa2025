<template>
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
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { localeMessages } from '@/i18n'

import { useI18n } from 'vue-i18n'

const currentLangs = ref('en')

const { t, locale, setLocaleMessage } = useI18n({ useScope: 'global' })
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
$langs-bg: #00000033;
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
</style>
