export { default as SiteFooter } from '../../components/global/SiteFooter.vue'
export { default as SiteHeader } from '../../components/global/SiteHeader.vue'
export { default as AccentText } from '../../components/AccentText.vue'
export { default as FancyHeading } from '../../components/FancyHeading.vue'
export { default as FeaturedProject } from '../../components/FeaturedProject.vue'
export { default as FinalThoughts } from '../../components/FinalThoughts.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Highlight } from '../../components/Highlight.vue'
export { default as Page } from '../../components/Page.vue'
export { default as TwoColumnImage } from '../../components/TwoColumnImage.vue'
export { default as TwoColumnVideo } from '../../components/TwoColumnVideo.vue'
export { default as BaseButton } from '../../components/base/BaseButton.vue'
export { default as BaseMenu } from '../../components/base/BaseMenu.vue'
export { default as BaseMenuItem } from '../../components/base/BaseMenuItem.vue'
export { default as BaseText } from '../../components/base/BaseText.vue'
export { default as BaseTwoCol } from '../../components/base/BaseTwoCol.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
