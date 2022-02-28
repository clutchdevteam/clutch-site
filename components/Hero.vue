<template>
  <section class="h-screen">
    <div class="base-wrapper h-full">
      <div class="flex flex-col justify-center md:w-1/2 h-full space-y-12">
        <div>
          <BaseText class="uppercase">{{ blok.kicker }}</BaseText>
          <FancyHeading class="text-3xl lg:text-8xl pb-2">
            <span v-html="blok.title" />
          </FancyHeading>
        </div>

        <BaseText class="text-lg opacity-75 lg:w-3/4">{{ blok.text }}</BaseText>

        <div>
          <BaseButton :href="blok.button[0].link.cached_url">
            {{ blok.button[0].text }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AccentText from './AccentText.vue';
export default {
  components: {
    AccentText,
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
section {
  background: url(~/assets/images/DesktopBg.png) no-repeat;
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
