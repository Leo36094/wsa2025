<template>
  <header class="page-header">
    <div class="wrapper">
      <router-link to="/" class="logo">
        <IconLogo />
      </router-link>
      <nav class="nav-links-pc">
        <router-link v-for="navItem in nav" :key="navItem.name" :to="navItem.path">{{
          navItem.name
        }}</router-link>
      </nav>
      <LangButton class="langs-pc" />
      <div :class="['hamburger-btn', { active: isMenuOpen }]" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div :class="['sidebar-menu', { active: isMenuOpen }]">
        <div class="sidebar-menu-inner">
          <div class="sidebar-links">
            <a
              class="link-item"
              v-for="navItem in nav"
              :key="navItem.name"
              @click="goRouteLink(navItem.path)"
            >
              {{ navItem.name }}
            </a>
          </div>
          <LangButton class="sidebar-langs" />
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import LangButton from './LangButton.vue'
import IconLogo from '@/components/icons/IconLogo.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const router = useRouter()
const nav = computed(() => [
  { name: t('header.host'), path: '/host' },
  { name: t('header.competition'), path: '/competition' },
  { name: t('header.skill'), path: '/skills' },
  { name: t('header.involved'), path: '/get-involved' },
  { name: t('header.news'), path: '/news' },
])

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
function goRouteLink(path: string) {
  isMenuOpen.value = false
  router.push(path)
}
</script>
<style lang="scss" scoped>
$header-bg: #07100e;

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
    .sidebar-menu {
      display: none;
    }
    .hamburger-btn {
      display: none;
    }
  }
}
@include tablet {
  .page-header {
    height: 0.76rem;
    max-width: 7.44rem;
    .wrapper {
      padding: 0.06rem 0.16rem;
      .nav-links-pc,
      .langs-pc {
        display: none;
      }
      .hamburger-btn {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        z-index: 5;
        height: 0.2rem;
        .bar {
          transition: all 0.3s ease;
          width: 0.24rem;
          height: 0.02rem;
          background-color: #fff;
        }
        &.active {
          .bar {
            &:nth-child(1) {
              transform: rotate(45deg) translate(0.075rem, 0.08rem);
            }
            &:nth-child(2) {
              opacity: 0;
            }
            &:nth-child(3) {
              transform: rotate(-45deg) translate(0.05rem, -0.05rem);
            }
          }
        }
      }
      .sidebar-menu {
        width: 6.8rem;
        overflow: auto;
        background-color: #18475b;
        position: absolute;
        top: 0;
        height: 100svh;
        transition: all 0.3s ease;
        transform: translateX(100%);
        right: 0;
        display: block;
        &.active {
          transform: translateX(0%);
        }
        .sidebar-menu-inner {
          padding-top: 0.76rem;
          height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 0.4rem;
          .sidebar-links {
            display: flex;
            flex-direction: column;
            .link-item {
              padding: 0.16rem 0.4rem;
              font-size: 0.28rem;
              font-weight: 700;
              line-height: 0.33rem;
            }
          }
          .sidebar-langs {
            width: 1.65rem;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
@include mobile {
  .page-header {
    .wrapper {
      .sidebar-menu {
        width: 2.96rem;
      }
    }
  }
}
</style>
