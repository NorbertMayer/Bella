<template>
  <!-- <div class="mansory-content .col--2x">
    <img
      class="img"
      v-if="imageUrl.length > 0"
      :src="imageUrl | resize('450x300')"
      :alt="imageUrl.title"
    >

    <div class="masonry-title">
      <h2>{{title}}</h2>
      <p>{{price}} Lei</p>
    </div>
    <nuxt-link :to="'product/' + slug">
      <div class="masonry-button">Detalii produs</div>
    </nuxt-link>
  </div>-->

  <div></div>
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
    },
    imageUrl() {
      return this.thumbnail;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.masonry-content {
  font-weight: 600;
  font-family: $family-work-sans;
  overflow: hidden;
  margin-bottom: 20px;
}

.col--2x {
  grid-row-end: span 2;
}
.col--3x {
  grid-row-end: span 3;
}
.col--1x {
  grid-row-end: span 1;
}
</style>
