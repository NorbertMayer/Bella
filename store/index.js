import Vuex from "vuex";
import Axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: "",
      products: {},
      selectedCategory: "buchete"
    },
    actions: {
      loadCacheVersion({ commit }) {
        return this.$storyapi.get(`cdn/spaces/me`).then(res => {
          commit("setCacheVersion", res.data.space.version);
        });
      }
      // async nuxtServerInit(context) {
      //   return Axios.get(
      //     `https://api.storyblok.com/v1/cdn/stories?filter_query[Category][in]=${
      //       context.state.selectedCategory
      //     }&starts_with=product/&token=QUIQ5hXwSU4OFrkUpU3tswtt`
      //   )
      //     .then(response => {
      //       context.commit("SET_PRODUCTS", response.data.stories);
      //       return Promise.resolve();
      //     })
      //     .catch(err => {
      //       return Promise().reject();
      //     });
      // },
      // loadNewCategory(context) {
      //   context.commit("SET_CATEGORY", context.state.selectedCategory);
      // }
    },
    getters: {
      GET_PRODUCTS(state) {
        return state.products;
      },
      GET_CATEGORY(state) {
        return state.selectedCategory;
      }
    },
    mutations: {
      setCacheVersion(state, version) {
        state.cacheVersion = version;
      },
      SET_PRODUCTS(state, payload) {
        state.products = payload;
      },
      SET_CATEGORY(state, payload) {
        state.selectedCategory = payload;
      }
    }
  });
};

export default createStore;

// https://api.storyblok.com/v1/cdn/stories?starts_with=product&token=QUIQ5hXwSU4OFrkUpU3tswtt

// https://api.storyblok.com/v1/cdn/stories?starts_with=event&token=QUIQ5hXwSU4OFrkUpU3tswtt

// https://api.storyblok.com/v1/cdn/stories?filter_query[Category][in]=buchete&starts_with=product/&token=QUIQ5hXwSU4OFrkUpU3tswtt

// https://api.storyblok.com/v1/cdn/stories?filter_query[Category][in]=decoratiuni&starts_with=product/&token=QUIQ5hXwSU4OFrkUpU3tswtt

// https://api.storyblok.com/v1/cdn/stories?filter_query[category][in]=nunta&starts_with=event/&token=QUIQ5hXwSU4OFrkUpU3tswtt

// https://medium.com/@_shirish/thinking-in-components-with-vue-js-a35b5af12df?fbclid=IwAR28MA3N5ydzhdqognXjWWogRwH_jRBiGnzPBvHSJT5ym7fNJNttrwY3ACM

// https://codesandbox.io/s/kkvr7z5rr3

// https://codesandbox.io/s/m4njk9v4m8

// https://github.com/nuxt/nuxt.js/issues/1693

// https://github.com/karambafe/vue-tabs-with-active-line/blob/master/src/VueTabsWithActiveLine.vue
