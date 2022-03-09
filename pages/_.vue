<template>
  <component
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
    :is="story.content.component"
  />
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      story: { content: {} },
    };
  },
  computed: {
    ...mapState("global", ["loaded"]),
    version() {
      return this.$nuxt.context.query._storyblok || this.$nuxt.context.isDev
        ? "draft"
        : "published";
    },
    isProdSite() {
      const { host } = window.location;
      return host === "theclutch.dev";
    },
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on("enterEditMode", (event) => {
        this.isProdSite && this.$fetch();

        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(["input", "published", "change"], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },
  async fetch() {
    if (!this.loaded) {
      const globalRes = await this.$storyapi.get("cdn/stories/global", {
        version: this.version,
      });

      // set global content in vuex
      this.$store.commit("global/setGlobals", globalRes.data.story.content);
      // set loaded to true to negate uneccesary additional calls to storyblok
      this.$store.commit("global/isLoaded", true);
    }

    const fullSlug = this.$route.path === "/" ? "home" : this.$route.path;

    let res;
    try {
      res = await this.$storyapi.get(`cdn/stories/${fullSlug}`, {
        version: this.version,
      });
      this.story = res.data.story;
    } catch (e) {
      if (!e.response) {
        this.$nuxt.context.error({
          statusCode: 404,
          message: "Failed to receive content from api",
        });
      } else {
        this.$nuxt.context.error({
          statusCode: e.response.status,
          message: e.response.data,
        });
      }
    }
  },
};
</script>
