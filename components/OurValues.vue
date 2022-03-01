<template>
  <section class="relative my-16 lg:my-56">
    <div class="container px-4 lg:px-0 max-w-4xl mx-auto flex flex-col items-center">
      <div>
        <FancyHeading class="text-3xl lg:text-4xl mb-12">{{ blok.title }}</FancyHeading>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="value in blok.values"
          class="flex flex-col justify-between space-y-4 border-2 border-gray-200 px-8 py-5 bg-white"
          :key="value.id"
        >
          <img class="w-12" :src="value.image.filename" alt="" />

          <div>
            <h3 class="text-2xl mb-2">{{ value.title }}</h3>
            <p class="opacity-75">{{ value.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
section {
  & .floater {
    z-index: -1;
    transform: scale(1.015);
    margin-top: -52.5%;
  }
}
</style>
