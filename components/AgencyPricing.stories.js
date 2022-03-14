export default {
  title: 'Blocks/Agency Pricing',
}

export const Default = (args) => ({
  props: Object.keys(args),
  template: `
    <div>
      <AgencyPricing v-bind="$props">
      </AgencyPricing>
    </div>`,
})

Default.argTypes = {
  blok: {
    control: 'object',
  },
}

Default.args = {
  blok: {
    kicker: 'The Agency for Agencies',
    heading: 'Augment your services by leveraging a Clutch subscription.',
    text: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              text:
                'Small business is a largely underserved market when it comes to custom website design & development. This is typically because of the overhead of taking on a web project within your normal agency setting. But we don’t normal here at Clutch. We’ve developed a system that allows us to build custom websites at a fraction of the cost and nearly twice the speed!',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text:
                'Amplify what your agency can bring to your community (and bottom line) with a white label subscription to design & development services. A flat montly subscription unlocks the full power of Clutch with unlimited projects and revisions- allowing you to deliver a premium product at an affordable cost!',
              type: 'text',
            },
          ],
        },
      ],
    },
    card: [
      {
        _uid: 'a4b4d6f6-7feb-42d4-a88d-a82fb5c86394',
        price: '1999',
        kicker: 'Design/Development Subscription',
        features: [
          {
            _uid: 'a7c0ee1f-baee-4142-81bb-2d31e3c9ed90',
            label: 'Quia rem est sed impedit magnam',
          },
          {
            _uid: '1621e49f-1c47-4e2c-ade1-245d39097d81',
            label: 'Dolorem vero ratione voluptates',
          },
          {
            _uid: 'a2752c0a-03b4-4ebd-b1c0-224b5dc5cf39',
            label: 'Qui sed ab doloribus voluptatem dolore',
          },
          {
            _uid: '9c92a923-6a9e-49e9-8026-cb0d07b1a560',
            label: 'Laborum commodi molestiae id et fugiat',
          },
        ],
        bestValue: true,
        subscribe: true,
      },
    ],
  },
}
