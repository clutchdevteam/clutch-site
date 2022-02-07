<template>
  <h2 class="text-gradient flex items-center font-billion text-5xl md:text-7xl">
    <span class="text-xl md:text-2xl">&lt;</span>
    <slot />
    <span class="text-xl md:text-2xl">&nbsp;/&gt;</span>
  </h2>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.text-gradient {
  background: linear-gradient(to right, #c80000, #0095d4, #0095d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
