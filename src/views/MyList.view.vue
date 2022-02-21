<template>
  <Section :height="'landing'">
    <h1>My list</h1>
    <transition>
      <template v-if="userStore.hasOneShow">
        <ShowList :options="{ wishlistDisabled: true}" :shows="userStore.getShowsListFirstTen"/>
      </template>
    </transition>
  </Section>
</template>

<script>
import { useUserStore } from '@/stores/user.store'
import Section from '@/components/layer.components/Section.layer.vue'
import ShowList from '@/components/Custom/Show/ShowList.vue'

export default {
  components: {
    Section, ShowList
  },
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
}
</script>
<style>

</style>
