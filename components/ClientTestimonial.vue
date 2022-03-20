<template>
  <div
    class="relative bg-gray-100 px-6 pb-4 pt-8 lg:px-14 lg:pb-12 lg:pt-16 max-w-xl mx-auto mt-8 flex justify-center"
  >
    <svg
      class="w-12 h-12 lg:w-16 lg:h-16 absolute top-0 -mt-6 lg:-mt-8"
      viewBox="0 0 63 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.1953 38.1094C28.1953 41.1094 26.9766 43.7344 24.5391 45.9844C22.1484 48.2344 19.3125 49.3594 16.0312 49.3594C10.875 49.3594 6.91406 47.6484 4.14844 44.2266C1.38281 40.8047 0 36.0703 0 30.0234C0 24.3984 2.36719 18.7266 7.10156 13.0078C11.8828 7.28906 17.625 2.95312 24.3281 0L27.4219 4.99219C22.125 7.57031 17.9766 10.5703 14.9766 13.9922C11.9766 17.4141 10.2422 21.5625 9.77344 26.4375H13.7109C16.6172 26.4375 18.9844 26.7656 20.8125 27.4219C22.6406 28.0781 24.1172 28.9922 25.2422 30.1641C26.3203 31.2891 27.0703 32.5312 27.4922 33.8906C27.9609 35.25 28.1953 36.6562 28.1953 38.1094ZM62.8594 38.1094C62.8594 41.1094 61.6406 43.7344 59.2031 45.9844C56.8125 48.2344 53.9766 49.3594 50.6953 49.3594C45.5391 49.3594 41.5781 47.6484 38.8125 44.2266C36.0469 40.8047 34.6641 36.0703 34.6641 30.0234C34.6641 24.3984 37.0312 18.7266 41.7656 13.0078C46.5469 7.28906 52.2891 2.95312 58.9922 0L62.0859 4.99219C56.7891 7.57031 52.6406 10.5703 49.6406 13.9922C46.6406 17.4141 44.9062 21.5625 44.4375 26.4375H48.375C51.2812 26.4375 53.6484 26.7656 55.4766 27.4219C57.3047 28.0781 58.7812 28.9922 59.9062 30.1641C60.9844 31.2891 61.7344 32.5312 62.1562 33.8906C62.625 35.25 62.8594 36.6562 62.8594 38.1094Z"
        fill="url(#paint0_linear_452_204)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_452_204"
          x1="0"
          y1="0"
          x2="68.5697"
          y2="10.3674"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D00000" />
          <stop offset="1" stop-color="#0075FF" />
        </linearGradient>
      </defs>
    </svg>

    <div>
      <BaseText class="opacity-75 mb-6">{{ testimonial.quote }}</BaseText>
      <p class="text-gradient font-monts float-right text-xs">
        - {{ testimonial.name }}
      </p>
    </div>
  </div>
</template>

<script>
import QuotesIcon from '~/assets/images/quotes.svg?inline'

export default {
  components: {
    QuotesIcon,
  },
  props: {
    testimonial: {
      type: Object,
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
</style>
