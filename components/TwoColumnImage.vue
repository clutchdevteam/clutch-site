<template>
  <section class="my-28 md:my-48">
    <div class="relative flex flex-col md:flex-row space-y-16 md:space-x-12 justify-center">
      <div class="md:w-1/2">
        <img class="-mt-12 md:mt-0 w-full" :src="blok.image.filename" :alt="blok.image.alt" />
      </div>

      <div class="md:w-1/2 md:mt-12 px-4 md:p-0">
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
