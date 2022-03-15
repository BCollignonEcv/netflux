<script>

export default {
    name: 'ShowLanding',
    props: {
        show: Object,
    },
    data(){
        return {}
    },
    computed: {
        ready(){
            if(this.show !== undefined && this.show.image){
                return 'original' in this.show.image
            }
            return false
        }
    },
}

</script>

<template>
    <div v-if="ready" class="show__landing">
        <img class="show__landing-img" :src="show.image.original" alt="Show landing image">
        <div class="show__landing-overlay"></div>
    </div>
    <div v-else class="show__landing">
        <img class="show__landing-img" src="@/assets/img/empty-img.jpg" alt="Show landing image">
        <div class="show__landing-overlay"></div>
    </div>
</template>

<style lang="scss" scoped>
    .show__landing {
        position: relative;
        width: 100%;
        height: 60vh;
    }

    .show__landing-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .show__landing-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg,rgba(200,200,200,.2) 0%,var(--c-tertiary) 100%);
    }

</style>