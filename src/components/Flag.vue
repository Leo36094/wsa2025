<template>
  <a class="flag-wrapper" :href="link" target="_blank" :aria-label="name">
    <div class="flag" ref="flagRef" @mouseenter="isWaving = true" @mouseleave="isWaving = false">
      <!-- Waving flag -->
      <div v-if="isWaving && waving" class="flag-container">
        <div
          v-for="i in flagWidth"
          :key="i"
          :class="['flag-img', 'flag-waving', { QA: code === 'QA' }]"
          :style="{
            backgroundImage: `url(${bgUrl})`,
            backgroundPosition: `${-(i - 1)}px 0`,
            animationDelay: `${(i - 1) * 4}ms`,
            aspectRatio: props.ratio ? props.ratio : '3/2',
            backgroundSize: wavingBackgroundSize,
          }"
        />
      </div>

      <!-- Still flag -->

      <div
        v-else
        :class="['flag-img', 'flag-still', { QA: code === 'QA' }]"
        :style="{
          backgroundImage: `url(${bgUrl})`,
          aspectRatio: props.ratio ? props.ratio : '3/2',
          backgroundSize: wavingBackgroundSize,
        }"
      />
    </div>
    <div class="flag-name">
      {{ name }}
    </div>
  </a>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue'

interface Props {
  flag: string
  waving: boolean
  name: string
  link: string
  code?: string
  ratio?: string
}

const props = defineProps<Props>()
const flagRef = ref<HTMLElement | null>(null)
const isWaving = ref(false)
const flagWidth = ref(282)

const bgUrl = computed(() => {
  if (props.flag === '') return ''
  return `${import.meta.env.BASE_URL}images/flags/${props.flag}.svg`
})

function thrttle(fn: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

const resizeHandler = thrttle(() => {
  if (flagRef.value) {
    flagWidth.value = flagRef.value.offsetWidth || 300
  }
}, 100)

const wavingBackgroundSize = computed(() => {
  // 使用 CSS 變數來處理 RWD，讓 CSS 來決定實際尺寸
  if (props.code === 'QA') {
    return 'var(--flag-width) calc(var(--flag-width) * 6 / 25)'
  } else if (props.ratio) {
    const [widthRatio, heightRatio] = props.ratio.split('/').map(Number)
    return `var(--flag-width) calc(var(--flag-width) * ${heightRatio} / ${widthRatio})`
  } else {
    return 'var(--flag-width) calc(var(--flag-width) * 2 / 3)'
  }
})

onMounted(() => {
  if (flagRef.value) {
    flagWidth.value = flagRef.value.offsetWidth || 300
  }
  window.addEventListener('resize', resizeHandler)
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<style lang="scss" scoped>
.flag-wrapper {
  @include flexCenter(column);
}
.flag {
  --flag-width: 2.82rem;
  margin: 0 auto;
  cursor: pointer;
  width: var(--flag-width);
  height: var(--flag-width);
  @include flexCenter(column);
  align-items: stretch;
}

.flag-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flag-img {
  width: 100%;
  height: 100%;
  // width: 2.82rem;
  // height: 1.87rem;
  @include bgCenter(contain);
  background-position: bottom center;
  margin: auto;
  // aspect-ratio: 3/2;
  // &.QA {
  //   @include bgCenter(2.82rem 0.68rem);
  //   aspect-ratio: 25/6;
  // }
}
.flag-name {
  margin-top: 0.16rem;
  text-align: center;
  font-size: 0.18rem;
  font-weight: 700;
}

.flag-waving {
  transform-origin: bottom center;
  animation: oscill 0.7s ease-in-out infinite alternate;
  position: relative;
  height: 100%;
  width: 1px;
  display: inline-block;
  margin: 0 auto;
  &.QA {
    height: 0.68rem;
  }
}

.flag-still {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  &.QA {
    height: 0.68rem;
  }
}

@include tablet {
  .flag {
    --flag-width: 2.05rem;
    width: var(--flag-width);
    height: var(--flag-width);
    .flag-img {
      width: 100%;
      height: 100%;
      @include bgCenter(2.05rem auto);
      background-position: bottom center;
      &.QA {
        @include bgCenter(contain);
      }
    }
    .flag-waving.QA {
      height: 0.49rem;
    }
  }
}
@include mobile {
  .flag {
    --flag-width: 1.28rem;
    width: var(--flag-width);
    height: var(--flag-width);
    min-height: 1rem;
    .flag-img {
      animation: none;
      @include bgCenter(contain);
      background-position: bottom center;
      &.QA {
        @include bgCenter(contain);
      }
    }
    .flag-waving.QA {
      height: 0.31rem;
    }
  }
  .flag-name {
    font-size: 0.16rem;
  }
}

@keyframes oscill {
  0% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(-5%);
  }
}
</style>
