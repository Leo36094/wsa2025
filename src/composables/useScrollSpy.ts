import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { PageValue } from '@/types/page_section'
import { PageSectionEnum } from '@/types/page_section'

export function useScrollSpy(sections: PageValue[]) {
  const activeSection = ref<PageValue>(sections[0])
  const observers = ref<IntersectionObserver[]>([])

  // Create a mapping from section ID to PageValue
  const sectionMap = computed(() => {
    const map = new Map<string, PageValue>()
    sections.forEach(section => {
      const id = section.slice(1)
      map.set(id, section)
    })
    return map
  })

  const observeSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) {
      console.warn(`Element with id "${sectionId}" not found`)
      return
    }

    // 檢查元素是否可見（包含 v-show 檢查）
    const isVisible = () => {
      const rect = element.getBoundingClientRect()
      const style = window.getComputedStyle(element)
      return style.display !== 'none' && rect.height > 0 && rect.width > 0
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`Section ${sectionId}:`, {
            isIntersecting: entry.isIntersecting,
            isVisible: isVisible(),
            intersectionRatio: entry.intersectionRatio
          })

          // 只有當元素可見且正在相交時才更新
          if (entry.isIntersecting && isVisible()) {
            const sectionValue = sectionMap.value.get(sectionId)
            if (sectionValue) {
              console.log(`Setting active section to: ${sectionValue}`)
              activeSection.value = sectionValue
            }
          }
        })
      },
      {
        // 調整配置以更好地偵測
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5]
      }
    )

    observer.observe(element)
    observers.value.push(observer)
    console.log(`Observing section: ${sectionId}`)
  }

  const initializeScrollSpy = () => {
    console.log('Initializing scroll spy for sections:', sections)
    cleanup()

    setTimeout(() => {
      sections.forEach(section => {
        const id = section.slice(1)
        observeSection(id)
      })
    }, 100)
  }

  const cleanup = () => {
    console.log('Cleaning up observers')
    observers.value.forEach(observer => observer.disconnect())
    observers.value = []
  }

  onMounted(() => {
    initializeScrollSpy()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    activeSection,
    initializeScrollSpy
  }
}
