<template>
  <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
    <div :class="{ 'order-last lg:order-first': imageRight }">
      <slot name="left" />
    </div>

    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageRight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
