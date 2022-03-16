<template>
  <div class="show__container">
    <Section>
      <ShowLanding :show="showStore.getShow" />
    </Section>
    <Section>
      <ShowInfos :show="showStore.getShow" />
    </Section>
    <Section>
      <ShowComments :show="showStore.getShow" :showComments="showStore.getShowComments" />
    </Section>
    <Section>
      <ShowCommentForm :show="showStore.getShow" :showComments="showStore.getShowComments" />
    </Section>
  </div>
</template>

<script>

import { useRoute } from 'vue-router';
import { useShowStore } from '@/stores/show.store';
import { Section } from '@/components/layer.components';
import { ShowLanding, ShowInfos, ShowComments, ShowCommentForm } from '@/components/Custom/Show';

export default {
  name: 'Show',
  components: {
    Section,
    ShowLanding,
    ShowInfos,
    ShowComments,
    ShowCommentForm
  },
  data() {
    return{
      show: []
    }
  },
  setup() {
    const route = useRoute();
    const showStore = useShowStore();

    const id = route.params.id;
    showStore.initShowWithEpisodes(id);

    return { showStore };
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
  .show__container {
    min-height: 80vh;
    background-color: var(--c-tertiary);
  }
</style>
