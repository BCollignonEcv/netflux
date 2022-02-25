<script>


export default {
    name: 'ShowEpisodes',
    props: {
        episodes: Array,
    },
    data(){
        return {
            episodeMaxShow: 4,
            btnShowAllActive: true,
        }
    },
    computed: {
        
    },
    methods: {
        showAllEpisodes: function (event) {
            this.btnShowAllActive = false;
            this.episodeMaxShow = 0;
        }
    },
}

</script>

<template>
    <div class="show__infos-episodes">
        <h3 class="show__infos-episodes-title">Episodes</h3>
        <div class="show__infos-episodes-list" v-if="episodes !== undefined">
            <div class="show__infos-episode" v-for="(episode, index) in episodes" :key="episode.id" :class="(episodeMaxShow > 0 && index < episodeMaxShow)?'active':(episodeMaxShow === 0)?'active':''">

                <RouterLink :to="{ name: 'episode', params: { id: episode.id }}" class="show__infos-episode-link">
                    <div v-if="episode !== undefined && episode.image !== undefined && episode.image.original !== undefined" class="show__infos-episode-wrap-img">
                        <img class="show__infos-episode-img" :src="episode.image.original" alt="Episode image">
                    </div>

                    <div class="show__infos-episode-main">
                        <p class="show__infos-episode-number" v-if="episode.season !== undefined && episode.number !== undefined">S<span>{{episode.season}}</span> • E<span>{{episode.number}}</span></p>
                        <div v-if="episode.summary !== undefined" class="show__infos-episode-summary" v-html="episode.summary"></div>
                    </div>
                </RouterLink>

            </div>
            <div class="show__infos-episodes-list-overlay"></div>
        </div>
        <button @click="showAllEpisodes" class="show__infos-episodes-btn" v-show="btnShowAllActive">Show all</button>
    </div>
</template>

<style lang="scss" scoped>
    .show__infos-episodes {
        margin-top: 32px;
    }

    .show__infos-episodes-title {
        font-size: 20px;
        line-height: 26px;
    }

    .show__infos-episodes-list {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
    }

    .show__infos-episodes-list-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 140px;
        background: linear-gradient(180deg, rgba(26,26,26,0) 0%, rgba(26,26,26,1) 100%);
    }

    .show__infos-episode {
        display: none;
        background-color: #1f1f1f;
        border-radius: 6px;
        overflow: hidden;
        &.active {
            display: block;
        }
    }

    .show__infos-episode-link {
        display: grid;
        grid-template-columns: 1fr 2fr;
        height: 140px;
    }

    .show__infos-episode-img {
        height: 100%;
        max-height: 140px;
        width: 100%;
        object-fit: cover;
    }

    .show__infos-episode-main {
        display: flex;
        flex-direction: column;
        padding: 16px 32px;
    }

    .show__infos-episode-number {
        text-transform: uppercase;
    }

    .show__infos-episode-summary {
        margin-top: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
                line-clamp: 3; 
        -webkit-box-orient: vertical;
    }

    .show__infos-episodes-btn {
        display: block;
        margin: 32px auto 16px auto;
        padding: 16px 32px;
        border-radius: 6px;
        background-color: var(--c-neutral);
        font-weight: 600;
        color: var(--c-tertiary);
        cursor: pointer;
    }

</style>