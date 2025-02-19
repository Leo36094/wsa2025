<script setup lang="ts">
import { ref } from 'vue'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuLink,
} from 'radix-vue'
import NavigationMenuListItem from './NavigationMenuListItem.vue'
import { useRouter } from 'vue-router'
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

const currentTrigger = ref('')
const offset = ref<number>(0)
const list = ref()

const triggerMap = {
  [props.nav[0].name]: 'radix-v-1',
  [props.nav[1].name]: 'radix-v-2',
  [props.nav[2].name]: 'radix-v-3',
  [props.nav[3].name]: 'radix-v-4',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onNodeUpdate(trigger: any, itemValue: NavItem) {
  if (trigger && props.nav.length && currentTrigger.value === triggerMap[itemValue.name]) {
    const listWidth = list.value.$el?.offsetWidth
    const listCenter = (listWidth as number) / 2
    const triggerOffsetRight =
      (listWidth as number) -
      trigger.$el.offsetLeft -
      trigger.$el.offsetWidth +
      trigger.$el.offsetWidth / 2

    offset.value = Math.round(listCenter - triggerOffsetRight)
  } else if (currentTrigger.value === '') {
    offset.value = 0
  }
  return trigger
}
function updateTrigger(value: string) {
  currentTrigger.value = value
}
const router = useRouter()
function goPage(path: string) {
  const baseUrl = `${window.location.origin}${import.meta.env.BASE_URL}`
  const fullPath = router.resolve(path).href
  window.open(`${baseUrl}${fullPath}`, '_blank')
}
function handleHashRoute(link: { name: string; path: string }, pageName: string) {
  const baseUrl = `${window.location.origin}${import.meta.env.BASE_URL}`
  const fullPath = router.resolve(pageName.toLowerCase()).href
  const newTab = `${baseUrl}${fullPath}${link.path || ''}`

  window.open(newTab, '_blank')
}
</script>

<template>
  <NavigationMenuRoot
    :value="currentTrigger"
    @update:model-value="updateTrigger"
    class="NavigationMenuRoot"
  >
    <NavigationMenuList ref="list" class="NavigationMenuList">
      <NavigationMenuItem v-for="item in props.nav" :key="item.name">
        <template v-if="item.subNav.length > 0">
          <NavigationMenuTrigger
            :ref="(node) => onNodeUpdate(node, item)"
            class="NavigationMenuTrigger"
            :aria-label="item.name"
          >
            {{ item.name }}
            <!-- <Icon icon="radix-icons:caret-down" class="CaretDown" v-if="item.subNav.length > 0" /> -->
          </NavigationMenuTrigger>
        </template>
        <template v-else>
          <NavigationMenuLink as="div" class="NavigationMenuLink" @click.stop="goPage(item.path)">
            {{ item.name }}
          </NavigationMenuLink>
        </template>
        <NavigationMenuContent v-if="item.subNav.length > 0" class="NavigationMenuContent">
          <ul class="List one">
            <NavigationMenuListItem
              v-for="link in item.subNav"
              :title="link.name"
              :key="link.name"
              @click.stop="handleHashRoute(link, item.path)"
            >
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>

    <div
      v-show="currentTrigger !== ''"
      class="ViewportPosition"
      :style="{ transform: `translateX(${offset}px)` }"
    >
      <NavigationMenuViewport class="NavigationMenuViewport" />
    </div>
  </NavigationMenuRoot>
</template>
<style lang="scss">
$hover-bg: #ffffff33;
$text-color: #101e24;
$dropdown-border-color: #899ca4;

/* reset */
button,
p {
  all: unset;
}

.NavigationMenuRoot {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
}

.NavigationMenuList {
  display: flex;
  justify-content: center;
  background-color: transparent;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  margin: 0;
  font-size: 0.18rem;
}

.NavigationMenuTrigger,
.NavigationMenuLink {
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  color: $text-color;
}
.NavigationMenuTrigger:focus,
.NavigationMenuLink:focus {
  background-color: $hover-bg;
  border-radius: 0.04rem;
}
.NavigationMenuTrigger:hover,
.NavigationMenuLink:hover {
  background-color: $hover-bg;
}

.NavigationMenuTrigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  cursor: pointer;
}

.NavigationMenuLink {
  display: block;
  text-decoration: none;
  line-height: 1;
}

.NavigationMenuContent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;
}
@media only screen and (min-width: 600px) {
  .NavigationMenuContent {
    width: auto;
    overflow: hidden;
  }
}

.NavigationMenuIndicator {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
  transition:
    width,
    transform 250ms ease;
}
.NavigationMenuIndicator[data-state='visible'] {
  animation: fadeIn 200ms ease;
}
.NavigationMenuIndicator[data-state='hidden'] {
  animation: fadeOut 200ms ease;
}

.NavigationMenuViewport {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: var(--radix-navigation-menu-viewport-height);
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  outline: 1px solid #899ca4;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  transition:
    width,
    height,
    300ms ease;
}
.NavigationMenuViewport[data-state='open'] {
  animation: scaleIn 200ms ease;
  border: 1px solid $dropdown-border-color;
}
.NavigationMenuViewport[data-state='closed'] {
  animation: scaleOut 200ms ease;
}
@media only screen and (min-width: 600px) {
  .NavigationMenuViewport {
    width: 2.06rem;
  }
}

.List {
  @include flexCenter(column);
  width: 2.06rem;
  font-size: 0.18rem;

  li {
    width: 100%;
    font-size: 0.18rem;
    cursor: pointer;
    @include flexCenter;
  }
}

.ListItemLink {
  display: block;
  outline: none;
  text-decoration: none;
  user-select: none;
  font-size: 0.16rem;
  padding: 0.16rem;
  line-height: 1;
  width: 100%;
  color: $black-primary;
  &:focus {
    box-shadow: 0 0 0 2px $white-bg;
    background-color: $white-bg;
  }
  &:hover {
    background-color: $white-bg;
    color: #101e24;
  }
}

.ViewportPosition {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100%;
  left: 0;
  perspective: 2000px;
}

.CaretDown {
  position: relative;
  color: #fff;
  top: 1px;
  transition: transform 250ms ease;
}
[data-state='open'] > .CaretDown {
  transform: rotate(-180deg);
}

.Arrow {
  position: relative;
  top: 70%;
  background-color: white;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
}

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
