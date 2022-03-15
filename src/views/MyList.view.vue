<template>
  <Section :height="'landing'" :padding="true">
    <template v-if="userStore.hasOneShow">
      <Slider :title="'My list'" :shows="userStore.getShowsList"/>
    </template>
    <template v-else>
      <h2>My list</h2>
      <p>You don't have favorite shows list yet !</p>
    </template>
  </Section>
</template>

<script>
import { useUserStore } from '@/stores/user.store'
import { Section } from '@/components/layer.components'
import { Slider, SliderItem } from '@/components/Custom/Slider'

export default {
  components: {
    Section, Slider, SliderItem
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
  mounted(){
  }
}
</script>
<style>

</style>
