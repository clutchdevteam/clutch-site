<template>
  <footer class="bg-primary py-24 border-t-4 border-red-500">
    <div
      class="base-wrapper container mx-auto flex flex-col lg:flex-row justify-between items-center"
    >
      <img v-if="logo" class="w-48 mb-12" :src="logo.filename" :alt="logo.alt" />

      <nav>
        <ul class="flex items-center space-x-12 text-white font-fira">
          <li v-for="item in nav" :key="item.id">
            <nuxt-link :to="item.link.cached_url">{{ item.label }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <p class="text-xs text-center text-white font-fira mt-6">
      Copyright &copy; 2022 | Clutch Creative, LLC
    </p>
  </footer>
</template>

<script>
export default {
  props: {
    logo: {
      type: Object,
      required: true,
    },
    nav: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
