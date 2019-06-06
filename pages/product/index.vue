<template>
  <div>
    <Header/>
    <ShopDescription/>
    <!-- tabs -->
    <ShopTabs @changeCategory="updateCategory"/>
    <!-- catalogue -->
    <ProductList :products="products"/>
    <Services/>
    <Review/>
  </div>
</template>

<script>
import Services from "@/components/UI/Services";
import Review from "@/components/UI/Review";
import Header from "@/components/Header";
import ShopDescription from "@/components/Shop/ShopDescription";
import ProductList from "@/components/Shop/ProductList";
import ShopTabs from "@/components/UI/ShopTabs";

// load products by category method
const loadCategory = ({
  api,
  cacheVersion,
  version,
  category,
  errorCallback
}) => {
  return api
    .get(`cdn/stories/`, {
      version: version,
      starts_with: "product/",
      filter_query: {
        Category: {
          in: `${category}`
        }
      },
      cv: cacheVersion
    })
    .then(res => {
      return {
        products: res.data.stories.map(product => {
          return {
            thumbnail: product.content.thumbnail,
            title: product.content.title,
            price: product.content.price,
            slug: product.slug,
            description: product.content.description,
            gallery: product.content.gallery
          };
        })
      };
    });
};

export default {
  layout: "default",
  middleware: "categories",
  components: {
    Header,
    ProductList,
    ShopDescription,
    Services,
    Review,
    ShopTabs
  },
  data() {
    return {
      products: this.products,
      category: "buchete"
    };
  },
  asyncData(context) {
    // call the method in asyncData
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

    let version = context.isDev ? "draft" : "published";

    return loadCategory({
      api: context.app.$storyapi,
      cacheVersion: context.store.state.cacheVersion,
      version: version,
      category: "buchete",
      errorCallback: context.error
    }).catch(res => {
      if (!res.response) {
        console.error(res);
        errorCallback({
          statusCode: 404,
          message: "Failed to receive products from the api."
        });
      } else {
        errorCallback({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
  },
  methods: {
    updateCategory: function(getSelectedCategory) {
      this.category = getSelectedCategory;
    }
  }
};
</script>

<style lang="scss">
@import "~assets/css/main.scss";
</style>
