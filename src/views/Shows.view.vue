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
    <Slider :title="'Comedy :'" :shows="showStore.getShowsByGenre('Comedy')"/>
  </Section>
  <Section :padding="true">
    <Slider :title="'Family :'" :shows="showStore.getShowsByGenre('Family')"/>
  </Section>
</template>

<script>
import { Section } from '@/components/layer.components'
import { Slider } from '@/components/Custom/Slider'
import { useShowStore } from '@/stores/show.store'
import { useUserStore } from '@/stores/user.store'

export default {
  name: 'Shows',
  components: {
    Section, Slider,
  },
  setup() {
    const showStore = useShowStore();
    const userStore = useUserStore();
    return { showStore, userStore }
  },
}
</script>

<style>

</style>
