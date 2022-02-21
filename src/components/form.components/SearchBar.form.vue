<template>
    <template v-if="active">
      <input type="text" name="" id="" placeholder="Search">
    </template>
    <template v-else>
        <MagnifyIcon :size="18" @click="active = true"/>
    </template>
</template>

<script>
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

export default {
  components: {
    MagnifyIcon
  },
  data() {
    return {
      active: false,
    }
  }
}
</script>

<style>

</style>