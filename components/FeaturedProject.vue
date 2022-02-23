<template>
  <section class="featured-project-container clutch-blue-bg my-28 md:my-48">
    <div
      class="
        base-wrapper
        h-full
        relative
        flex flex-col
        md:grid
        grid-cols-2
        gap-12
        justify-center
        items-center
        space-y-12
        mt-32
        py-8
        mb-24
      "
    >
      <div class="md:order-last">
        <AccentText class="font-monts font-bold text-5xl uppercase text-white">
          <h2>{{ blok.featuredProject_name }}</h2>
        </AccentText>

        <p class="font-fira mt-8 text-white">{{ blok.featuredProject_text }}</p>

        <div class="mt-8">
          <button class="btn btn-red">
            {{ blok.featuredProject_button }}
          </button>
        </div>
      </div>

      <div class="relative transform md:-translate-y-36">
        <img
          class="w-2/5 md:w-1/3 absolute right-0 mt-12 md:mt-24"
          :src="blok.featuredProject_mobile_image.filename"
          :alt="blok.featuredProject_mobile_image_alt"
        />
        <img
          class="w-3/4 md:w-11/12"
          :src="blok.featuredProject_desktop_image.filename"
          :alt="blok.featuredProject_desktop_image_alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FancyHeading from './FancyHeading.vue';
import AccentText from './AccentText.vue';

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
  @apply bg-primary;

  background: url(./assets/images/angelCaseStudyMobileBg.png) no-repeat;
  background-position: right;
  background-size: cover;
}

@screen md {
  .featured-project-container {
    background: url(./assets/images/angelCaseStudyDesktopBg.png) no-repeat;
  }
}

.clutch-blue-bg {
  background-color: #0095d4;
  background-position: center;
}
</style>
