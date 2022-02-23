<template>
  <section class="base-wrapper relative overflow-hidden pb-32 mt-40">
    <img class="absolute right-0" src="~/assets/images/pre-footerBG.png" />

    <div class="container mx-auto z-20">
      <h2 class="flex items-center font-billion">
        <span class="text-3xl lg:text-5xl">&lt;</span>{{ blok.title }}
        <span class="text-3xl lg:text-5xl">&nbsp;/&gt;</span>
      </h2>

      <div class="lg:w-1/2 mx-auto">
        <p class="text-lg mb-12">{{ blok.text }}</p>
        <nuxt-link class="btn btn-red" :to="ctaButton.link.cached_url">{{
          ctaButton.text
        }}</nuxt-link>
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
  computed: {
    ctaButton() {
      return this.blok.button[0];
    },
  },
};
</script>

<style lang="postcss" scoped>
h2 {
  font-size: 128px;
  background: linear-gradient(to right, #c80000, #0095d4, #0095d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
img {
  z-index: -999;
}

@screen md {
  h2 {
    font-size: 240px;
  }
}

@screen xl {
  h2 {
    font-size: 320px;
  }
}
</style>
