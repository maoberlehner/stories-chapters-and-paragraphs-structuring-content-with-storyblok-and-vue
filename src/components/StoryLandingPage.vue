<template>
  <div class="StoryLandingPage">
    <ChapterLoader :chapters="content.chapters"/>
  </div>
</template>

<script>
import ChapterLoader from './ChapterLoader.vue';

export default {
  name: `StoryLandingPage`,
  components: {
    ChapterLoader,
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
};
</script>
