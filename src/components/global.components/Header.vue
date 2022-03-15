<template>
  <header class="header">
    <div class="header-navigation left">
      <RouterLink to="/">
        <span style="line-height: 0; font-size: 0; color: transparent; ">Home</span>
        <Logo/>
      </RouterLink>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/shows">Shows</RouterLink></li>
          <li><RouterLink to="/my-list">My list</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div class="header-navigation right">
      <SearchBar @user:search="newSearch"></SearchBar>
    </div>
  </header>
</template>

<script>
import { SearchBar } from '@/components/form.components'
import { Logo } from '@/components/image.components'
import { useShowStore } from '@/stores/show.store'

export default {
  components: {
    SearchBar, Logo
  },
  setup() {
    const showStore = useShowStore();
    return { showStore }
  },
  methods: {
    newSearch(e){
      this.showStore.requestSearchShows(e);
      this.$router.push({name: 'shows'})
    }
  }
}
</script>

<style lang="scss">
.header {
  @include customColor();
  @include customFlex($mode: 'extend');
  gap: var(--m-1);
  z-index: 100;
  height: var(--header-size);
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;

  .header-navigation {
    @include customFlex();
    align-items: center;
    gap: var(--m-5);

    nav{
      flex-grow: 2; 
      ul{
        @include customFlex();
        align-items: center;
        gap: var(--m-5);

        a{
          font-weight: bold;
        }
      }
    }

    &.left {
      justify-content: flex-start;
      padding-left: var(--m-3);
    }

    &.right {
      justify-content: flex-end;
      padding-right: var(--m-3);
    }
  }
}

.header-navigation__logo {
  max-height: 50px;
  max-width: 140px;
  object-fit: contain;
}

</style>