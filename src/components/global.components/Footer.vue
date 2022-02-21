<template>
  <footer class="footer">
      <nav>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/series">Series</RouterLink></li>
            <li><RouterLink to="/films">Films</RouterLink></li>
            <li><RouterLink to="/my-list">My list</RouterLink></li>
            <li><RouterLink to="/my-list">My Account</RouterLink></li>
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
}
</style>