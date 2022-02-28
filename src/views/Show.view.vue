<template>
  <div class="show__container">
    <Section>
      <ShowBanner :show="showStore.getShow" />
    </Section>
    <Section>
      <ShowInfos :show="showStore.getShow" />
    </Section>
    <Section>
      <ShowComments :show="showStore.getShow" />
    </Section>
    <Section>
      <ShowCommentForm :show="showStore.getShow" />
    </Section>
  </div>
</template>

<script>

import { useRoute } from 'vue-router';
import { useShowStore } from '@/stores/show.store';
import Section from '@/components/layer.components/Section.layer.vue';
import ShowBanner from '@/components/Custom/Show/ShowBanner.vue';
import ShowInfos from '@/components/Custom/Show/ShowInfos.vue';
import ShowComments from '@/components/Custom/Show/ShowComments.vue';
import ShowCommentForm from '@/components/form.components/Comment.form.vue';

export default {
  name: 'Show',
  components: {
    Section,
    ShowBanner,
    ShowInfos,
    ShowComments,
    ShowCommentForm
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
