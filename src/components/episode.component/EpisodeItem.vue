<template>
    <div class="card">
        <div class="rickrolled">
        <iframe width="560" height="100" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="show">
        <div class="cover" v-if="episode !== undefined && episode.image !== undefined && episode.image.original !== undefined">
            <img :src="episode.image.original"> <!--  https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg -->
        </div>
        <div class="description">
            <h1 class="title">{{episode.name}}</h1><br>
            <p>Season {{ episode.season }} : Episode {{ episode.number }}</p>
            <p>{{ description }}</p>
            <p>Rating : {{episode.rating.average }}/10</p>
        </div>
        </div>
    </div>
</template>

<script>
import Section from '@/components/layer.components/Section.layer.vue';

export default {
  name: 'EpisodeItem',
  components: {
    Section
  },
  props: {
    episode: Object
  },
  data(){
    return {
        // imgSrc = this.episode.image.original
    }
  },
  computed: {
    description(){
        const strToSplit = this.episode.summary;
        const firstSplit = strToSplit.split("<p>", 2);
        const str = firstSplit[1].split("</p>", 2);
        return str[0]
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 2.4em;
  }
  .show {
    display: flex;
  }
  .cover {
    width: 20%;
  }
  .cover img {
    width: 100%;
  }
  .description {
    width: 80%;
  }
  .rickrolled { 
    overflow:hidden; 
    padding-bottom:56.25%; 
    position:relative; 
    height:0;
  }
  .rickrolled iframe {
    left:0; 
    top:0; 
    height:100%;
    width:100%;
    position:absolute;
  }
  .card {
    width: 70%;
    margin: auto;
  }
</style>
