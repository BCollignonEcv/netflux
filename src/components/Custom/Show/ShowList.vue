<script>
import ShowListItem from './ShowListItem.vue'

export default {
    name: 'ShowList',
    components: {
        ShowListItem
    },
    props: {
        title: String, 
        options: {
            type: Object,
            default() {
                return {
                    wishlistDisabled: false,
                    scrollable: false
                }
            }
        }, 
        shows: Object
    },
    data(){
        return {}
    }
}
</script>
<template>
  <div class="shows-list">
      <h2 v-if="title">{{title}}</h2>
      <div class="shows-list-container">
        <ShowListItem 
            v-for="show in shows" :key="show.id" 
            :show="show" 
            :wishlistDisabled="this.options.wishlistDisabled"
            :scrollabled="this.options.scrollabled"
        />
      </div>
  </div>
</template>

<style lang="scss" scoped>
    .shows-list{
        padding: var(--m-3) 0;
        .shows-list-container {
            @include customFlex($gap: 2);
            padding: var(--m-5) 0;
        }
    }
</style>