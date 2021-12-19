<template>
  <section>
    <div class="base-wrapper relative flex flex-col space-y-16 justify-center">
      <img
        class="-mt-12"
        :src="blok.twoColumnImage_image.filename"
        :alt="blok.twoColumnImage_alt"
      />

      <FancyHeading>{{ blok.twoColumnImage_title }}</FancyHeading>

      <p class="font-fira">{{ blok.twoColumnImage_text }}</p>
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

<style lang="postcss" scoped></style>
