<template>
  <div class="langs">
    <button
      :class="['langs-btn', { 'langs-btn--active': currentLang === lang.lang }]"
      @click.prevent="headerChangeLang(lang)"
      :key="lang.lang"
      v-for="lang in langBtns"
    >
      {{ lang.text }}
    </button>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { localeMessages } from '@/i18n'
import generalStore from '@/stores/general'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'

const { currentLang } = storeToRefs(generalStore())
const { locale, setLocaleMessage } = useI18n({ useScope: 'global' })
const { changeLang } = generalStore()
const { t } = useI18n({ useScope: 'global' })

const langBtns = computed(() => [
  { lang: 'en', text: t('header.lang_en'), message: localeMessages.en },
  { lang: 'tw', text: t('header.lang_tw'), message: localeMessages.tw },
])

function headerChangeLang(lang: {
  lang: string
  message: (typeof localeMessages)[keyof typeof localeMessages]
}) {
  changeLang(lang, { locale, setLocaleMessage })
}
</script>
<style lang="scss" scoped>
$langs-bg: $green-primary;
$wrapper-bg: #fafcf2;
.langs {
  min-width: 1.65rem;
  height: 0.5rem;
  border-radius: 1rem;
  background: $wrapper-bg;
  font-size: 0.16rem;
  @include flexCenter;
  .langs-btn {
    @include flexCenter;
    color: #000;
    width: auto;
    height: auto;
    border-radius: 1rem;
    line-height: normal;
    padding: 0.08rem;
    &--active {
      background-color: $langs-bg;
    }
  }
}
</style>
