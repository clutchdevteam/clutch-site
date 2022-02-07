<template>
  <section class="my-28 md:my-48">
    <div
      class="
        base-wrapper
        relative
        flex flex-col
        md:grid
        grid-cols-2
        gap-12
        justify-center
        space-y-16
        mt-32
      "
    >
      <div class="relative order-last">
        <img
          class="z-20 transform translate-x-4 md:translate-x-0"
          :src="blok.twoColumnVideo_video.filename"
          :alt="blok.twoColumnVideo_alt"
        />
        <div class="h-48 w-full clutch-blue-bg -mt-24 z-[-999]" />
      </div>

      <div class="order-first">
        <div class="mb-4">
          <FancyHeading>{{ blok.twoColumnVideo_title }}</FancyHeading>
          <p class="font-fira">{{ blok.twoColumnVideo_title_description }}</p>
        </div>

        <p class="font-fira md:w-3/4 opacity-75">
          {{ blok.twoColumnVideo_text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FancyHeading from "./FancyHeading.vue";
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
};
</script>

<style lang="postcss" scoped>
.clutch-blue-bg {
  background-color: #0095d4;
}
</style>
