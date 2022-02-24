<template>
  <div class="searchBar">
    <transition name="switch" mode="out-in">
        <template v-if="active">
          <form action="" @submit.prevent="userSearch()" class="form">
            <input type="text" name="" id="" v-model="search" placeholder="Search" @mouseleave="isOnSearch" class="input-search">
            <button type="submit" class="btn-submit"><MagnifyIcon :size="18"/></button>
          </form>
        </template>
        <template v-else>
            <MagnifyIcon :size="24" @click="active = true" @mouseover="active = true"/>
        </template>
      </transition>
  </div>
</template>

<script>
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

export default {
  components: {
    MagnifyIcon
  },
  emits: ['user:search'],
  data() {
    return {
      active: false,
      search: null,
    }
  },
  computed: {
    isOnSearch(){
      if(!this.search){
        this.active = false;
      }
    }
  },
  methods: {
    userSearch(){
      this.active = false;
      this.$emit('user:search', this.search);
      this.search = null;
    }
  }
}
</script>

<style lang="scss" scoped>

.searchBar{

  .form{
    border-radius: 15px;
    padding: 5px 15px;
    background: var(--c-neutral);
    .input-search{
      color: var(--c-tertiary)
    }

    .btn-submit{
      cursor: pointer;
    }
  }
}
.switch-enter-active{
  transition: all 0.25s ease-out;
}

.switch-leave-active {
  transition: all 0.1s ease-out;
}

.switch-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.switch-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

</style>