<template>
  <div class="container product-list">
    <div class="viewer">
      <div class="grid-sizer"></div>
      <div class="item" v-for="product in products" :key="product.id">
        <img
          class="img"
          v-if="product.thumbnail.length > 0"
          :src="product.thumbnail | resize('550x0')"
          :alt="product.title"
        >
        <div class="item-content">
          <h2>{{product.title}}</h2>
          <p>{{product.price}} Lei</p>
        </div>
        <nuxt-link :to="'product/' + product.slug">
          <div class="item-button">Detalii produs</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
if (process.browser) {
  var Masonry = require("masonry-layout");
  var ImagesLoaded = require("imagesloaded");
}

export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selector: ".viewer",
      options: {
        columnWidth: ".grid-sizer",
        percentPosition: true,
        gutter: 0,
        itemSelector: ".item"
      }
    };
  },
  methods: {
    loaded() {
      // all images are loaded
      ImagesLoaded(this.selector, () => {
        this.$emit("masonry-images-loaded");
        // activate mansonry grid
        let masonry = new Masonry(this.selector, this.options);
        this.$emit("masonry-loaded", masonry);
      });
    }
  },
  watch: {
    data() {
      this.loaded();
    }
  },
  mounted() {
    this.loaded();
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.product-list {
  margin-bottom: 100px;
}

.item-content {
  display: flex;
  justify-content: space-between;
  font-size: $size-4;
  margin-bottom: 10px;

  p {
    color: $color-accent;
  }
}

.item-button {
  text-align: center;
  background: #ffe4e1;
  padding: 10px 0px;
  border-radius: 4px;
  color: $color-black;

  a {
    color: $color-black;
  }
}

@media only screen and (min-width: 468px) {
  .grid-sizer {
    width: 100%;
  }
  .item {
    width: 100%;
    padding: 0px 10px 20px 10px;
  }
}

@media only screen and (min-width: 769px) {
  .grid-sizer {
    width: 50%;
  }
  .item {
    width: 50%;
    padding-bottom: 20px;
    padding-left: 10px;
  }
}

@media only screen and (min-width: 1200px) {
  .grid-sizer {
    width: 33%;
  }
  .item {
    width: 33%;
    padding-bottom: 20px;
    padding-left: 10px;
  }
}
</style>
