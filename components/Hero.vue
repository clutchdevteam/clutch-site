<template>
  <section class="h-screen">
    <div class="base-wrapper h-full">
      <div class="flex flex-col justify-center md:w-1/2 h-full space-y-8">
        <div>
          <BaseText class="uppercase text-sm">{{ blok.kicker }}</BaseText>
          <FancyHeading class="uppercase text-5xl lg:text-8xl" size="h1">
            <span v-html="blok.title" />
          </FancyHeading>
        </div>

        <BaseText class="text-lg opacity-75 lg:w-3/4">{{ blok.text }}</BaseText>

        <div>
          <BaseButton href="/contact-us">
            {{ blok.button[0].text }}
          </BaseButton>
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
  background: url(../assets/images/creative-angel.png) no-repeat;
  background-size: cover;
  background-position-x: left;
}

@screen md {
  section {
    background-size: contain;
    background-position-x: right;
  }
}
</style>
