<script>
import { useShowStore } from '@/stores/show.store';

export default {
    name: 'ShowComments',
    components: {},
    setup() {
        const showStore = useShowStore();
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
                    <p class="show__comments-username">{{comment.username}}</p>
                    <p class="show__comments-content">{{comment.content}}</p>
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

    .show__comments-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
    }

    .show__comments-item {
        padding: 16px;
        border-top: 1px solid var(--c-neutral);
    }
    .show__comments-item:first-child {
        border: none;
    }

    .show__comments-username {
        font-size: 16px;
        font-weight: 600;
    }

    .show__comments-content {
        margin-top: 8px;
    }

</style>