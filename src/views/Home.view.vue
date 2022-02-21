<script>
import { useSearchStore } from '@/stores/search.store'
import { useUserStore } from '@/stores/user.store'
import Section from '@/components/layer.components/Section.layer.vue'
import ShowList from '@/components/Custom/Show/ShowList.vue'

export default {
  name: 'Home',
  components: {
    Section, ShowList
  },
  setup() {
    const searchStore = useSearchStore();
    const userStore = useUserStore();
    return { searchStore, userStore }
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
    <transition>
      <template v-if="userStore.hasOneShow">
        <ShowList :title="'Your selection'" :options="{ wishlistDisabled: true, scrollabled: true}" :shows="userStore.getShowsListFirstTen"/>
      </template>
    </transition>
    <ShowList :shows="searchStore.getSearchResults"/>
  </Section>
</template>
