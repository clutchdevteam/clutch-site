<template>
  <section class="max-w-4xl mx-auto px-4 lg:px-0 mb-20 lg:mb-36">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
      <div :class="{ 'lg:order-last': blok.imageRight }">
        <div
          :class="`${blok.hasImgBorder ? 'img-wrapper' : ''} ${
            blok.imageRight ? 'right' : 'left'
          }`"
        >
          <img
            class="w-full"
            :src="blok.image.filename"
            :alt="blok.image.alt"
            loading="lazy"
          />
        </div>
      </div>

      <div>
        <div>
          <FancyHeading class="text-xl lg:text-3xl mb-8">{{
            blok.title
          }}</FancyHeading>
          <BaseRichText :content="blok.description" />
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
}
</script>

<style lang="postcss" scoped>
.img-wrapper {
  @apply relative;
}
@supports (aspect-ratio) {
  .img-wrapper {
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
