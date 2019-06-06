<template>
  <section class="container section">
    <Breadcrumbs :title="title"/>
    <div class="columns" v-editable="blok">
      <div class="column is-6">
        <div class="single-product-element">
          <img src="~assets/images/single.svg" alt="#">
        </div>
        <div class="single-product-image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
      </div>
      <div class="column is-4 is-offset-1">
        <div class="single-product">
          <h2>{{ title }}</h2>
          <div class="description" v-html="$options.filters.markdown(description)"></div>
          <div class="description-button">
            <button
              class="snipcart-add-item"
              v-bind:data-item-id="uuid"
              v-bind:data-item-name="name"
              v-bind:data-item-price="price"
              v-bind:data-item-url="$nuxt.$route.path"
              v-bind:data-item-description="title"
            >Adauga in cos</button>
            <p>{{ price }} lei</p>
          </div>
        </div>
      </div>
    </div>

    <div class="colums">
      <div class="column is-4 is-offset-4 event-description">
        <img src="~/assets/images/Group91.svg" alt="#">
        <h2>Galerie</h2>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-6 single-product-gallery" v-for="image in gallery" :key="image.index">
        <div class="img-gallery" :style="{ backgroundImage: `url(${image.filename})` }"></div>
      </div>
    </div>

    <Review/>
  </section>
</template>

<script>
import Review from "@/components/UI/Review";
import Breadcrumbs from "@/components/UI/Breadcrumbs";

const loadProduct = function({
  api,
  cacheVersion,
  errorCallback,
  version,
  path
}) {
  return api
    .get("cdn/stories" + path, {
      version: version,
      cv: cacheVersion
    })
    .then(res => {
      return {
        blok: res.data.story.content,
        uuid: res.data.story.content._uid,
        name: res.data.story.name,
        thumbnail: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        price: res.data.story.content.price,
        description: res.data.story.content.Description,
        gallery: res.data.story.content.Gallery
      };
    })
    .catch(res => {
      if (!res.response) {
        console.error(res);
        errorCallback({
          statusCode: 404,
          message: "Failed to receive product from the api."
        });
      } else {
        console.error(res.response.data);
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
};

export default {
  components: {
    Breadcrumbs,
    Review
  },
  mounted() {
    this.$storybridge.on(["input", "published", "change"], event => {
      if (event.action == "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        window.location.reload();
      }
    });
  },
  asyncData(context) {
    let editMode = false;
    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== "undefined" &&
        window.localStorage.getItem("_storyblok_draft_mode"))
    ) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("_storyblok_draft_mode", "1");
        if (window.location == window.parent.location) {
          window.localStorage.removeItem("_storyblok_draft_mode");
        }
      }
      editMode = true;
    }

    let version = context.isDev ? "published" : "draft";
    let path = context.route.path;

    return loadProduct({
      version: version,
      api: context.app.$storyapi,
      cacheVersion: context.store.state.cacheVersion,
      errorCallback: context.error,
      path: path
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.single-product-element {
  position: absolute;
  top: 0px;
  left: -80px;
  z-index: 0;
}

.single-product-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 550px;
  z-index: 10;
  position: relative;
}

.single-product {
  font-family: $family-work-sans;
  padding-top: 20px;

  h2 {
    font-size: $size-3;
    margin-bottom: 30px;
  }

  .description-button {
    width: 300px;
    display: flex;
    flex: row wrap;
    justify-content: space-between;
    align-items: flex-end;

    button {
      font-size: $size-6;
      background: $color-black;
      border: none;
      color: $color-white;
      padding: 25px 24px;
      cursor: pointer;
    }

    p {
      font-size: $size-3;
      color: $color-accent;
    }
  }
}

.description {
  font-size: $size-6;
  margin-bottom: 30px;

  p {
    margin-bottom: 20px;
  }

  ul {
    margin-left: 20px;
  }
}

.img-gallery {
  background-size: cover;
  background-position: center;
  height: 550px;
}

.event-description {
  padding: 91px 0px;
  text-align: center;

  h2 {
    font-size: $size-4;
    font-family: $family-work-sans;
    text-transform: uppercase;
    letter-spacing: 28px;
  }
}
</style>
