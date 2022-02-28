<script>
import { useRoute } from 'vue-router';
import { useShowStore } from '@/stores/show.store';

export default {
    name: 'ShowComments',
    components: {
        
    },
    setup() {
        const route = useRoute();
        const showStore = useShowStore();

        const id = route.params.id;

        return { showStore };
    },
    props: {
        show: Object,
        showComments: Object,
    },
    data(){
        return {}
    },
    computed: {
        
    },
}

</script>

<template>
    <div class="show__comments">

        <h3 class="show__comments-title">Comments</h3>

        <div class="show__comments-list">

            <template v-for="comment in showComments" v-bind:key="comment.showId">
                <div class="show__comments-item" v-if="comment.showId === show.id">
                    <p>{{comment.showId}}</p>
                    <p>{{comment.username}}</p>
                    <p>{{comment.content}}</p>
                </div>
            </template>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .show__comments {
        position: relative;
        width: 900px;
        max-width: 90%;
        margin: 0 auto 60px auto;
        padding: 32px;
        background-color: #1a1a1a;
        border-radius: 6px;
    }

    .show__comments-title {
        font-size: 20px;
        line-height: 26px;
    }

</style>