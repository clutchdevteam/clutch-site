export const state = () => ({
  loaded: false,
  isMobileMenuOpen: false,
  pageHasModalOpen: false,
  mainNav: [],
  logo: null,
});

export const mutations = {
  isMobileMenuOpen(state, isMenuOpen) {
    state.isMobileMenuOpen = isMenuOpen;
  },
  isModalOpen(state, isModalOpen) {
    state.pageHasModalOpen = isModalOpen;
  },
  isLoaded(state, isLoaded) {
    state.loaded = isLoaded;
  },
  setGlobals(state, globals) {
    state.mainNav = globals.mainNav;
    state.logo = globals.logo;
  },
};