<template>
  <div :class="{ 'h-screen overflow-hidden': isMobileMenuOpen }">
    <SiteHeader :nav="mainNav" :logo="logo" />

    <main
      :class="`${!isHomePage || isContactPage ? 'mt-24 lg:mt-32' : ''} ${
        lockScroll ? 'overflow-hidden' : ''
      }`"
    >
      <Nuxt />
    </main>

    <PreFooterCta v-if="!isContactPage" />
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
    isContactPage() {
      return this.$route.fullPath === '/contact-us';
    },
    lockScroll() {
      return this.pageHasModalOpen || this.isMobileMenuOpen;
    },
  },
};
</script>
