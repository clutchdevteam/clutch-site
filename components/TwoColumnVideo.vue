<template>
  <section class="my-28 md:my-64 pb-12 md:pb-32">
    <div class="md:grid grid-cols-2 2xl:grid-cols-3 gap-12 items-center">
      <div
        ref="videoRef"
        class="relative order-last 2xl:col-span-2 mb-12 md:mb-0 pl-8 md:pl-0"
      >
        <img class="block z-10" :src="blok.video.filename" :alt="blok.alt" />

        <div
          class="absolute bg-primary top-0 transform -translate-x-12 translate-y-12 md:-translate-x-24 md:translate-y-24"
          style="z-index: -999"
        >
          <img
            :src="blok.video.filename"
            :alt="blok.alt"
            style="mix-blend-mode: multiply"
          />
        </div>
      </div>

      <div
        ref="contentRef"
        class="order-first 2xl:col-span-1 mt-24 md:mt-0 p-4 md:p-0"
      >
        <div class="mb-4">
          <FancyHeading class="text-3xl lg:text-4xl mb-8">
            <span v-html="blok.title" />
          </FancyHeading>
        </div>

        <BaseText class="md:w-3/4 opacity-75">
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
    videoRef() {
      return this.$refs.videoRef;
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
          trigger: this.videoRef,
          start: "top bottom",
          end: "top center",
        },
      });

      tl.from(this.videoRef, { opacity: 0, scale: 0, ease: "back" }).to(
        this.videoRef,
        {
          opacity: 1,
          scale: 1,
        }
      );
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

<style lang="postcss" scoped>
.clutch-blue-bg {
  background-color: #0095d4;
}

section {
  & img {
    z-index: -99999;
  }
}

@screen md {
  section {
    margin-left: 5%;
  }
}

@screen lg {
  section {
    margin-left: 10%;
  }
}

@screen 2xl {
  section {
    margin-left: 20%;
  }
}
</style>
