<script>
import { useShowStore } from '@/stores/show.store'
import { useUserStore } from '@/stores/user.store'
import Section from '@/components/layer.components/Section.layer.vue'
import Slider from '@/components/Custom/Slider/Slider.vue'

export default {
  name: 'Home',
  components: {
    Section, Slider
  },
  setup() {
    const showStore = useShowStore();
    showStore.initShows();
    const userStore = useUserStore();
    return { showStore, userStore }
  },
  data() {
    return {
    }
  },
  computed: {},
  methods: {}
}
</script>

<template>
  <Section :height="'landing'">
    <h1>Hello on Netflux</h1>
    
  </Section>
  <Section>
    <transition>
      <template v-if="userStore.hasOneShow">
        <Slider :title="'Your selection'" :options="{ wishlistDisabled: true, scrollabled: true}" :shows="userStore.getShowsListFirstTen"/>
      </template>
    </transition>
  </Section>
  <Section>
    <transition>
      <template>
        <Slider :title="'All'" :options="{ wishlistDisabled: true, scrollabled: true}" :shows="showStore.getShows"/>
      </template>
    </transition>
  </Section>
</template>
