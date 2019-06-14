<template>
  <div class="container">
    <div class="menu">
      <div class="menu__burger"></div>
      <nuxt-link to="/" class="menu__logo">
        <img src="~/assets/images/logo.png" alt="#">
      </nuxt-link>
      <div class="menu__basket">
        <img src="~/assets/images/shopping.svg" alt="#">
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
  top: 10px;
  align-items: flex-end;
  position: absolute;

  &__logo {
    width: 100px;
  }
}
</style>
