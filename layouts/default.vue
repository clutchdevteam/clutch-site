<template>
  <div
    :class="`${
      isMobileMenuOpen ? 'h-screen overflow-hidden' : ''
    } flex flex-col min-h-screen`"
  >
    <SiteHeader :nav="mainNav" :logo="logo" />

    <main
      :class="`${isContactPage ? 'mt-24 lg:mt-32' : ''} ${
        lockScroll ? 'overflow-hidden' : ''
      } flex-grow`"
    >
      <Nuxt />
    </main>

    <PreFooterCta v-if="!isContactPage" />
    <SiteFooter :nav="mainNav" :logo="logo" />

    <PortalTarget name="mobile-menu"></PortalTarget>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('global', [
      'pageHasModalOpen',
      'isMobileMenuOpen',
      'mainNav',
      'logo',
    ]),

    hasOpenMenu() {
      return this.pageHasModalOpen || this.isMobileMenuOpen
    },
    isHomePage() {
      return this.$route.fullPath === '/'
    },
    isContactPage() {
      return (
        this.$route.fullPath === '/contact-us' ||
        this.$route.fullPath === '/subscribe'
      )
    },
    lockScroll() {
      return this.pageHasModalOpen || this.isMobileMenuOpen
    },
  },
}
</script>
