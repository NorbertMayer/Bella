<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <button @click="changeCategory">test</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterKey: "Category",
      categoryList: ["buchete", "decoratiuni"],
      category: "buchete"
    };
  },
  methods: {
    changeCategory: function() {
      this.$emit("changeCategory", "decoratiuni");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";
</style>