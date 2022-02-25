<template>
  <Section :height="'landing'" :padding="true">
    <template v-if="userStore.hasOneShow">
      <Slider :title="'My list'" :shows="userStore.getShowsList"/>
    </template>
    <Slider :title="'Search'" :shows="showStore.getSearchedShows"/>
    <Slider :title="'All'" :shows="showStore.getShows"/>
  </Section>
</template>

<script>
import { useShowStore } from '@/stores/show.store'
import { useUserStore } from '@/stores/user.store'
import Section from '@/components/layer.components/Section.layer.vue'
import Slider from '@/components/Custom/Slider/Slider.vue'

export default {
  name: 'Shows',
  components: {
    Section, Slider,
  },
  setup() {
    const showStore = useShowStore();
    const userStore = useUserStore();
    showStore.initShows();
    return { showStore, userStore }
  },
}
</script>

<style>

</style>
