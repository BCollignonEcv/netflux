<script>
import { useShowStore } from '@/stores/show.store'
import { useUserStore } from '@/stores/user.store'
import Section from '@/components/layer.components/Section.layer.vue'
import Slider from '@/components/Custom/Slider/Slider.vue'
import Landing from '@/components/Custom/Landing/Landing.vue'

export default {
  name: 'Home',
  components: {
    Section, Slider, Landing
  },
  setup() {
    const showStore = useShowStore();
    const userStore = useUserStore();
    showStore.initShows();
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
    <Landing :shows="showStore.getShowsHightLight"></Landing>    
  </Section>
  <Section :padding="true" :overlay="true">
    <Slider :title="'HightLigth'" :shows="showStore.getShowsHightLight"/>
  </Section>
  <Section :padding="true">
    <Slider :title="'All shows'" :shows="showStore.getShowsExeptHightLight"/>
  </Section>
    <!-- <Section>
    <transition>
      <template v-if="userStore.hasOneShow">
        <Slider :title="'Your selection'" :options="{ wishlistDisabled: true, scrollabled: true}" :shows="userStore.getShowsListFirstTen"/>
      </template>
    </transition>
  </Section> -->
</template>
