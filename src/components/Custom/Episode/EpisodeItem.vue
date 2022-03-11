<template>
    <div class="card">
        <div class="rickrolled">
            <iframe width="560" height="100" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="show">
            <div class="cover" v-if="episode !== undefined && episode.image !== undefined && episode.image.original !== undefined">
                <img :src="episode.image.original" :alt="episode.name + '-picture'"> <!--  https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg -->
            </div>
            <div class="description">
                <h1 class="title">{{episode.name}}</h1><br>
                <p>S{{ episode.season }} • E{{ episode.number }}</p><br>
                <div v-html="episode.summary"></div><br>
                <p>{{ episode.runtime }} min</p>
                <p v-if="episode.rating" class="rate">{{episode.rating.average }} / 10</p>
            </div>
        </div>
        <div class="routerEp">
            <RouterLink @click="showStore.initEpisode(prevEp)" :to="'/episode/'+ prevEp" class="routerEp-btn">
                Previous episode
            </RouterLink>
            <RouterLink @click="showStore.initEpisode(nextEp)" :to="'/episode/'+ nextEp" class="routerEp-btn">
                Next episode
            </RouterLink>
        </div>
    </div>    
</template>

<script>
import { useShowStore } from '@/stores/show.store'

export default {
  name: 'EpisodeItem',
  props: {
    episode: Object
  },
  setup() {
    const showStore = useShowStore();
    return { showStore }
  },
  computed: {
        prevEp() {
            return this.episode.id-1
        },
        nextEp() {
            return this.episode.id+1
        } 
  },
//   data(){
//     return {
//         prevEp: this.episode.id-1,
//         nextEp: this.episode.id+1
//     }
//   },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
.card {
    width: 70%;
    margin: auto;
    .rickrolled { 
        overflow:hidden; 
        padding-bottom:56.25%; 
        position:relative; 
        height:0;
        iframe {
            left:0; 
            top:0; 
            height:100%;
            width:100%;
            position:absolute;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }
    }
    .show {
        display: flex;
        .cover {
            width: 25%;
            img {
                width: 100%;
                height: 100%;
                border-bottom-left-radius: 6px;
                object-fit: cover;
            }
        }
        .description {
            width: 75%;
            position: relative;
            border-bottom-right-radius: 6px;
            padding: 20px 20px 10px;
            background-color: #1f1f1f;
            .title {
                font-size: var(--fs-3);
            }
            .rate {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 7px;
                background-color: gray;
                border-radius: 6px;
                font-weight: bold;
            }
            p {
                color: var(--c-neutral);
            }
            h1 {
                color: var(--c-neutral);
            }
            div p {
                color: var(--c-neutral);
            }
        }
    }
    .routerEp {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        &-btn {
            height: auto;
            background-color: var(--c-neutral);
            color: var(--c-tertiary);
            border: 1px solid var(--c-neutral);
            font-size: var(--fs-5);
            padding: 15px;
            margin: 0 20px;
            border-radius: 6px;
            transition: 300ms;
            &:hover {
                background-color: var(--c-tertiary);
                color: var(--c-neutral);
                border: 1px solid var(--c-neutral);
                transition: 300ms;
            }
        }
    }
  }  
</style>
