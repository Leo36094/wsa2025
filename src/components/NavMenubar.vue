<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MenubarContent, MenubarItem, MenubarMenu, MenubarRoot, MenubarTrigger } from 'radix-vue'

const currentMenu = ref('')
type NavItem = {
  name: string
  path: string
  subNav: {
    name: string
    path: string
  }[]
}
const props = defineProps<{
  nav: NavItem[]
}>()

const openMenu = ref(false)

const createFullPath = (path: string) => {
  const baseUrl = `${window.location.origin}${import.meta.env.BASE_URL}`
  return `${baseUrl.replace(/\/$/, '')}${path}`
}

function goPage(path: string) {
  const pageURL = createFullPath(path)
  window.open(pageURL, '_blank')
}
function handleHashRoute(link: { name: string; path: string }, pageName: string) {
  const hashPath = pageName.toLowerCase()
  const pageURL = createFullPath(hashPath)
  const newTab = `${pageURL}${link.path || ''}`
  window.open(newTab, '_blank')
}
function handleTriggerClick(item: NavItem) {
  if (!item.subNav.length) {
    goPage(item.path)
  }
}
function handleOpenChange(item: NavItem) {
  currentMenu.value = item.name
  openMenu.value = true
}
function handleMenuLeave() {
  currentMenu.value = ''
  openMenu.value = false
}
onMounted(() => {
  openMenu.value = false
  currentMenu.value = ''
})
</script>

<template>
  <MenubarRoot
    id="menubar"
    :value="openMenu"
    @update:model-value="openMenu = $event"
    class="menubar MenubarRoot"
  >
    <MenubarMenu :value="item.name" v-for="item in props.nav" :key="item.name">
      <MenubarTrigger
        class="MenubarTrigger"
        @click="handleTriggerClick(item)"
        @mouseover="handleOpenChange(item)"
      >
        {{ item.name }}
      </MenubarTrigger>
      <MenubarContent
        v-show="item.subNav.length"
        @mouseleave="handleMenuLeave()"
        class="MenubarContent"
        align="start"
      >
        <MenubarItem
          v-for="link in item.subNav"
          :key="link.name"
          class="MenubarItem"
          @click.stop="handleHashRoute(link, item.path)"
        >
          {{ link.name }}
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </MenubarRoot>
</template>
<style lang="scss">
@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/grass.css';
$menu-hover-color: #f3f4f5;
.MenubarRoot.menubar {
  position: relative;
  z-index: 20;
  display: flex;
  background-color: transparent;
}
.MenubarTrigger {
  padding: 0.12rem 0.16rem;
  outline: none;
  user-select: none;
  font-weight: 700;
  line-height: 1;
  border-radius: 4px;
  color: $black-primary;
  font-size: 0.16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.08rem;
}
#menubar [data-radix-menu-portal] {
  z-index: 10;
}

.MenubarTrigger:hover {
  background-color: $menu-hover-color;
  filter: brightness(1);
}
.MenubarTrigger[data-highlighted],
.MenubarTrigger[data-state='open'] {
  background-color: $menu-hover-color;
}

.MenubarContent {
  min-width: 2rem;
  background-color: white;
  border-radius: 0.04rem;
  font-size: 0.16rem;
  border: 1px solid #899ca4;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.MenubarItem,
.MenubarSubTrigger,
.MenubarCheckboxItem,
.MenubarRadioItem {
  all: unset;
  font-size: 0.16rem;
  line-height: normal;
  color: $black-primary;
  display: flex;
  align-items: center;
  padding: 0.16rem;
  position: relative;
  font-weight: 400;
  user-select: none;
  cursor: pointer;
}

.MenubarItem[data-state='open'],
.MenubarSubTrigger[data-state='open'] {
  background-color: $menu-hover-color;
}

.MenubarItem[data-highlighted],
.MenubarSubTrigger[data-highlighted],
.MenubarCheckboxItem[data-highlighted],
.MenubarRadioItem[data-highlighted] {
  background: $menu-hover-color;
}

.MenubarItem[data-disabled],
.MenubarSubTrigger[data-disabled],
.MenubarCheckboxItem[data-disabled],
.MenubarRadioItem[data-disabled] {
  color: var(--mauve-8);
  pointer-events: none;
}
</style>
