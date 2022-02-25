<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import SliderItem from "./SliderItem.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
    name: 'Slider',
    components: {
        Swiper, SwiperSlide, SliderItem
    },
    props: {
        title: String, 
        shows: Object,
<<<<<<< HEAD
        wishlist: {
            type: Boolean,
            default: true
        },
=======
>>>>>>> 78842f3439c1333d7af3fdab2f87118eedb6f9f6
    },
    setup(){
        return {
            modules: [Navigation],
        }
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

<template v-if="hasShows">
  <div class="shows-list">
      <h2 v-if="title && hasShows" class="title">{{title}}</h2>
      <div class="shows-list-container">
        <Swiper class="swiper"
            :slidesPerView="8"
            :slidesPerGroup="8"
            :spaceBetween="24"
            :loop="true"
            :navigation="true"
            :modules="modules">
            <swiper-slide v-for="show in shows" :key="show.id">
                <SliderItem 
                    :show="show"
                    :wishlist="wishlist"
                />
            </swiper-slide>
        </Swiper>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.shows-list{
    .title{
        margin-bottom: var(--m-3);
    }
}

</style>