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
        :leaf-class="'default-tabs__active-leaf'"
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

// categories name
const TABS = [
  {
    title: "Buchete",
    value: "buchete"
  },
  {
    title: "Decoratiuni",
    value: "decoratiuni"
  },
  {
    title: "Aranjamente florale",
    value: "aranjamente"
  },
  {
    title: "Articole party",
    value: "party"
  },
  {
    title: "Flori la ghiveci",
    value: "flori"
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
      currentTab: this.getCurrentCategory,
      tabIcon() {
        return leafUrl;
      }
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
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-family: $family-work-sans;
  margin-bottom: 50px;
  position: relative;
  &__item {
    z-index: 10;
    font-weight: 800;
    font-size: $size-4;
    color: $color-primary-dark;
    cursor: pointer;
    background: none;
    border: none;
    &_active {
      color: red;
      align-items: center;
      justify-content: center;
      display: flex;
      position: relative;
    }
    &_active::before {
      content: url("../../assets/images/tableaf.svg");
      position: absolute;
      z-index: -1;
      display: flex;
    }
    &:hover {
      color: blue;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
