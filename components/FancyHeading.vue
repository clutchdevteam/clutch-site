<template>
  <component :is="size" class="text-gradient flex items-center font-monts">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    noGradient: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'h2',
    },
  },
};
</script>

<style lang="postcss" scoped>
.text-gradient {
  color: #0075ff;
  display: inline-block;
}

@supports ((background-clip: text) or (-webkit-background-clip: text)) and
  ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .text-gradient {
    background-image: linear-gradient(to right, #d00000, #0075ff);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
