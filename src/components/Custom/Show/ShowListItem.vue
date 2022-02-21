<template>
  <div>
      <div class="squareShow">
          <figure>
              <img src="" alt="" srcset="">
              <figcaption v-if="!wishlistDisabled" @click="addToMyList()">Add to my list</figcaption>
          </figure>
      </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user.store'

export default {
    name: 'showList-item',
    props: ['wishlistDisabled', 'show'],
    setup() {
        const userStore = useUserStore();
        return { userStore }
    },
    methods: {
        addToMyList(){
            this.userStore.addShow(this.show)
        }
    }   
}
</script>

<style lang="scss">
    .squareShow{
        width: 120px;
        height: 200px;
        background-color: red;

        figcaption{
            cursor: pointer;
        }
    }
</style>