<template>
  <div class="flag-wrapper">
    <div class="flag" ref="flagRef" @mouseenter="isWaving = true" @mouseleave="isWaving = false">
      <!-- Waving flag -->
      <div v-if="isWaving && waving" class="flag-container">
        <div
          v-for="i in flagWidth"
          :key="i"
          class="flag-img flag-waving"
          :style="{
            backgroundImage: `url(${bgUrl})`,
            backgroundPosition: `${-(i - 1)}px 0`,
            animationDelay: `${(i - 1) * 4}ms`,
          }"
        />
      </div>

      <!-- Still flag -->
      <div
        v-else
        class="flag-img flag-still"
        :style="{
          backgroundImage: `url(${bgUrl})`,
        }"
      />
    </div>
    <div class="flag-name">
      {{ name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface Props {
  country: string
  waving: boolean
  name: string
}

const props = defineProps<Props>()
const flagRef = ref<HTMLElement | null>(null)
const isWaving = ref(false)
const flagWidth = ref(300)

const bgUrl = computed(() => {
  return `${import.meta.env.BASE_URL}images/flags/${props.country}.svg`
})

onMounted(() => {
  if (flagRef.value) {
    flagWidth.value = flagRef.value.offsetWidth || 300
  }
})
</script>

<style lang="scss" scoped>
.flag-wrapper {
  @include flexCenter(column);
}
.flag {
  margin: 0 auto;
  cursor: pointer;
  width: 3rem;
  height: 2rem;
}

.flag-container {
  width: 100%;
  height: 100%;
  display: flex;
}
.flag-img {
  @include bgCenter(3rem 100%);
  aspect-ratio: 3/2;
}
.flag-name {
  margin-top: 0.16rem;
  text-align: center;
  font-size: 0.18rem;
  font-weight: 700;
}

.flag-waving {
  animation: oscill 0.7s ease-in-out infinite alternate;
  position: relative;
  height: 100%;
  width: 1px;
  display: inline-block;
}

.flag-still {
  width: 100%;
  height: 100%;
}

@include tablet {
  .flag {
    width: 2.05rem;
    height: 1.36rem;
    .flag-img {
      @include bgCenter(2.05rem 100%);
    }
  }
}
@include mobile {
  .flag {
    width: 1.28rem;
    height: 0.85rem;
    .flag-img {
      animation: none;
      @include bgCenter(1.28rem 100%);
    }
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
