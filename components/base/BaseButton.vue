<template>
  <nuxt-link :class="`btn inline-block ${btnStyle}`" v-if="href" :to="href">
    <span>
      <slot />
    </span>
  </nuxt-link>

  <button v-else :class="`btn ${btnStyle}`" :type="type" @click="$emit('click')">
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      required: false,
    },
    btnStyle: {
      type: String,
      default: 'gradient',
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply font-body uppercase px-8 transition duration-150 ease-in-out;

  &.gradient {
    border: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: linear-gradient(120deg, #d00000, #0075ff);

    &:hover {
      border-image-source: linear-gradient(120deg, #0075ff, #d00000);
    }
  }

  &.white {
    @apply border-2 border-white;

    &:hover {
      @apply bg-white bg-opacity-10;
    }
  }

  & span {
    display: block;
    padding-top: 3px;
  }
}
</style>
