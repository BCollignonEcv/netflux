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
        wishlist: {
            type: Boolean, 
            default: true
        },
    },
    setup(){
        return {
            modules: [Navigation],
        }
    },
    data(){
        return {
            slideByPage: 8,
        }
    },
    computed: {
        hasShows(){
            return this.shows && Object.keys(this.shows).length > 0
        },
        hasEnoughtShowsToLoop(){
            return Object.keys(this.shows).length > this.slideByPage
        }
    },
}
</script>

<template v-if="hasShows">
  <div class="shows-list" :id="Object.keys(this.shows).length">
      <h2 v-if="title && hasShows" class="title">{{title}}</h2>
      <div class="shows-list-container">
        <Swiper class="swiper"
            :slidesPerView="slideByPage"
            :slidesPerGroup="slideByPage"
            :spaceBetween="24"
            :loop="hasEnoughtShowsToLoop"
            :navigation="true"
            :lazyLoading="true"
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

<style lang="scss">
.shows-list{
    .title{
        margin-bottom: var(--m-5);
    }

    .swiper-button-prev{
        top: 0;
        left: 0;
        height: 100%;
        width: 3vw;
        margin: auto;
        color: var(--c-primary);
        transition: all .3s ease-in-out;

        &:hover{
            @include customColor($color: 'filter');
            width: 5vw;
            color: var(--c-primary);
            transition: all .3s ease-in-out;
        }
    }

    .swiper-button-next{
        top: 0;
        right: 0;
        height: 100%;
        width: 5vw;
        margin: auto;
        color: var(--c-primary);
        transition: all .3s ease-in-out;

        &:hover{
            @include customColor($color: 'filter');
            width: 5vw;
            color: var(--c-primary);
            transition: all .3s ease-in-out;
        }
    }
}

</style>