export default function({ store }) {
  if (!store.state.selectedCategory) {
    store.dispatch("loadNewCategory");
  }
}
