<template>
  <div class="container">
    <div class="main-menu">
      <div class="main-menu-burger"></div>
      <nuxt-link to="/" class="main-menu-logo">
        <img src="~/assets/images/logo.png" alt="#">
      </nuxt-link>
      <div class="main-menu-basket">
        <img src="~/assets/images/shopping.svg" alt="#">
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.main-menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
  top: 10px;
  align-items: flex-end;
  position: absolute;

  .main-menu-logo {
    width: 100px;
  }
}
</style>
