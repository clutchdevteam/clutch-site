<template>
  <section>
    <h1>{{ blok.hero_title }}</h1>

    <p>{{ blok.hero_text }}</p>

    <button>{{ blok.hero_btn }}</button>
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

<style lang="postcss" scoped></style>
