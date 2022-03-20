<template>
  <section class="my-16 lg:my-36">
    <ClientTestimonial :testimonial="blok.testimonials[0]" />
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
}
</script>
