<template>
  <section class="featured-project-container clutch-blue-bg mb-48">
    <div
      class="base-wrapper h-full relative flex flex-col md:grid grid-cols-2 gap-12 justify-center items-center lg:space-y-12 mt-32 py-8 mb-32"
    >
      <div class="md:order-last">
        <p class="text-xs uppercase mb-3">Featured Project</p>
        <FancyHeading class="text-2xl lg:text-3xl">
          {{ blok.featuredProject_name }}
        </FancyHeading>

        <BaseText class="mt-8 max-w-xl">
          {{ blok.featuredProject_text }}
        </BaseText>

        <div class="mt-8">
          <BaseButton :href="blok.featuredProject_button[0].link.cached_url">
            {{ blok.featuredProject_button[0].text }}
          </BaseButton>
        </div>
      </div>

      <div class="relative transform md:-translate-y-36">
        <img
          class="w-2/5 md:w-1/3 absolute right-0 mt-4 md:mt-24 z-20"
          :src="blok.featuredProject_mobile_image.filename"
          :alt="blok.featuredProject_mobile_image_alt"
          loading="lazy"
        />
        <img
          class="w-3/4 md:w-11/12 z-10"
          :src="blok.featuredProject_desktop_image.filename"
          :alt="blok.featuredProject_desktop_image_alt"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FancyHeading from './FancyHeading.vue'
import AccentText from './AccentText.vue'

export default {
  components: {
    FancyHeading,
    AccentText,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.featured-project-container {
  @apply bg-primary;

  background: url(./assets/images/angelCaseStudyMobileBg.png) no-repeat;
  background-position: right;
  background-size: cover;
}

@screen md {
  .featured-project-container {
    background: url(./assets/images/angelCaseStudyDesktopBg.png) no-repeat;
    background-size: cover;
  }
}

.clutch-blue-bg {
  background-color: #f2f2f2;
  background-position: center;
}
</style>
