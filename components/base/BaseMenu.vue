<template>
  <div>
    <template v-if="menu.submenus">
      <BaseMenuItem :class="classes" :menu="menu" :depth="depth + 1" />
    </template>

    <nuxt-link
      :class="`${classes} block`"
      v-else
      :id="menu.label.toLowerCase().replace(' ', '-')"
      :to="menu.link.cached_url"
    >
      {{ menu.label }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
    classes: {
      type: String,
      default: '',
    },
  },
};
</script>
