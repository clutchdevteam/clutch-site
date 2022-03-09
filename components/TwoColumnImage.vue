<template>
  <section class="my-28 md:my-48">
    <div
      class="relative flex flex-col md:flex-row space-y-16 md:space-x-12 justify-center"
    >
      <div class="md:w-1/2">
        <img
          ref="imageRef"
          class="-mt-12 md:mt-0 w-full"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </div>

      <div ref="contentRef" class="md:w-1/2 md:mt-12 px-4 md:p-0 bg-white">
        <FancyHeading class="text-3xl lg:text-4xl block mb-8">
          <span v-html="blok.title" />
        </FancyHeading>

        <BaseText class="opacity-75 lg:max-w-lg">
          {{ blok.text }}
        </BaseText>
      </div>
    </div>
  </section>
</template>

<script>
import FancyHeading from "./FancyHeading.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    FancyHeading,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageRef() {
      return this.$refs.imageRef;
    },
    contentRef() {
      return this.$refs.contentRef;
    },
  },
  mounted() {
    const query = "(prefers-reduced-motion: no-preference)";
    const mediaQueryList = window.matchMedia(query);
    const prefersReducedMotion = !mediaQueryList.matches;

    if (prefersReducedMotion) {
      null;
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.imageRef,
          start: "top bottom",
          end: "center center",
        },
      });

      tl.from(this.imageRef, {
        opacity: 0,
        scale: 0,
        ease: "back",
      }).to(this.imageRef, {
        opacity: 1,
        scale: 1,
      });
      tl.from(this.contentRef, { y: 100, opacity: 0 }, 0.25).to(
        this.contentRef,
        {
          y: 0,
          opacity: 1,
        }
      );
    }
  },
};
</script>
