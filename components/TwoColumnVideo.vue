<template>
  <section>
    <div
      class="
        base-wrapper
        relative
        flex flex-col
        justify-center
        space-y-16
        mt-32
      "
    >
      <div class="w-screen">
        <div class="w-screen h-auto z-2">
          <img
            :src="blok.twoColumnVideo_video.filename"
            :alt="blok.twoColumnVideo_alt"
          />
          <div class="clutch-blue-bg z-1">
            <img
              class="opacity-10 -mt-32 h-1/2"
              :src="blok.twoColumnVideo_video.filename"
              :alt="blok.twoColumnVideo_alt"
            />
          </div>
        </div>
      </div>
      <div>
        <FancyHeading>{{ blok.twoColumnVideo_title }}</FancyHeading>
        <p class="font-fira">{{ blok.twoColumnVideo_title_description }}</p>
      </div>

      <p class="font-fira">{{ blok.twoColumnVideo_text }}</p>
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
