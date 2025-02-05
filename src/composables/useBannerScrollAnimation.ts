import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function useBannerScrollAnimation({
  leftBanner,
  rightBanner,
  triggerClass,
  topFirst,
  secondLast,
}: {
  leftBanner: HTMLElement | null
  rightBanner: HTMLElement | null
  triggerClass: string
  topFirst: HTMLElement | null
  secondLast: HTMLElement | null
}) {
  gsap.registerPlugin(ScrollTrigger)
  onMounted(() => {

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 1024px)': function () {
        gsap.from(leftBanner, { duration: 1, opacity: 0, y: 150 })
        gsap.from(rightBanner, { duration: 1, opacity: 0, y: 150 })
        // second section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerClass,
            start: '20% 100%',
            end: '50% 50%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        })
        tl.to(
          leftBanner,
          {
            scale: 0.5,
            duration: 0.15,
            opacity: 0,
            y: 100,
            onComplete: () => {
              leftBanner!.style.opacity = '0'
            },
            onReverseComplete: () => {
              leftBanner!.style.opacity = '1'
            },
          },
          '#leftphoto',
        )
        tl.to(
          rightBanner,
          {
            scale: 0.5,
            duration: 0.15,
            opacity: 0,
            y: 1000,
            onComplete: () => {
              rightBanner!.style.opacity = '0'
            },
            onReverseComplete: () => {
              rightBanner!.style.opacity = '1'
            },
          },
          '#rightPhoto',
        )
        gsap.to(topFirst, {
          scrollTrigger: {
            trigger: topFirst,
            start: 'top top',
            end: '100% 50%',
            scrub: 1,
          },
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
        })
        if (secondLast) {
          gsap.from(secondLast, {
            y: -500,
            scale: 1.2,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: secondLast,
              start: 'top 80%',
              end: 'center center',
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          })
        }
      },
    })
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })
}

export default useBannerScrollAnimation;
