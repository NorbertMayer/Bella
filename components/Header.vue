<template>
  <div class="header-section">
    <MainMenu/>
    <div class="ev-header" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="ev-header-overlay"></div>
      <div class="ev-content">
        <div class="ev-header-leaf-one">
          <img src="~/assets/images/Group91.svg" alt="#">
        </div>
        <div class="ev-header-leaf-two">
          <img src="~/assets/images/Group68.svg" alt="#">
        </div>
        <div class="ev-header-leaf-three">
          <img src="~/assets/images/Path261.svg" alt="#">
        </div>
        <div class="ev-header-leaf-four">
          <img src="~/assets/images/Path242.svg" alt="#">
        </div>
        <div class="ev-header-leaf-five">
          <img src="~/assets/images/Path241.svg" alt="#">
        </div>
        <div class="ev-header-leaf-six">
          <img src="~/assets/images/Group66.svg" alt="#">
        </div>

        <h1>Evenimente</h1>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from "~/assets/images/Screenshot_6.png";
import MainMenu from "@/components/UI/MainMenu";

export default {
  components: {
    MainMenu
  },
  data() {
    return { backgroundUrl };
  }
};
</script>


<style lang="scss">
@import "~assets/css/main.scss";

.header-section {
  position: relative;
}

.ev-header {
  position: relative;
  display: flex;
  width: 100%;
  height: 550px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: $size-3;
  font-family: $family-work-sans;
  line-height: 38px;
  letter-spacing: 32px;
  background-position: center;
  background-size: cover;

  .ev-header-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $color-white;
    opacity: 0.8;
  }

  .ev-hero {
    position: absolute;
    width: 100%;
    height: 550px;

    img {
      height: auto;
    }
  }

  .ev-content {
    position: absolute;

    .ev-header-leaf-one,
    .ev-header-leaf-two,
    .ev-header-leaf-three,
    .ev-header-leaf-four,
    .ev-header-leaf-five,
    .ev-header-leaf-six {
      position: absolute;
    }

    .ev-header-leaf-one {
      top: -60px;
      left: 90px;
    }

    .ev-header-leaf-two {
      left: -85px;
      top: -10px;
    }

    .ev-header-leaf-three {
      bottom: -90px;
      left: 50px;
    }

    .ev-header-leaf-four {
      bottom: -80px;
      right: 155px;
    }

    .ev-header-leaf-five {
      right: -20px;
      bottom: -60px;
    }

    .ev-header-leaf-six {
      right: 35px;
      bottom: 40px;
    }
  }
}
</style>

