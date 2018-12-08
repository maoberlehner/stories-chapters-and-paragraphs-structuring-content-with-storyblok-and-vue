<template>
  <div
    v-editable="blok"
    class="ChapterIntro"
  >
    <h1>{{ blok.headline }}</h1>
    <div
      class="ChapterIntro__body o-content"
      v-html="text"
    />
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: `ChapterIntro`,
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    text() {
      return marked(this.blok.text);
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/settings/spacings';

.ChapterIntro {
  text-align: center;
  font-size: 1.25em;
}

.ChapterIntro__body {
  margin-top: setting-spacing(xs);
}
</style>
