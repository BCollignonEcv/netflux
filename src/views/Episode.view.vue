<template>
  <Section :height="'landing'">
    <EpisodeItem :episode="showStore.getEpisode"/>
  </Section>
</template>

<script>
import { useRoute } from 'vue-router'
import { useShowStore } from '@/stores/show.store'
import { Section } from '@/components/layer.components'
import { EpisodeItem } from '@/components/Custom/Episode'

export default {
  name: 'Episode',
  components: {
    Section, EpisodeItem
  },
  setup() {
    const route = useRoute();
    const showStore = useShowStore();
    const id = route.params.id;
    showStore.initEpisode(id);
    return { showStore }
  },
}
</script>

<style lang="scss" scoped>

  .landing {
    padding: 0;
    background-color: var(--c-tertiary);
  }
</style>
