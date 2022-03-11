<template>
  <footer class="footer">
      <nav>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/shows">Shows</RouterLink></li>
            <li><RouterLink to="/my-list">My list</RouterLink></li>
          </ul>
      </nav>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.footer{
    @include customColor();
    @include sectionPadding;
    width: 100%;
    box-sizing: border-box;
}
</style>