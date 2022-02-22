<template>
  <Section :height="'landing'">
    <div class="show">
        <h1>{{show.title}}</h1>
    </div>
  </Section>
</template>

<script>
import { useShowStore } from '@/stores/show.store'
import Section from '@/components/layer.components/Section.layer.vue'

export default {
  name: 'Show',
  components: {
    Section
  },
  props: {
    show: {
      type: String,
      default: ''
    }
  },

  setup() {
    const showStore = useShowStore();
    return { showStore }
  },
}
</script>

<style>

</style>
