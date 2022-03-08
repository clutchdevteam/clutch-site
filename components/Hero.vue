<template>
  <section class="h-screen">
    <div class="base-wrapper h-full">
      <div class="flex flex-col justify-center md:w-1/2 h-full space-y-8">
        <div>
          <BaseText id="kickerRef" class="uppercase text-sm">{{
            blok.kicker
          }}</BaseText>
          <FancyHeading
            id="headingRef"
            class="heading uppercase text-5xl lg:text-8xl"
            size="h1"
          >
            <span v-html="blok.title" />
          </FancyHeading>
        </div>

        <BaseText id="sloganRef" class="text-lg opacity-75 lg:w-3/4">{{
          blok.text
        }}</BaseText>

        <div id="buttonRef">
          <BaseButton href="/contact-us">
            {{ blok.button[0].text }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  props: {
    blok: {
      type: Object,
      required: true,
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
          trigger: "#headingRef",
          start: "center center",
          end: "center center",
        },
      });

      tl.from("#headingRef", { y: 100, opacity: 0, ease: "back" }).to(
        "#headingRef",
        {
          y: 0,
          opacity: 1,
        }
      );
      tl.from("#kickerRef", { y: -50, opacity: 0 }, 0.5).to("#kickerRef", {
        y: 0,
        opacity: 1,
      });
      tl.from("#sloganRef", { y: 50, opacity: 0 }, 0.5).to("#sloganRef", {
        y: 0,
        opacity: 1,
      });
      tl.from("#buttonRef", { x: -50, opacity: 0 }, 0.5).to("#buttonRef", {
        x: 0,
        opacity: 1,
      });
    }
  },
};
</script>

<style lang="postcss" scoped>
section {
  background: url(../assets/images/creative-angel.png) no-repeat;
  background-size: cover;
  background-position-x: left;
}

@screen md {
  section {
    background-size: contain;
    background-position-x: right;
  }
}
</style>
