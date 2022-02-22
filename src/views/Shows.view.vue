<template>
  <Section :height="'landing'">
  <div class="shows">
      <h1>This is an shows page</h1>
  </div>
  <Slider :title="'Search'" :shows="showStore.getSearchResults" :options="{scrollabled: false}"/>
  </Section>
</template>

<script>
import { useShowStore } from '@/stores/show.store'
import Section from '@/components/layer.components/Section.layer.vue'
import Slider from '@/components/Custom/Slider/Slider.vue'

export default {
  name: 'Shows',
  components: {
    Section, Slider,
  },
  setup() {
    const showStore = useShowStore();
    return { showStore }
  },
}
</script>

<style>

</style>
