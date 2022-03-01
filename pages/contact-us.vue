<template>
  <div class="max-w-4xl mx-auto mb-24">
    <section class="grid lg:grid-cols-2 gap-12 lg:gap-20">
      <div class="lg:order-last">
        <h1 class="font-body uppercase text-sm mb-2">Contact Us</h1>
        <FancyHeading class="text-3xl lg:text-4xl mb-4">You're doing something right.</FancyHeading>
        <BaseText class="opacity-75">
          The fact that you’re considering a website means you’re chasing your dreams or already
          living them. More than anything else, we really just want to empower you to keep doing
          that! Create that business. Engage your customers. Keep after that passion project.<br /><br />Whatever
          it is, we’ll build a website tailored to fit it.
        </BaseText>
      </div>

      <form @submit.prevent="handleSubmit">
        <input class="hidden" type="hidden" name="form-name" value="Contact" />

        <div class="flex flex-col mb-6">
          <label class="font-monts mb-2 text-sm" for="name">Name</label>
          <input
            id="name"
            name="name"
            class="border border-gray-200 px-2 py-1"
            type="text"
            v-model="form.name"
            required
          />
        </div>

        <div class="flex flex-col mb-6">
          <label class="font-monts mb-2 text-sm" for="email">Email</label>
          <input
            id="email"
            name="email"
            class="border border-gray-200 px-2 py-1"
            type="email"
            v-model="form.email"
            required
          />
        </div>

        <div class="flex flex-col mb-6">
          <label class="font-monts mb-2 text-sm" for="project">Project</label>
          <select
            id="project"
            name="project"
            class="border border-gray-200 p-2"
            type="text"
            v-model="form.project"
            required
          >
            <option value="" selected disabled>Select</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Consulting">Consulting</option>
          </select>
        </div>

        <div class="flex flex-col mb-6">
          <label class="font-monts mb-2 text-sm" for="message">Message</label>
          <textarea
            id="message"
            name="message"
            class="border border-gray-200 px-2 py-1"
            type="text"
            rows="6"
            v-model="form.message"
            required
          />
        </div>

        <p class="hidden">
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <BaseButton class="w-full lg:w-auto float-right" type="submit">Send</BaseButton>
      </form>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        project: '',
        message: '',
      },
    };
  },
  computed: {
    ...mapState('global', ['loaded']),
    version() {
      return this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev
        ? 'draft'
        : 'published';
    },
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(['input', 'published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'Contact',
          ...this.form,
        }),
      })
        .then((res, err) => {
          if (res.status === 200) {
            this.responseMessage = "Thanks for reaching out! We'll be in contact shortly!";
            this.responseState = 'success';

            this.form.name = '';
            this.form.email = '';
            this.form.project = '';
            this.form.message = '';
          } else {
            this.responseMessage = 'Oops! Looks like something went wrong. Please try again!';
            this.responseState = 'error';
          }
        })
        .catch((e) => console.error(e));
    },
  },
  async fetch() {
    const globalRes = await this.$storyapi.get('cdn/stories/global', {
      version: this.version,
    });

    // set global content in vuex
    this.$store.commit('global/setGlobals', globalRes.data.story.content);
    // set loaded to true to negate uneccesary additional calls to storyblok
    this.$store.commit('global/isLoaded', true);
  },
};
</script>
