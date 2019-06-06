<template>
  <div class="product-preview">
    <div class="product-preview-image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
    <div class="product-preview-text">
      <h2>{{title}}</h2>
      <p>{{price}} Lei</p>
    </div>
    <nuxt-link :to="'product/' + slug">
      <div class="product-preview-button">Detalii produs</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    productLink() {
      return this.slug;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.product-preview {
  font-weight: 600;
  font-family: $family-work-sans;

  .product-preview-image {
    height: 300px;
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
  }

  &:nth-child(2n + 1) {
    .product-preview-image {
      height: 330px;
    }
  }

  &:nth-child(3n + 1) {
    .product-preview-image {
      height: 320px;
    }
  }

  &:nth-child(4n + 1) {
    .product-preview-image {
      height: 310px;
    }
  }
}

.product-preview-text {
  display: flex;
  justify-content: space-between;
  font-size: $size-4;
  margin-bottom: 20px;

  p {
    color: $color-accent;
  }
}

.product-preview-button {
  text-align: center;
  background: #ffe4e1;
  padding: 20px 0px;
  border-radius: 4px;
  color: $color-black;

  a {
    color: $color-black;
  }
}
</style>
