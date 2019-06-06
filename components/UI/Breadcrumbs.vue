<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li>
        <nuxt-link to="/product">Shop</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/product">Buchete</nuxt-link>
      </li>
      <li>
        <p>&nbsp; {{title}}</p>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.breadcrumb {
  font-family: $family-work-sans;
  font-size: $size-6;
  position: relative;
  z-index: 20;
}
</style>
