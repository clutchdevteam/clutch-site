<template>
  <section class="max-w-3xl mx-auto px-4 py-0 my-24 lg:my-48">
    <div class="flex flex-col items-center">
      <FancyHeading class="text-3xl lg:text-4xl mb-12">{{ blok.heading }}</FancyHeading>

      <div class="grid lg:grid-cols-2 gap-24">
        <div v-for="item in blok.team" :key="item.id">
          <div class="img-wrapper">
            <img :src="item.image.filename" :alt="item.image.alt" />
          </div>

          <h3 class="mb-1">{{ item.name }}</h3>
          <p class="text-sm mb-6 text-red-500">{{ item.title }}</p>
          <BaseText class="opacity-75">{{ item.bio }}</BaseText>
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
.img-wrapper {
  @apply relative w-48 h-48 mb-12;

  &::after {
    @apply absolute inset-0 w-full h-full;

    content: '';
    margin-left: 20px;
    border-style: solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(120deg, #d00000, #0075ff);
    z-index: -1;
    transform: rotate(-4deg);
    margin-top: 1rem;
    margin-right: 1rem;
  }
}
</style>
