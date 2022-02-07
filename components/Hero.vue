<template>
  <section class="hero-container">
    <div
      class="
        base-wrapper
        relative
        flex flex-col
        space-y-16
        justify-center
        h-full
        text-white
      "
    >
      <AccentText>
        <h1 class="relative inline font-monts text-5xl uppercase z-10">
          {{ blok.hero_title }}
        </h1>
      </AccentText>

      <p class="font-fira text-lg">{{ blok.hero_text }}</p>

      <div>
        <button class="btn btn-red">
          {{ blok.hero_btn }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AccentText from "./AccentText.vue";
export default {
  components: {
    AccentText,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.hero-container {
  background: url(./assets/images/MobileBg.png) no-repeat;
  background-size: cover;
  height: 100vh;
}
@screen md {
  .hero-container {
    background: url(./assets/images/DesktopBG.png) no-repeat;
    height: 100vh;
    background-size: cover;
    background-position: bottom;
  }
}
</style>
