<template>
  <section class="base-wrapper my-24 lg:my-48">
    <BaseTwoCol v-if="blok.imageRight" :image-right="blok.imageRight">
      <template v-slot:left>
        <div>
          <p class="uppercase text-xs mb-4">{{ blok.kicker }}</p>
          <FancyHeading class="text-3xl lg:text-4xl lg:w-4/5 mb-8">{{ blok.heading }}</FancyHeading>

          <BaseText class="opacity-75 xl:w-3/4">{{ blok.text }}</BaseText>
        </div>
      </template>
      <template v-slot:right>
        <div class="img-wrapper right">
          <img
            class="shadow-md object-right"
            :src="blok.image.filename"
            :alt="blok.image.alt"
            loading="lazy"
          />
        </div>
      </template>
    </BaseTwoCol>

    <BaseTwoCol v-else>
      <template v-slot:left>
        <div class="img-wrapper left">
          <img class="shadow-md" :src="blok.image.filename" :alt="blok.image.alt" loading="lazy" />
        </div>
      </template>
      <template v-slot:right>
        <p class="uppercase text-xs mb-4">{{ blok.kicker }}</p>
        <FancyHeading class="text-3xl lg:text-4xl lg:w-4/5 mb-8">{{ blok.heading }}</FancyHeading>

        <BaseText class="opacity-75 xl:w-3/4">{{ blok.text }}</BaseText>
      </template>
    </BaseTwoCol>
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
  @apply relative;
}
@supports (aspect-ratio) {
  .img-wrapper {
    aspect-ratio: 1.5 / 1;

    & img {
      object-fit: cover;
      height: 100%;
    }
  }
}

@screen lg {
  .img-wrapper {
    &.right {
      &::after {
        @apply absolute inset-0 w-full h-full;

        content: '';
        margin-left: 20px;
        border-style: solid;
        border-image-slice: 1;
        border-width: 3px;
        border-image-source: linear-gradient(120deg, #d00000, #0075ff);
        z-index: -1;
        transform: rotate(-4deg);
        margin-top: 2rem;
        margin-right: 2rem;
      }
    }

    &.left {
      &::after {
        @apply absolute inset-0 w-full h-full;

        content: '';
        margin-left: 20px;
        border-style: solid;
        border-image-slice: 1;
        border-width: 3px;
        border-image-source: linear-gradient(120deg, #d00000, #0075ff);
        z-index: -1;
        transform: rotate(4deg);
        margin-top: 2rem;
        margin-left: -2rem;
      }
    }
  }
}
</style>
