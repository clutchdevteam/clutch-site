<template>
  <div :class="`relative px-6 py-10 ${bestValue ? 'gradient' : ''}`">
    <div
      v-if="bestValue"
      class="absolute text-white top-0 left-0 right-0 flex -mt-4"
    >
      <p class="px-6 py-1 bg-gradient-to-br from-red-500 to-primary mx-auto">
        Best Value
      </p>
    </div>

    <div class="flex flex-col items-center mb-8">
      <p class="uppercase text-xs text-center mb-2 opacity-75 lg:w-3/4">
        {{ kicker }}
      </p>
      <p class="flex items-center text-lg">
        $<span
          :class="`text-4xl lg:text-7xl font-bold mx-1 ${
            bestValue ? 'text-gradient' : 'text-gray-400'
          }`"
        >
          {{ price }}</span
        >
        <span v-if="subscribe">/month</span>
        <span v-else>minimum</span>
      </p>
    </div>

    <div>
      <ul class="flex flex-col space-y-4">
        <li v-for="item in features" :key="item._uid" class="flex">
          <img class="mr-2" src="~/assets/images/check.svg" alt="" />
          <p class="text-sm">{{ item.label }}</p>
        </li>
      </ul>

      <div class="mt-6">
        <BaseButton
          v-if="subscribe"
          class="w-full text-center"
          href="/subscribe"
          >Subscribe Today</BaseButton
        >

        <div v-else class="text-center">
          <nuxt-link class="underline" to="/contact-us"
            >Hire Us</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bestValue: {
      type: Object,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    kicker: {
      type: String,
      default: '',
    },
    subscribe: {
      type: Boolean,
      default: false,
    },
    features: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.text-gradient {
  color: #0075ff;
  display: inline-block;
}

@supports ((background-clip: text) or (-webkit-background-clip: text)) and
  ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .text-gradient {
    background-image: linear-gradient(120deg, #d00000, #0075ff);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.gradient {
  border-style: solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(120deg, #d00000, #0075ff);
}
</style>
