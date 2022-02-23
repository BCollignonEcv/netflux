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
        <img class="show__banner-img" :src="show.image.original" alt="">
    </div>
</template>

<style lang="scss" scoped>
    .show__banner {
        width: 100%;
        height: 600px;
    }

    .show__banner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>