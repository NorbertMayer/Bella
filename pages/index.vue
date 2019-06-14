<template>
  <div class="landing">
    <!-- <MainMenu/> -->
    <video autoplay loop ref="video" class="landing__video">
      <source src="~/assets/video/video-landing.mp4">
    </video>

    <div class="landing__overlay">
      <div class="landing__overlay_content">
        <div class="content-left">
          <h1>SHOP</h1>
          <p>Buchete &amp; aranjamente exclusive</p>

          <nuxt-link to="product">Shop</nuxt-link>
        </div>
        <div class="content-line"></div>
        <div class="content-left">
          <h1>Evenimente</h1>
          <p>Exploreaza cele mai recente evenimente</p>
          <nuxt-link to="events">Evenimente</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
"use strict";
import MainMenu from "@/components/UI/MainMenu";

// https://stackoverflow.com/questions/41544463/how-to-set-a-div-style-in-reaction-to-a-vue-js-data-member-change

export default {
  layout: "landing",
  components: {
    MainMenu
  },
  data() {
    return {};
  },
  mounted() {
    this.setContainerHeight();
    this.setContainerWidth();
    this.setVideoSize();
    window.addEventListener("resize", e => {
      this.resize();
    });

    console.log(this.$refs);
  },
  beforeDestroy() {
    window.addEventListener("resize", e => {
      this.resize();
    });
  },
  methods: {
    resize() {
      this.setContainerHeight();
      this.setContainerWidth();
      this.setVideoSize();
    },
    setContainerWidth() {
      this.$el.style.width = window.innerWidth;

      console.log(this.$el);
    },
    setContainerHeight() {
      this.$el.style.height = window.innerHeight;
    },
    setVideoSize() {
      let width = this.$el.offsetWidth;
      let height = this.$el.offsetHeight;

      this.$refs.video.videoWidth = window.innerWidth;
      this.$refs.video.videoHeight = window.innerHeight;
    }
  }
};
</script>

<style lang="scss">
@import "~assets/css/main.scss";

.landing {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  overflow-y: hidden !important;
  height: 100vh;
  width: 100%;

  &__video {
    position: absolute;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $color-white;
    opacity: 0.7;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &_content {
      display: flex;
      width: 100%;
      max-width: 1152px;
      position: relative;
      z-index: 100;
      font-family: $family-work-sans;

      .content-left,
      .content-right {
        text-align: center;
        flex: 0 0 calc(50% - 1px);
      }
      .content-line {
        text-align: center;
        border-left: 1px solid $color-primary-dark;
        flex: 0 0 1px;
      }

      h1 {
        font-size: $size-3;
        text-transform: uppercase;
        letter-spacing: 22px;
      }

      p {
        margin-bottom: 150px;
      }

      a {
        border: 1px solid $color-primary-dark;
        padding: 20px 25px;
        color: $color-primary-dark;
      }
    }
  }
}
</style>


