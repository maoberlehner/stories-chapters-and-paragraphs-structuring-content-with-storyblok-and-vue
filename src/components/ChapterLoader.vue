<template>
  <div class="ChapterLoader">
    <ChapterLayout
      v-for="chapter in chapters"
      :key="chapter._uid"
      :config="chapter.config[0]"
    >
      <Component
        :is="`${chapter.component.replace(/_/g, `-`)}`"
        :blok="chapter"
      />
    </ChapterLayout>
  </div>
</template>

<script>
import ChapterLayout from './ChapterLayout.vue';

const ChapterIntro = () => import(`./chapters/ChapterIntro.vue`);
const ChapterMediaObject = () => import(`./chapters/ChapterMediaObject.vue`);
const ChapterMultiColumnTeaser = () => import(`./chapters/ChapterMultiColumnTeaser.vue`);

export default {
  name: `ChapterLoader`,
  components: {
    ChapterIntro,
    ChapterLayout,
    ChapterMediaObject,
    ChapterMultiColumnTeaser,
  },
  props: {
    chapters: {
      required: true,
      type: Array,
    },
  },
};
</script>
