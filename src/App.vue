<script>
import { RouterView } from 'vue-router'
import Header from '@/components/global.components/Header.vue'
import Footer from '@/components/global.components/Footer.vue'

export default {
    name: 'App',
    components: {
      RouterView, Header, Footer
    },
    props: {}
}
</script>

<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<style>
@import '@/assets/reset.scss';
@import '@/assets/base.scss';
</style>
