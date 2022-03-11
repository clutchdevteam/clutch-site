<template>
  <section class="relative my-16 lg:my-56">
    <div
      class="container px-4 lg:px-0 max-w-4xl mx-auto flex flex-col items-center"
    >
      <div id="valueHeadingRef">
        <FancyHeading class="text-3xl lg:text-4xl mb-12">{{
          blok.title
        }}</FancyHeading>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="value in blok.values"
          class="valueRef flex flex-col justify-between space-y-4 border-2 border-gray-200 px-8 py-5 bg-white"
          :key="value.id"
        >
          <img class="w-12" :src="value.image.filename" alt="" loading="lazy" />

          <div>
            <h3 class="text-2xl mb-2">{{ value.title }}</h3>
            <p class="opacity-75">{{ value.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const query = '(prefers-reduced-motion: no-preference)'
    const mediaQueryList = window.matchMedia(query)
    const prefersReducedMotion = !mediaQueryList.matches

    if (prefersReducedMotion) {
      null
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#valueHeadingRef',
          start: 'top bottom',
          end: 'center center',
        },
      })

      tl.from('#valueHeadingRef', {
        opacity: 0,
        y: -20,
      }).to('#valueHeadingRef', {
        opacity: 1,
        y: 0,
      })

      tl.from(
        '.valueRef',
        {
          y: 25,
          opacity: 0,
          stagger: {
            each: 0.1,
          },
          duration: 0.25,
        },
        0.5
      ).to('.valueRef', {
        y: 0,
        opacity: 1,
      })
    }
  },
}
</script>

<style lang="postcss" scoped>
section {
  & .floater {
    z-index: -1;
    transform: scale(1.015);
    margin-top: -52.5%;
  }
}
</style>
