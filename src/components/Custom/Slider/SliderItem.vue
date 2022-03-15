<template>
    <div class="slider-item">
        <div class="card-show" @mouseover="mouseover" @mouseleave="mouseleave">
            <figure>
                <img v-if="hasImg" :src="formatedShow.image.medium" :alt="formatedShow.name + '-picture'" srcset="" @click="goToShow">
                <img v-else src="@/assets/img/empty-img.jpg" class="notfound-img" alt="empty-picture" @click="goToShow">
                <figcaption v-if="hover" class="card-show-description">
                    <div class="left">
                        <p v-if="formatedShow.name">{{formatedShow.name}}</p>
                        <p v-if="formatedShow.date">{{formatedShow.date}}</p>
                    </div>
                    <div class="right"> 
                        <template v-if="wishlist">
                            <button @click="toggleFromMyList">
                                <HeartIcon v-if="isWhishlisted" fillColor="red"  title="Remove from my list" />
                                <HeartIcon v-else fillColor="white" title="Add to my list"/>
                            </button>
                        </template>
                        <p v-if="formatedShow.rating" >{{formatedShow.rating.average}}</p>
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
        mouseover: function () {
            this.hover = true;
            this.isWhishlisted = this.userStore.hasShow(this.formatedShow.id);
        },
        mouseleave: function () {
            this.hover = false;
        },
        goToShow: function() {
            this.$router.push(`/show/${this.formatedShow.id}`)
        },
        toggleFromMyList: function(){
            if(this.isWhishlisted){
                this.isWhishlisted = false;
                this.userStore.removeShow(this.formatedShow)
            }else{
                this.isWhishlisted = true;
                this.userStore.addShow(this.formatedShow)
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

        &.notfound-img{
            height: 100%;
            background-color: var(--c-neutral);
        }
    }

    .card-show-description{
        @include customFlex($mode: 'extend');
        @include customFilter();
        align-items: flex-end;
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: 50%;
        padding: 10px;
        font-weight: bold;
        pointer-events: none;

        .left{
                text-align: left;
        }

        .right{
            text-align: right;

            button {
                pointer-events: auto;
            }
        }
    }
}

</style>