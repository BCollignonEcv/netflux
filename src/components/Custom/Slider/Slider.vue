<script>
import SliderItem from './SliderItem.vue'

export default {
    name: 'Slider',
    components: {
        SliderItem
    },
    props: {
        title: String, 
        options: {
            type: Object,
            default() {
                return {
                    wishlistDisabled: false,
                    scrollable: true
                }
            }
        }, 
        shows: Object
    },
    data(){
        return {}
    },
    computed: {
        hasShows(){
            return this.shows && this.shows.length > 0
        }
    },
}
</script>

<template>
  <div class="shows-list">
      <h2 v-if="title && hasShows">{{title}}</h2>
      <div class="shows-list-container">
        <SliderItem 
            v-for="show in shows" :key="show.id" 
            :show="show" 
            :wishlistDisabled="this.options.wishlistDisabled"
            :class="{ 'catalog': !this.options.scrollabled }"
        />
      </div>
  </div>
</template>

<style lang="scss" scoped>
    .shows-list{
        padding: var(--m-3) 0;
        .shows-list-container {
            @include customFlex($gap: 5, $mode: 'extend');
            padding: var(--m-5) 0;

            &.catalog{
                @include customFlex($wrap: nowrap);
            }
        }
    }
</style>