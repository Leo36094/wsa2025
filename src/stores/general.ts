import { localeMessages } from '@/i18n'
import { defineStore } from 'pinia'
import { type Ref } from 'vue'

export type LocaleLang = {
  lang: string
  message: (typeof localeMessages)[keyof typeof localeMessages]
}
type GeneralState = {
  currentLang: string
}


const generalStore = defineStore('general', {
  state: (): GeneralState => {
    return {
      currentLang: 'en',
    }
  },
  actions: {
    changeLang(lang: LocaleLang, i18nCallback: {
      locale: Ref<string>
      setLocaleMessage: (lang: string, message: (typeof localeMessages)[keyof typeof localeMessages]) => void
    }) {
      // const { locale, setLocaleMessage } = useI18n({ useScope: 'global' })
      this.currentLang = lang.lang
      i18nCallback.setLocaleMessage(lang.lang, lang.message)
      i18nCallback.locale.value = lang.lang
      localStorage.setItem('lang', lang.lang)
    }
  },
})

export default generalStore;
