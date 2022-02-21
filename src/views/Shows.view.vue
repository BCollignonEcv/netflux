<template>
  <Section :height="'landing'">
  <div class="shows">
      <h1>This is an shows page</h1>
  </div>
  <ShowList :shows="searchStore.getSearchResults"/>
  </Section>
</template>

<script>
import { useSearchStore } from '@/stores/search.store'
import Section from '@/components/layer.components/Section.layer.vue'
import ShowList from '@/components/Custom/Show/ShowList.vue'

export default {
  name: 'Shows',
  components: {
    Section, ShowList,
  },
  setup() {
    const searchStore = useSearchStore();
    return { searchStore }
  },
}
</script>

<style>

</style>
