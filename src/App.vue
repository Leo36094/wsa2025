<script setup lang="ts">
import { ref, provide } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import { localeMessages } from '@/i18n'
import generalStore from '@/stores/general'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import { useI18n } from 'vue-i18n'
const isDesktop = ref(false)
const isMobile = ref(false)

const { locale, setLocaleMessage } = useI18n({ useScope: 'global' })
const { changeLang } = generalStore()

function checkIsDesktop() {
  isDesktop.value = window.innerWidth > 1024
  isMobile.value = Boolean(window.innerWidth < 745)
}

provide('isDesktop', isDesktop)
provide('isMobile', isMobile)
onMounted(() => {
  const storageLang = localStorage.getItem('lang')
  if (storageLang === 'tw') {
    changeLang({ lang: storageLang, message: localeMessages.tw }, { locale, setLocaleMessage })
  } else {
    changeLang({ lang: 'en', message: localeMessages.en }, { locale, setLocaleMessage })
  }
  // set HTML lang
  document.documentElement.lang = locale.value === 'tw' ? 'zh-TW' : 'en'
  AOS.init()
  checkIsDesktop()
  window.addEventListener('resize', checkIsDesktop)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkIsDesktop)
})
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>
