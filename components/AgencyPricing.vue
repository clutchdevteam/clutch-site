<template>
  <section class="base-wrapper my-16 lg:my-48">
    <div class="grid lg:grid-cols-5 gap-8">
      <div class="col-span-2">
        <div>
          <p class="uppercase text-xs mb-4">{{ blok.kicker }}</p>
          <FancyHeading class="text-3xl lg:text-4xl lg:w-4/5 mb-8">{{
            blok.heading
          }}</FancyHeading>

          <BaseRichText
            class="opacity-75 xl:w-3/4"
            :content="blok.text"
          ></BaseRichText>
        </div>
      </div>

      <div class="col-span-3">
        <div class="grid lg:grid-cols-2 gap-6">
          <PricingCard
            v-for="card in blok.card"
            :key="card._uid"
            :best-value="card.bestValue"
            :price="card.price"
            :kicker="card.kicker"
            :subscribe="card.subscribe"
            :features="card.features"
          />
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
