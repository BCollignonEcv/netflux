<script>

export default {
    name: 'ShowBanner',
    props: {
        show: Object,
    },
    data(){
        return {}
    },
    computed: {
        
    },
}

</script>

<template>
    <div v-if="show !== undefined && show.image !== undefined && show.image.original !== undefined" class="show__banner">
        <img class="show__banner-img" :src="show.image.original" alt="Show banner image">
        <div class="show__banner-overlay"></div>
    </div>
</template>

<style lang="scss" scoped>
    .show__banner {
        position: relative;
        width: 100%;
        height: 60vh;
    }

    .show__banner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .show__banner-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg,rgba(200,200,200,.2) 0%,var(--c-tertiary) 100%);
    }

</style>