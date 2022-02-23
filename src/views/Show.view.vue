<template>
  <div class="show__container">
    <Section>
      <ShowBanner :show="showStore.getShow" />
    </Section>
    <!-- <Section :height="'landing'">
      
    </Section> -->
  </div>
</template>

<script>

//=== TODO
// - request all images of this show > 'https://api.tvmaze.com/shows/32796/images'
// - if image type background (width:1920/height:1080) > show component 'ShowBanner'
// - else if image original > show component 'ShowCenteredImage' 

import { useRoute } from 'vue-router';
import { useShowStore } from '@/stores/show.store';
import Section from '@/components/layer.components/Section.layer.vue';
import ShowBanner from '@/components/show.components/ShowBanner.vue';

export default {
  name: 'Show',
  components: {
    Section,
    ShowBanner
  },
  setup() {
    const route = useRoute();
    const showStore = useShowStore();

    const id = route.params.id;

    showStore.initShow(id);

    return { showStore };
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
  .show__container {
    min-height: 80vh;
  }
</style>
