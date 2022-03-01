<template>
  <section class="my-28 md:my-64 pb-12 md:pb-32">
    <div class="md:grid grid-cols-2 gap-12 items-center">
      <div class="relative order-last mb-12 md:mb-0 pl-8 md:pl-0">
        <img class="block z-10" :src="blok.video.filename" :alt="blok.alt" />

        <div
          class="absolute bg-primary top-0 transform -translate-x-12 translate-y-12 md:-translate-x-24 md:translate-y-24"
          style="z-index: -999"
        >
          <img :src="blok.video.filename" :alt="blok.alt" style="mix-blend-mode: multiply" />
        </div>
      </div>

      <div class="order-first mt-24 md:mt-0 p-4 md:p-0">
        <div class="mb-4">
          <FancyHeading class="text-3xl lg:text-4xl mb-8">
            <span v-html="blok.title" />
          </FancyHeading>
        </div>

        <BaseText class="md:w-3/4 opacity-75">
          {{ blok.text }}
        </BaseText>
      </div>
    </div>

    <img
      src="~/assets/images/floater_1.svg"
      class="hidden md:block left-0 w-full absolute -mt-10 xl:-mt-32"
    />
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

<style lang="postcss" scoped>
.clutch-blue-bg {
  background-color: #0095d4;
}

section {
  & img {
    z-index: -99999;
  }
}

@screen md {
  section {
    margin-left: 5%;
  }
}

@screen lg {
  section {
    margin-left: 10%;
  }
}
</style>
