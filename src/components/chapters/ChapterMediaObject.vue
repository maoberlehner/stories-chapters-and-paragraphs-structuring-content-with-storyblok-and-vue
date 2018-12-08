<template>
  <div
    v-editable="blok"
    class="ChapterMediaObject"
  >
    <div class="ChapterMediaObject__layout">
      <div class="ChapterMediaObject__figure">
        <img
          :src="$img(blok.image, 450, 340)"
          :srcset="`${$img(blok.image, 900, 680, { quality: 40 })} 2x`"
          alt=""
        >
      </div>
      <div
        class="ChapterMediaObject__body o-content"
        v-html="text"
      />
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: `ChapterMediaObject`,
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

.ChapterMediaObject {
  overflow: hidden;
}

.ChapterMediaObject__layout {
  display: flex;
  margin-top: -(setting-spacing(m));
  margin-left: -(setting-spacing(xxl));
  flex-wrap: wrap;

  > * {
    padding-top: setting-spacing(m);
    padding-left: setting-spacing(xxl);
  }

  align-items: center;
}

.ChapterMediaObject__body {
  flex-basis: 24em;
  flex-grow: 1;
}

.ChapterMediaObject__figure {
  margin-right: auto;
  max-width: 450px;
  flex-basis: 16em;
  flex-grow: 1;
  box-sizing: content-box;
}
</style>
