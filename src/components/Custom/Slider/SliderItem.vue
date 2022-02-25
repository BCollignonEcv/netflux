<template>
    <div class="slider-item">
        <div class="card-show" @mouseenter="hover = true" @mouseleave="hover = false">
            <figure>
                <img v-if="hasImg" :src="formatedShow.image.medium" alt="" srcset="" @click="$router.push(`/show/${formatedShow.id}`)">
                <img v-else class="empty-img" @click="$router.push(`/show/${show.id}`)" >
                <figcaption class="card-show-description">
                    <div class="left">
                        <p v-if="show.name">{{show.name}}</p>
                        <p v-if="show.date">{{show.date}}</p>
                    </div>
                    <div class="right">
                        <p v-if="show.rating.average" >{{show.rating.average}}</p>
                        <HeartIcon v-if="!wishlistDisabled" title="Add to my list" @click="addToMyList"/>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/user.store'
import HeartIcon from 'vue-material-design-icons/Heart.vue';

export default {
    name: 'slider-item',
    components: {
        HeartIcon
    },
    props: ['wishlistDisabled', 'show'],
    data(){
        return {
            hover: false,
        }
    },
    computed: {
        formatedShow(){
            return this.show.hasOwnProperty('show') ? this.show.show : this.show
        },
        hasImg(){
            if(this.formatedShow.image){
                if(this.formatedShow.image.medium){
                    return true;
                }
            }
            return false; 
        }
    },
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

<style lang="scss" scoped>

.card-show{
    cursor: pointer;
    position: relative;
    .card-show-description{
        @include customFlex($mode: 'extend');
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding: 5px;

        .left{

        }

        .right{
            align-items: flex-end;
        }
    }
}

</style>