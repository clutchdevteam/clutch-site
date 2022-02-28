<template>
  <h2
    :class="`${
      !noGradient ? 'text-gradient' : 'text-white'
    } flex items-center font-monts text-3xl lg:text-5xl`"
  >
    <slot />
  </h2>
</template>

<script>
export default {
  props: {
    noGradient: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.text-gradient {
  color: #0094ff;
  display: inline-block;
}

@supports ((background-clip: text) or (-webkit-background-clip: text)) and
  ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .text-gradient {
    background-image: linear-gradient(to right, #d00000, #0094ff);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
