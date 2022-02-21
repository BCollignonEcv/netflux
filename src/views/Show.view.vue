<template>
  <div class="shows">
    <h1>This is an single show page</h1>
  </div>
</template>

<script>
import { useSearchStore } from '@/stores/search.store'

export default {
  name: 'Show',
    props: {
    show: {
      type: String,
      default: ''
    }
  },
  setup() {
    const searchStore = useSearchStore();
    return { searchStore }
  },
}
</script>

<style>

</style>
