<script>
import { useShowStore } from '@/stores/show.store'
import { useUserStore } from '@/stores/user.store'
import { Section } from '@/components/layer.components'
import { Slider } from '@/components/Custom/Slider'
import { Landing } from '@/components/Custom/Landing'

export default {
  name: 'Home',
  components: {
    Section, Slider, Landing
  },
  setup() {
    const showStore = useShowStore();
    const userStore = useUserStore();
    return { showStore, userStore }
  },
  data() {
    return {
    }
  },
  computed: {},
  mounted(){
    
  },
  methods: {},
}
</script>

<template>
  <Section :height="'landing'">
    <Landing :shows="showStore.getShowsHightLight"></Landing>
  </Section>
  <Section :padding="true" :overlay="true">
    <Slider :title="'HightLigth'" :shows="showStore.getShowsHightLight"/>
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
