<template>
  <footer class="bg-gray-100 py-6 mt-8">
    <div
      class="base-wrapper container mx-auto flex flex-col lg:flex-row justify-between items-center"
    >
      <nav>
        <ul class="flex items-center space-x-6 font-body text-sm">
          <li v-for="item in nav" :key="item.id">
            <nuxt-link :to="item.link.cached_url">{{ item.label }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <div>
        <a href="https://www.facebook.com/clutchCreativeAgency">
          <img src="~/assets/images/facebook.svg" alt="Facebook logo" />
        </a>
      </div>
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
