<template>
  <footer class="bg-primary py-24">
    <div
      class="base-wrapper container mx-auto flex flex-col lg:flex-row justify-between items-center"
    >
      <img
        class="w-48 mb-12"
        src="~/assets/images/clutchLogo.svg"
        alt="The word Clutch in a cursive typeface between an opening and closing angle bracket."
      />

      <nav>
        <ul class="flex items-center space-x-12 font-body">
          <li v-for="item in nav" :key="item.id">
            <nuxt-link :to="item.link.cached_url">{{ item.label }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <p class="text-xs text-center font-body mt-6">Copyright &copy; 2022 | Clutch Creative, LLC</p>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    logo: {
      type: Object,
      required: true,
    },
    nav: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState('global', ['loaded']),
  },
};
</script>
