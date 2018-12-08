<template>
  <div class="ParagraphLoader">
    <Component
      :is="`${paragraph.component.replace(/_/g, `-`)}`"
      v-for="paragraph in paragraphs"
      :key="paragraph._uid"
      :blok="paragraph"
    />
  </div>
</template>

<script>
const ParagraphCard = () => import(`./paragraphs/ParagraphCard.vue`);

export default {
  name: `ParagraphLoader`,
  components: {
    ParagraphCard,
  },
  props: {
    paragraphs: {
      required: true,
      type: Array,
    },
  },
};
</script>
