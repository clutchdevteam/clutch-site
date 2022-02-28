<template>
  <nuxt-link class="btn inline-block" v-if="href" :to="href">
    <span>
      <slot />
    </span>
  </nuxt-link>

  <button v-else class="btn" :type="type" @click="$emit('click')">
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
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply font-body uppercase px-8 transition duration-150 ease-in-out;

  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(120deg, #d00000, #0075ff) border-box;
  border: 2px solid transparent;

  & span {
    display: block;
    padding-top: 3px;
  }

  &:hover {
    @apply shadow;

    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(120deg, #0075ff, #d00000) border-box;
  }
}
</style>
