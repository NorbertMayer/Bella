<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <button @click="changeCategory">{{selectedCategory}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      filterKey: "Category",
      categoryList: ["buchete", "decoratiuni"]
    };
  },
  computed: {
    ...mapState({
      selectedCategory: state => state.selectedCategory
    })
  },
  methods: {
    changeCategory: function() {
      this.$store.commit("setCategory", "buchete");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";
</style>