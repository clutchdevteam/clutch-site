<template>
  <div :class="{ 'h-screen overflow-hidden': isMobileMenuOpen }">
    <SiteHeader :nav="mainNav" :logo="logo" />

    <main>
      <Nuxt />
    </main>

    <SiteFooter :nav="mainNav" :logo="logo" />

    <PortalTarget name="mobile-menu"></PortalTarget>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('global', ['pageHasModalOpen', 'isMobileMenuOpen', 'mainNav', 'logo']),
    hasOpenMenu() {
      return this.pageHasModalOpen || this.isMobileMenuOpen;
    },
    isHomePage() {
      return this.$route.fullPath === '/';
    },
    lockScroll() {
      return this.pageHasModalOpen || this.isMobileMenuOpen;
    },
  },
};
</script>
