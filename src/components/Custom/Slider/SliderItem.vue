<template>
    <div class="slider-item">
        <div class="card-show" @mouseenter="hovered" @mouseleave="hovered">
            <figure>
                <img v-if="hasImg" :src="formatedShow.image.medium" alt="" srcset="" @click="$router.push(`/show/${formatedShow.id}`)">
                <img v-else class="empty-img" @click="$router.push(`/show/${show.id}`)" >
                <figcaption v-if="hover" class="card-show-description">
                    <div class="left">
                        <p v-if="show.name">{{show.name}}</p>
                        <p v-if="show.date">{{show.date}}</p>
                    </div>
                    <div class="right"> 
                        <template v-if="wishlist">
                            <button @click="toggleFromMyList">
                                <HeartIcon v-if="isWhishlisted" fillColor="red"  title="Remove from my list" />
                                <HeartIcon v-else fillColor="white" title="Add to my list"/>
                            </button>
                        </template>
                        <p v-if="show.rating" >{{show.rating.average}}</p>
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
    props: {
        wishlist: Boolean,
        show: {
            type: Object,
            default: {
                name: "Empty",
                image: null,
            }
        }
    },
    data(){
        return {
            hover: false,
            isWhishlisted: false,
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
        },
    },
    setup() {
        const userStore = useUserStore();
        return { userStore }
    },
    methods: {
        hovered(){
            this.hover = !this.hover;
            if(this.hover){
                this.isWhishlisted = this.userStore.hasShow(this.show.id);
            }
        },
        toggleFromMyList(){
            if(this.isWhishlisted){
                this.isWhishlisted = false;
                this.userStore.removeShow(this.show)
            }else{
                this.isWhishlisted = true;
                this.userStore.addShow(this.show)
            }
        },
    }   
}
</script>

<style lang="scss" scoped>

.card-show{
    cursor: pointer;
    position: relative;

    img{
        width: 100%;
    }

    .card-show-description{
        @include customFlex($mode: 'extend');
        @include customColor($color: 'filter');
        align-items: flex-end;
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: 50%;
        padding: 10px;
        font-weight: bold;

        .left{
                text-align: left;
        }

        .right{
            text-align: right;
        }
    }
}

</style>