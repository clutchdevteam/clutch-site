<template>
  <div class="max-w-6xl mx-auto px-4 lg:px-0">
    <section class="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-8 lg:mb-0">
      <div class="lg:order-last">
        <h1 class="font-body uppercase text-sm mb-2">Subscribe</h1>
        <FancyHeading class="text-3xl lg:text-4xl mb-4"
          >Add another tool to your agency arsenal.</FancyHeading
        >
        <BaseText class="opacity-75">
          You already have a winning team. Let's amplify that team's velocity
          and offerings with a white-label partnership! Your clients never have
          to know we exist. Our sites are self-sustaining, so the
          relationship/support remains between you and them after the final
          handoff. <br /><br />You bring the projects. We bring the code. You
          and your clients win.
        </BaseText>
      </div>

      <form @submit.prevent="handleSubmit">
        <input
          class="hidden"
          type="hidden"
          name="form-name"
          value="Subscribe"
        />

        <div class="lg:grid grid-cols-2 gap-6">
          <div class="flex flex-col mb-6">
            <label class="font-monts mb-2 text-sm" for="name">Name *</label>
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
            <label class="font-monts mb-2 text-sm" for="email">Email *</label>
            <input
              id="email"
              name="email"
              class="border border-gray-200 px-2 py-1"
              type="email"
              v-model="form.email"
              required
            />
          </div>
        </div>

        <div class="lg:grid grid-cols-2 gap-6">
          <div class="flex flex-col mb-6">
            <label class="font-monts mb-2 text-sm" for="companyName"
              >Company Name *</label
            >
            <input
              id="companyName"
              name="name"
              class="border border-gray-200 px-2 py-1"
              type="text"
              v-model="form.companyName"
              required
            />
          </div>

          <div class="flex flex-col mb-6">
            <label class="font-monts mb-2 text-sm" for="companyWebsite"
              >Company Website *</label
            >
            <input
              id="companyWebsite"
              name="companyWebsite"
              class="border border-gray-200 px-2 py-1"
              type="companyWebsite"
              v-model="form.companyWebsite"
              required
            />
          </div>
        </div>

        <div class="lg:grid grid-cols-2 gap-6">
          <div class="flex flex-col mb-6">
            <label class="font-monts mb-2 text-sm" for="companySize"
              >Company Size *</label
            >
            <select
              id="companySize"
              name="companySize"
              class="border border-gray-200 p-2"
              type="text"
              v-model="form.companySize"
              required
            >
              <option value="" selected disabled>Select</option>
              <option value="0-5">0-5</option>
              <option value="6-15">6-15</option>
              <option value="16-50">16-50</option>
              <option value="51-100">51-100</option>
              <option value="101-200">101-200</option>
            </select>
          </div>

          <div class="flex flex-col mb-6">
            <label class="font-monts mb-2 text-sm" for="project"
              >Project *</label
            >
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
        </div>

        <div class="flex flex-col mb-6">
          <label class="font-monts mb-2 text-sm" for="notes">Notes *</label>
          <textarea
            id="notes"
            name="notes"
            class="border border-gray-200 px-2 py-1"
            type="text"
            rows="6"
            v-model="form.notes"
            required
          />
        </div>

        <p class="hidden">
          <label
            >Don't fill this out if you're human: <input name="bot-field"
          /></label>
        </p>

        <BaseButton
          :disabled="isSubmitting"
          class="w-full lg:w-auto float-right"
          type="submit"
        >
          {{ btnText }}
        </BaseButton>

        <p
          v-if="responseMessage"
          :class="`${
            responseState === 'success' ? 'text-green-700' : 'text-red-700'
          } text-sm absolute mt-12`"
        >
          {{ this.responseMessage }}
        </p>
      </form>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        project: '',
        companyName: '',
        companyWebsite: '',
        companySize: '',
        notes: '',
      },
      responseMessage: null,
      responseState: null,
      isSubmitting: false,
    }
  },
  computed: {
    ...mapState('global', ['loaded']),
    version() {
      return this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev
        ? 'draft'
        : 'published'
    },
    btnText() {
      return this.isSubmitting ? 'Submitting...' : 'Send'
    },
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['input', 'published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      this.isSubmitting = true
      fetch('/', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'Subscribe',
          ...this.form,
        }),
      })
        .then((res, err) => {
          if (res.status === 200) {
            this.responseMessage =
              "Thanks for reaching out! We'll be in contact shortly!"
            this.responseState = 'success'
            this.isSubmitting = false

            this.form.name = ''
            this.form.email = ''
            this.form.project = ''
            this.form.companySize = ''
            this.form.companyWebsite = ''
            this.form.companyName = ''
            this.form.notes = ''
          } else {
            this.responseMessage =
              'Oops! Looks like something went wrong. Please try again!'
            this.responseState = 'error'
            this.isSubmitting = false
          }
        })
        .catch((e) => console.error(e))
    },
  },
  async fetch() {
    const globalRes = await this.$storyapi.get('cdn/stories/global', {
      version: this.version,
    })

    // set global content in vuex
    this.$store.commit('global/setGlobals', globalRes.data.story.content)
    // set loaded to true to negate uneccesary additional calls to storyblok
    this.$store.commit('global/isLoaded', true)
  },
}
</script>
