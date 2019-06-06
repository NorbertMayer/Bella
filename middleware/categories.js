import Axios from "axios";

export default function({ params, store }) {
  return Axios.get(
    `https://api.storyblok.com/v1/cdn/stories?filter_query[Category][in]=buchete&starts_with=product/&token=QUIQ5hXwSU4OFrkUpU3tswtt`
  ).then(res => {
    store.commit("addProducts", res.data.stories);
  });
}
