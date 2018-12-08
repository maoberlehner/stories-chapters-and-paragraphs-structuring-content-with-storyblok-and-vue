<template>
  <ParagraphLoader
    v-editable="blok"
    :paragraphs="blok.teasers"
    class="ChapterMultiColumnTeaser"
  />
</template>

<script>
import ParagraphLoader from '../ParagraphLoader.vue';

export default {
  name: `ChapterMultiColumnTeaser`,
  components: {
    ParagraphLoader,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/settings/spacings';

.ChapterMultiColumnTeaser {
  display: grid;
  grid-gap: setting-spacing(m);
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
