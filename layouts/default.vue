<template>
  <div>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer";

export default {
  components: {
    Footer
  }
};
</script>


<style>
html {
  font-family: "Work Sans", sans-serif;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #f6f6f6;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
</style>
