<script>
import { RouterView } from 'vue-router'
import { useShowStore } from '@/stores/show.store'
import { useUserStore } from '@/stores/user.store'
import Header from '@/components/global.components/Header.vue'
import Footer from '@/components/global.components/Footer.vue'

export default {
    name: 'App',
    components: {
      RouterView, Header, Footer
    },
    props: {},
    data(){
      return{
        onDesktop: null,
      }
    },
    setup() {
      const showStore = useShowStore();
      const userStore = useUserStore();
      showStore.initShows();
      return { showStore, userStore }
    },
    created() {
      this.checkDevice()
      window.addEventListener("resize", this.checkDevice);
    },
    methods: {
      checkDevice(e) {
        this.onDesktop = screen.width >= 760;
      }
    }
}
</script>

<template>
  <template v-if="onDesktop">
    <Header></Header>
    <main>
      <RouterView />
    </main>
    <Footer></Footer>
  </template>
  <template v-else>
    <div class="mobile">
      <h1>This app is not available on mobile device or small screen</h1>
    </div>
  </template>
</template>

<style lang="scss">
@import '@/assets/reset.scss';
@import '@/assets/base.scss';

.mobile {
  margin-top: 48vh;
  padding: 12px;
  text-align: center;
}
</style>
