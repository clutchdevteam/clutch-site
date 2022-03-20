export default {
  title: 'Blocks/Client Testimonial',
}

export const Default = (args) => ({
  props: Object.keys(args),
  template: `
    <ClientTestimonial v-bind="$props" />
  `,
})

Default.argTypes = {
  testimonial: {
    control: 'object',
  },
}

Default.args = {
  testimonial: {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'John Doe, ACME Industries',
  },
}
