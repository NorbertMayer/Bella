<template>
  <section class="container product-list">
    <div class="columns is-multiline">
      <ProductPreview
        class="column is-4"
        v-for="product in products"
        :key="product.slug"
        :thumbnail="product.thumbnail"
        :title="product.title"
        :price="product.price"
        :slug="product.slug"
        :id="product.slug"
      />
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
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  margin-bottom: 100px;
}
</style>
