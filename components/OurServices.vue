<template>
  <section class="base-wrapper my-24 lg:my-48">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="lg:border-r border-gray-100">
        <p class="text-xs uppercase mb-4">{{ blok.kicker }}</p>
        <FancyHeading class="text-3xl lg:text-4xl lg:w-4/5 mb-8">{{ blok.heading }}</FancyHeading>
        <BaseText class="opacity-75 lg:w-3/4">{{ blok.text }}</BaseText>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div v-for="service in blok.services" :key="service.id">
          <h3 class="text-xl text-primary mb-3">{{ service.heading }}</h3>
          <div class="text-sm opacity-75">
            <p class="mb-6">{{ service.text }}</p>

            <hr class="mb-6 w-1/2" />
            <ul>
              <li class="mb-1" v-for="item in service.items" :key="item.id">{{ item.label }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
