<template>
  <div
    :class="classes"
    class="ChapterLayout"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: `ChapterLayout`,
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    classes() {
      const classes = [];

      if (this.config.spacing_top) {
        classes.push(`u-spacing-top-${this.config.spacing_top}`);
      }

      if (this.config.container) {
        classes.push(`o-container o-container--${this.config.container}`);
      }

      return classes;
    },
  },
};
</script>
