<template>
  <div class="show__container">
    <Section>
      <ShowBanner :show="showStore.getShow" />
    </Section>
    <Section :height="'landing'">
      <ShowInfos :show="showStore.getShow" />
    </Section>
  </div>
</template>

<script>

import { useRoute } from 'vue-router';
import { useShowStore } from '@/stores/show.store';
import Section from '@/components/layer.components/Section.layer.vue';
import ShowBanner from '@/components/show.components/ShowBanner.vue';
import ShowInfos from '@/components/show.components/ShowInfos.vue';

export default {
  name: 'Show',
  components: {
    Section,
    ShowBanner,
    ShowInfos
  },
  setup() {
    const route = useRoute();
    const showStore = useShowStore();

    const id = route.params.id;

    showStore.initShow(id);

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
