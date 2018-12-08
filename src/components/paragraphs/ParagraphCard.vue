<template>
  <div
    v-editable="blok"
    class="ParagraphCard"
  >
    <img
      :src="$img(blok.image, 300, 200)"
      class="ParagraphCard__image"
      alt=""
    >
    <div class="ParagraphCard__body o-content">
      <h3>{{ blok.headline }}</h3>
      <div
        class="o-content"
        v-html="text"
      />
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: `ParagraphCard`,
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

.ParagraphCard {
  border: 1px solid #999;
  border-radius: 0.25em;
}

.ParagraphCard__image {
  max-height: none;
  width: 100%;
}

.ParagraphCard__body {
  padding: setting-spacing(s);
}
</style>
