<template>
  <section class="container product-list">
    <div class="masonry">
      <ProductPreview
        class="masonry-brick"
        v-for="product in products"
        :key="product.slug"
        :thumbnail="product.thumbnail"
        :title="product.title"
        :price="product.price"
        :slug="product.slug"
        :id="product.slug"
      />
      <!-- <div v-for="product in products" :key="product.slug" class="masonry-brick">
        <div class="mansory-content">
          <img :src="imageUrl" alt="#">
          <div class="masonry-title">
            <h2>{{product.title}}</h2>
            <p>{{product.price}} Lei</p>
          </div>
          <nuxt-link :to="'product/' + slug">
            <div class="masonry-button">Detalii produs</div>
          </nuxt-link>
        </div>
      </div>-->
    </div>
  </section>
</template>

<script>
import ProductPreview from "@/components/Shop/ProductPreview";

export default {
  components: {
    ProductPreview
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    imageUrl() {
      return this.products.imageUrl;
    }
  },
  methods: {
    resizeMasonryItem(item) {
      let grid = document.getElementsByClassName("masonry")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );

      let rowSpan = Math.ceil(
        (item.querySelector(".masonry-content").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    },
    waitForImages() {
      let allItems = document.getElementsByClassName("masonry-brick");
      for (var i = 0; i < allItems.length; i++) {
        imagesLoaded(allItems[i], function(instance) {
          var item = instance.elements[0];
          resizeMasonryItem(item);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  margin-bottom: 100px;
}

.masonry {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-auto-rows: 0;
}
</style>
