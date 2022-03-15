<script>
import ShowEpisodes from './ShowEpisodes.vue';

export default {
    name: 'ShowInfos',
    components: {
        ShowEpisodes
    },
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
    <div class="show__infos">

        <div class="show__infos-main">
            <div class="show__infos-main-left">
                <h2 v-if="show !== undefined && show.name !== undefined" class="show__infos-title">{{show.name}}</h2>
                <div v-if="show !== undefined && show.summary !== undefined" class="show__infos-summary" v-html="show.summary"></div>
            </div>
            <div class="show__infos-main-right">
                <p class="show__infos-elem">
                    <span class="show__infos-elem-title">Language: </span>
                    <span v-if="show !== undefined && show.language !== undefined">{{show.language}}</span>
                    <span v-else> / </span>
                </p>
                <p class="show__infos-elem">
                    <span class="show__infos-elem-title">Cast: </span>
                    <span v-if="show !== undefined && show._embedded !== undefined && show._embedded.cast !== undefined">
                        <span v-for="(item, index) in show._embedded.cast" :key="'cast-'+item.person.id">
                            <span v-if="index !== 0">,</span>
                            {{item.person.name}}
                        </span>
                    </span>
                    <span v-else> / </span>
                </p>
                <p class="show__infos-elem">
                    <span class="show__infos-elem-title">Genres: </span>
                    <span v-if="show !== undefined && show.genres !== undefined">
                        <span v-for="(genre, index) in show.genres" v-bind:key="genre">
                            <span v-if="index !== 0">,</span>
                            {{genre}}
                        </span>
                    </span>
                    <span v-else> / </span>
                </p>
                <p class="show__infos-elem">
                    <span class="show__infos-elem-title">Rating: </span>
                    <span v-if="show !== undefined && show.rating !== undefined && show.rating.average !== undefined">{{show.rating.average}}/10</span>
                    <span v-else> / </span>
                </p>
            </div>
        </div>

        <ShowEpisodes v-if="show !== undefined && show._embedded !== undefined && show._embedded.episodes != undefined" :episodes="show._embedded.episodes" />
        
    </div>
</template>

<style lang="scss" scoped>
    .show__infos {
        position: relative;
        width: 900px;
        max-width: 90%;
        margin: -120px auto 60px auto;
        padding: 32px;
        background-color: #1a1a1a;
        border-radius: 6px;
        color: var(--c-primary);
    }

    .show__infos-main {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 32px;
    }
    @media screen and (max-width: 900px) {
        .show__infos-main {
            grid-template-columns: 1fr;
        }
    }

    .show__infos-title {
        font-size: 20px;
        line-height: 26px;
    }

    .show__infos-summary {
        margin-top: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
                line-clamp: 4; 
        -webkit-box-orient: vertical;
    }

    .show__infos-elem:not(:first-child) {
        margin-top: 8px;
    }
    .show__infos-elem p,
    .show__infos-elem span,
    .show__infos-elem div {
        font-size: 14px;
    }

    .show__infos-elem-title {
        opacity: 0.6;
    }

</style>