import Vue from "vue";
import marked from "marked";

Vue.filter("markdown", markdown => {
  if (typeof markdown !== "undefined") {
    return marked(markdown);
  }
  return null;
});

Vue.filter("resize", (image, size) => {
  if (typeof image !== "undefined") {
    return (
      "//img2.storyblok.com/" + size + image.replace("//a.storyblok.com", "")
    );
  }
  return null;
});
