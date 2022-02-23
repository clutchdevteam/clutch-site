<template>
  <header class="z-50 absolute w-full flex items-center justify-between p-4">
    <div>
      <nuxt-link to="/">
        <img v-if="loaded" class="w-24 lg:w-48" :src="logo.filename" :alt="logo.alt" />
      </nuxt-link>
    </div>

    <nav class="hidden lg:flex text-white font-fira items-center">
      <ul class="flex items-center">
        <li v-for="menu in nav" :key="menu.id">
          <BaseMenu
            :id="menu.title"
            classes="px-4 text-center py-2 border-t-2 border-transparent hover:border-red-500"
            :menu="menu"
            :depth="0"
          />
        </li>
      </ul>

      <nuxt-link to="/" class="ml-4 bg-red-500 px-4 py-1 hover:bg-red-800">Let's Chat</nuxt-link>
    </nav>

    <div class="mobile lg:hidden text-white">
      <button
        :class="`p-4 ${isHomePage ? 'text-white' : ''}`"
        ref="openButtonRef"
        @click="openMobileMenu"
        type="button"
        :inert="isMobileMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>

        <Portal to="mobile-menu">
          <div
            :class="`z-50 fixed lg:hidden inset-0 bg-black transition duration-150 ${
              isMobileMenuOpen ? 'bg-opacity-75' : 'bg-opacity-0 pointer-events-none'
            }`"
            :inert="!isMobileMenuOpen"
            @keydown.esc="closeMenu"
          >
            <div
              :class="`flex transform transition-transform duration-150 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`"
            >
              <div @click="closeMenu">
                <button
                  class="
                    flex
                    justify-center
                    items-center
                    bg-white
                    rounded-full
                    ml-4
                    mr-4
                    mt-4
                    h-12
                    w-12
                  "
                  ref="closeButtonRef"
                  @click="closeMenu"
                  type="button"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div class="flex flex-col justify-between h-screen w-full bg-white">
                <nav class="" role="navigation">
                  <ul>
                    <li v-for="menu in nav" :key="menu.id">
                      <BaseMenu
                        classes="py-6 px-4 border-b border-gray-300"
                        :menu="menu"
                        :depth="0"
                      />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Portal>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { Portal } from 'portal-vue';

export default {
  components: {
    Portal,
  },
  props: {
    nav: {
      type: Array,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
      default: () => {},
    },
    contact: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState('global', ['isMobileMenuOpen', 'pageHasModalOpen', 'loaded']),
    isHomePage() {
      return this.$route.fullPath === '/';
    },
  },
  watch: {
    $route(to, from) {
      this.closeMenu();
    },
  },
  methods: {
    async openMobileMenu() {
      await this.$store.commit('global/isMobileMenuOpen', true);
      await this.$nextTick();
      await this.$nextTick();

      this.$refs.closeButtonRef?.focus();
    },
    async closeMenu(e) {
      await this.$store.commit('global/isMobileMenuOpen', false);
      await this.$nextTick();
      await this.$nextTick();
    },
  },
};
</script>

<style lang="postcss">
nav ul li div a {
  @apply tracking-wider;
}

.nuxt-link-exact-active {
  @apply opacity-100;
}
</style>
