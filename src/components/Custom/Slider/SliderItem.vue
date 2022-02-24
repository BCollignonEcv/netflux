<template>
    <div class="slider-item">
        <div class="card-show" @mouseenter="hover = true" @mouseleave="hover = false">
            <figure>
                <img v-if="hasImg" :src="formatedShow.image.medium" alt="" srcset="" @click="$router.push(`/show/${formatedShow.id}`)">
                <img v-else class="empty-img" @click="$router.push(`/show/${show.id}`)" >
                <!-- <figcaption v-if="hover && !wishlistDisabled" class="card-show-description">
                    <HeartIcon v-if="!wishlistDisabled" title="Add to my list" @click="addToMyList"/>
                </figcaption> -->
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

$height: 295px;
$width: 210px;
    .slider-item{
        position: relative;
        min-height: $height;
        min-width: $width;
        .card-show {
            cursor: pointer;
            &:hover{
                transform: scale(1.2);
                position: absolute;
                z-index: 5;
            }

            figure{
                img{
                    height: 100%;

                    &.empty-img{
                        width: $width;
                        height: $height;
                        background-color: var(--c-tertiary)
                    }
                }

                figcaption{
                    @include customFlex($mode: 'extend');
                    align-items: center;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                }
            }

            .card-show-description{
                @include customColor($color: 'primary');
                @include customFlex();
                padding: var(--m-3)
            }
        }
    }
</style>