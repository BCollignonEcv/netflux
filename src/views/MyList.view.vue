<template>
  <Section :height="'landing'" :padding="true">
    <h1>My list</h1>
      <template v-if="userStore.hasOneShow">
        <Slider :shows="userStore.getShowsList"/>
      </template>
      <template v-else>
        <SliderItem :show="{name: 'Empty'}"/>
      </template>
  </Section>
</template>

<script>
import { useUserStore } from '@/stores/user.store'
import Section from '@/components/layer.components/Section.layer.vue'
import Slider from '@/components/Custom/Slider/Slider.vue'
import SliderItem from '@/components/Custom/Slider/SliderItem.vue'

export default {
  components: {
    Section, Slider, SliderItem
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
  mounted(){
    console.log(this.userStore.getShowsList)
  }
}
</script>
<style>

</style>
