<template>
  <Section :height="'landing'">
    <h1>My list</h1>
    <transition>
      <template v-if="userStore.hasOneShow">
        <Slider :options="{ wishlistDisabled: true}" :shows="userStore.getShowsListFirstTen"/>
      </template>
    </transition>
  </Section>
</template>

<script>
import { useUserStore } from '@/stores/user.store'
import Section from '@/components/layer.components/Section.layer.vue'
import Slider from '@/components/Custom/Slider/Slider.vue'

export default {
  components: {
    Section, Slider
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
}
</script>
<style>

</style>
