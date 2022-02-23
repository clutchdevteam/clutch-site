<template>
  <section class="my-28 md:my-48">
    <div class="relative flex flex-col md:flex-row space-y-16 md:space-x-12 justify-center">
      <div class="md:w-1/2">
        <img
          class="-mt-12 md:mt-0 w-full"
          :src="blok.twoColumnImage_image.filename"
          :alt="blok.twoColumnImage_alt"
        />
      </div>

      <div class="flex flex-col md:w-1/2 md:mt-12 px-4 md:p-0">
        <FancyHeading class="mb-8">{{ blok.twoColumnImage_title }}</FancyHeading>

        <p class="font-fira opacity-75 max-w-xl md:pl-24">
          {{ blok.twoColumnImage_text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FancyHeading from './FancyHeading.vue';
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

<style lang="postcss" scoped></style>
