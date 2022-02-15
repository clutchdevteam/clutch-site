<template>
  <div>
    <Header />
    <main class="overflow-x-hidden">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Page from "~/components/Page.vue";

export default {
  components: {
    Header,
    Footer,
    Page,
  },
};
</script>
