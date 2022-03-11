<template>
  <section class="title-container clutch-blue-bg mb-24 lg:mb-48">
    <div
      class="base-wrapper h-full relative flex flex-col md:grid grid-cols-2 gap-12 justify-center items-center mt-32 py-8 mb-32"
    >
      <div>
        <p class="text-xs uppercase mb-3">Case Study</p>
        <FancyHeading size="h1" class="text-2xl lg:text-3xl lg:w-3/4">
          {{ blok.title }}
        </FancyHeading>

        <BaseText class="mt-8 opacity-75">
          {{ blok.text }}
        </BaseText>
      </div>

      <div class="flex flex-col items-center">
        <p class="text-gradient text-9xl font-bold font-monts">
          {{ blok.stat[0].stat }}
        </p>
        <p>{{ blok.stat[0].description }}</p>
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
}
</script>

<style lang="postcss" scoped>
.title-container {
  @apply bg-primary;

  background: url(./assets/images/angelCaseStudyMobileBg.png) no-repeat;
  background-position: right;
  background-size: cover;
}

@screen md {
  .title-container {
    background: url(./assets/images/angelCaseStudyDesktopBg.png) no-repeat;
    background-size: cover;
  }
}

.clutch-blue-bg {
  background-color: #f2f2f2;
  background-position: center;
}

.text-gradient {
  color: #0075ff;
  display: inline-block;
}

@supports ((background-clip: text) or (-webkit-background-clip: text)) and
  ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .text-gradient {
    background-image: linear-gradient(120deg, #d00000, #0075ff);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
