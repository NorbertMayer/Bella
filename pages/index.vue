<template>
  <div class="landing">
    <!-- <MainMenu/> -->
    <video autoplay playsinline loop :muted="muted" ref="video">
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
  props: {
    muted: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      videoRatio: null
    };
  },
  mounted() {
    this.setImageUrl();
    this.setContainerHeight();
    if (this.videoCanPlay()) {
      this.$refs.video.oncanplay = () => {
        if (!this.$refs.video) return;
        this.videoRatio =
          this.$refs.video.videoWidth / this.$refs.video.videoHeight;
        this.setVideoSize();
        this.$refs.video.style.visibility = "visible";
      };
    }
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      this.setContainerHeight();
      if (this.videoCanPlay()) {
        this.setVideoSize();
      }
    },
    videoCanPlay() {
      return !!this.$refs.video.canPlayType;
    },
    setImageUrl() {
      if (this.img) {
        this.$el.style.backgroundImage = `url(${this.img})`;
      }
    },
    setContainerHeight() {
      this.$el.style.height = `${window.innerHeight}px`;
    },
    setVideoSize() {
      var width,
        height,
        containerRatio = this.$el.offsetWidth / this.$el.offsetHeight;
      if (containerRatio > this.videoRatio) {
        width = this.$el.offsetWidth;
      } else {
        height = this.$el.offsetHeight;
      }
      this.$refs.video.style.width = width ? `${width}px` : "auto";
      this.$refs.video.style.height = height ? `${height}px` : "auto";

      console.log(this.$el);
    },
    getMediaType(src) {
      return "video/" + src.split(".").pop();
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

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
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


