<template>
  <section class="my-28 md:my-48 pb-12 md:pb-32">
    <div class="md:grid grid-cols-2 gap-12 items-center">
      <div class="relative order-last mb-12 md:mb-0 pl-12 md:pl-0">
        <img
          class="block z-10"
          :src="blok.twoColumnVideo_video.filename"
          :alt="blok.twoColumnVideo_alt"
        />

        <div
          class="absolute bg-primary top-0 transform -translate-x-12 translate-y-12 md:-translate-x-24 md:translate-y-24"
          style="z-index: -999"
        >
          <img
            :src="blok.twoColumnVideo_video.filename"
            :alt="blok.twoColumnVideo_alt"
            style="mix-blend-mode: multiply"
          />
        </div>
      </div>

      <div class="order-first mt-24 md:mt-0 p-4 md:p-0">
        <div class="mb-4">
          <FancyHeading>{{ blok.twoColumnVideo_title }}</FancyHeading>
        </div>

        <BaseText class="md:w-3/4 opacity-75">
          {{ blok.twoColumnVideo_text }}
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

<style lang="postcss" scoped>
.clutch-blue-bg {
  background-color: #0095d4;
}

@screen md {
  section {
    margin-left: 10%;
  }
}

@screen lg {
  section {
    margin-left: 15%;
  }
}
</style>
