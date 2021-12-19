<template>
  <section class="featured-project-container clutch-blue-bg">
    <div
      class="
        base-wrapper
        relative
        flex flex-col
        justify-center
        space-y-16
        mt-32
      "
    >
      <!-- <FancyHeading class="mt-20 text-white text-6xl">
        {{ blok.featuredProject_title }}
      </FancyHeading> -->

      <AccentText
        class="
          relative
          inline
          mt-20
          font-monts
          text-5xl
          uppercase
          text-white
          z-10
        "
      >
        <h2>{{ blok.featuredProject_name }}</h2>
      </AccentText>

      <p class="font-fira">{{ blok.featuredProject_text }}</p>

      <div>
        <button class="btn btn-red">
          {{ blok.featuredProject_button }}
        </button>
      </div>
      <div>
        <img
          class="w-80 h-auto float-left"
          :src="blok.featuredProject_desktop_image.filename"
          :alt="blok.featuredProject_desktop_image_alt"
        />
      </div>

      <div>
        <img
          class="h-56 w-auto float-right -mt-60"
          :src="blok.featuredProject_mobile_image.filename"
          :alt="blok.featuredProject_mobile_image_alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FancyHeading from "./FancyHeading.vue";
import AccentText from "./AccentText.vue";
export default {
  components: {
    FancyHeading,
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
.featured-project-container {
  background: url(./assets/images/angelMobileBg.png) no-repeat;
  background-size: cover;
  height: 80vh;
}

.clutch-blue-bg {
  background-color: #0095d4;
}
</style>
