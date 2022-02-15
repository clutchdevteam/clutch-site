<template>
  <section class="my-28 md:my-48 pb-12 md:pb-32">
    <div class="base-wrapper md:grid grid-cols-2 gap-12 items-center">
      <div class="relative order-last mb-12 md:mb-0">
        <img
          class="block z-10"
          :src="blok.twoColumnVideo_video.filename"
          :alt="blok.twoColumnVideo_alt"
        />

        <div
          class="
            hidden
            md:block
            absolute
            clutch-blue-bg
            top-0
            transform
            -translate-x-24
            translate-y-24
          "
          style="z-index: -999"
        >
          <img
            :src="blok.twoColumnVideo_video.filename"
            :alt="blok.twoColumnVideo_alt"
            style="mix-blend-mode: multiply"
          />
        </div>
      </div>

      <div class="order-first">
        <div class="mb-4">
          <FancyHeading>{{ blok.twoColumnVideo_title }}</FancyHeading>
          <p class="text-sm font-fira">
            {{ blok.twoColumnVideo_title_description }}
          </p>
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
