<script>

import { Button } from '@/components/form.components'

export default {
    name: 'Landing',
    components: {
        Button
    },
    props: ['shows'],
    data(){
        return {
            index: 0,
            show: {
                id: 1,
                name: 'Unknow',
                summary: 'Waiting',
                image: {
                    original: ''
                }
            }
        }
    },
    computed:{},
    mounted(){
        if(Object.keys(this.shows).length){
            this.show = this.shows[this.index]
        }
        this.startCarrousel();
    },
    methods:{
        startCarrousel(){
            setInterval(function () { 
                this.next() 
            }.bind(this), 5000);
        },
        next(){
            let limit = this.shows.length;
            if(this.index < limit - 1){
                this.show = this.shows[this.index]
                this.index++;
            }else{
                this.index = 0;
            }
        }
    },
    watch:{
        shows: function(value){
            if(value.length > 0){
                this.show = this.shows[this.index]
            }
        }
    }
}
</script>

<template>
    <div class="landing-highlight" :style="{backgroundImage: 'url('+show.image.original+')'}">
        <div class="filter">
            <div class="content">
                <h2 class="title">{{show.name}}</h2>
                <div class="description" v-html="show.summary"></div>
                <RouterLink :to="'/show/'+ show.id">
                    <Button>Play</Button>
                </RouterLink>
                <RouterLink :to="'/show/'+ show.id">
                    <Button :typeColor="'secondary'">Infos</Button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.landing-highlight{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: calc(100vh - var(--header-size));
    transition: all 200ms ease-in-out;

    .filter{
        @include customFilter();
        position: relative;
        height: inherit;
        .content{
            width: 50%;
            position: absolute;
            bottom: 25%;
            left: 10%;

            .title{
                font-size: var(--fs-1);
                padding-bottom: var(--m-4)
            }

            .description{
                padding-bottom: var(--m-4)
            }
        }
    }
    
    * {
        color: #fff;
        font-weight: bold;
    }
}

</style>