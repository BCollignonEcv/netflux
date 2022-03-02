<template>
  <Section :padding="true">
      <Slider :title="'Search'" :shows="showStore.getSearchedShows"/>
  </Section>
  <Section :padding="true">
      <Slider :title="'My list'" :shows="userStore.getShowsList"/>
  </Section>
  <Section :padding="true">
    <Slider :title="'Actions :'" :shows="showStore.getShowsByGenre('Action')"/>
  </Section>
  <Section :padding="true">
    <Slider :title="'Crime :'" :shows="showStore.getShowsByGenre('Crime')"/>
  </Section>
  <Section :padding="true">
    <Slider :title="'Family :'" :shows="showStore.getShowsByGenre('Family')"/>
  </Section>
  <Section :padding="true">
    <Slider :title="'Comedy :'" :shows="showStore.getShowsByGenre('Comedy')"/>
  </Section>
  <Section :padding="true">
    <Slider :title="'Drama :'" :shows="showStore.getShowsByGenre('Drama')"/>
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
