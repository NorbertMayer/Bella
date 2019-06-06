import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: "",
      products: {}
    },
    mutations: {
      setCacheVersion(state, version) {
        state.cacheVersion = version;
      },
      addProducts(state, payload) {
        state.products = payload;
      }
    },
    actions: {
      loadCacheVersion({ commit }) {
        return this.$storyapi.get(`cdn/spaces/me`).then(res => {
          commit("setCacheVersion", res.data.space.version);
        });
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
