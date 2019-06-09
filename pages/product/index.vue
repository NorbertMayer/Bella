<template>
  <div>
    <Header/>
    <ShopDescription/>
    <!-- tabs -->
    <div class="column is-12">
      <ShopTabs
        :tabs="tabs"
        :currentTab="getCurrentCategory"
        :wrapper-class="'default-tabs'"
        :tab-class="'default-tabs__item'"
        :tab-active-class="'default-tabs__item_active'"
        :line-class="'default-tabs__active-line'"
        @onClick="handleClick"
      />
    </div>
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
import { mapState, mapMutations, mapGetters } from "vuex";

// tabs
const TABS = [
  {
    title: "Buchete",
    value: "buchete"
  },
  {
    title: "Decoratiuni",
    value: "decoratiuni"
  }
];

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
      tabs: TABS,
      currentTab: this.getCurrentCategory
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
    let cacheVersion = context.store.state.cacheVersion;
    let cat = context.store.state.selectedCategory;

    return loadCategory({
      api: context.app.$storyapi,
      cacheVersion: cacheVersion,
      version: version,
      category: cat,
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
  computed: {
    // products() {
    //   return this.$store.getters.GET_PRODUCTS.map(product => {
    //     return {
    //       thumbnail: product.content.thumbnail,
    //       title: product.content.title,
    //       price: product.content.price,
    //       slug: product.slug,
    //       description: product.content.description,
    //       gallery: product.content.gallery
    //     };
    //   });
    // }
    getCurrentCategory() {
      console.log(this.$store.state.selectedCategory);
      return this.$store.state.selectedCategory;
    }
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
      this.$store.commit("SET_CATEGORY", newTab);
    }
  }
};
</script>

<style lang="scss">
@import "~assets/css/main.scss";

.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: black;
    }
    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
.content {
  margin-top: 30px;
  font-size: 20px;
}
</style>
