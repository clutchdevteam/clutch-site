<template>
  <section class="base-wrapper relative overflow-hidden mt-48">
    <div class="container mx-auto z-20">
      <h2 class="text-gradient font-monts px-4">{{ blok.title }}</h2>

      <div class="lg:w-1/2 mx-auto pb-32">
        <p class="text-lg mb-12 leading-loose opacity-75">{{ blok.text }}</p>
        <nuxt-link
          class="btn btn-red"
          :to="$formRoute({ url: ctaButton.link.cached_url })"
          >{{ ctaButton.text }}</nuxt-link
        >
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
      return this.blok.button[0]
    },
  },
}
</script>

<style lang="postcss" scoped>
.text-gradient {
  color: #0094ff;
  display: inline-block;
}

@supports ((background-clip: text) or (-webkit-background-clip: text)) and
  ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .text-gradient {
    background-image: linear-gradient(to right, #d00000, #0094ff, #0094ff);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

section {
  background-image: url('~/assets/images/pre-footerBG.png');
  background-repeat: no-repeat;
  background-size: cover;
}

h2 {
  font-size: 128px;
}
img {
  z-index: -999;
}

@screen md {
  h2 {
    font-size: 240px;
  }

  section {
    background-size: contain;
    background-position-x: right;
  }
}

@screen xl {
  h2 {
    font-size: 320px;
  }
}
</style>
