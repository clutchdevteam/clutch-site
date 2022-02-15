<template>
  <h2
    :class="`${
      !noGradient ? 'text-gradient' : 'text-white'
    } flex items-center font-billion text-6xl md:text-8xl`"
  >
    <span class="text-xl md:text-3xl">&lt;</span>
    <slot />
    <span class="text-xl md:text-3xl">&nbsp;/&gt;</span>
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
  background: linear-gradient(to right, #c80000, #0095d4, #0095d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
