<template>
  <footer class="appfooter">
    <div class="appfooter__leaf-one">
      <img src="~/assets/images/leaves.png" alt="#">
    </div>
    <div class="appfooter__leaf-two">
      <img src="~/assets/images/leaf2.png" alt="#">
    </div>
    <div class="container">
      <div class="row">
        <div class="footer-top">
          <div class="columns">
            <div class="column is-3">
              <div class="footer-top__nav">
                <p class="footer-title">Meniu</p>
                <nuxt-link to="/product">Shop</nuxt-link>
                <nuxt-link to="/events">Evenimente</nuxt-link>
                <nuxt-link to="/events">
                  Politica
                  <br>confidentialitatii
                </nuxt-link>
              </div>
            </div>
            <div class="column is-3">
              <div class="footer-top__contact">
                <p class="footer-title">Informatiile magazinului</p>
                <p>
                  <span>
                    <img src="~/assets/images/location-pointer.svg" alt="#">
                  </span> Str. Progresului nr. 40 Baia Mare
                </p>
                <p>
                  <span>
                    <img src="~/assets/images/phone-receiver.svg" alt="#">
                  </span> Suna: 0770 410 932
                </p>
              </div>
            </div>
            <div class="column is-2">
              <p class="footer-title">Urmareste-ne</p>
              <div class="footer-top__social">
                <div>
                  <img src="~/assets/images/facebook.svg" alt="#">
                </div>
                <div>
                  <img src="~/assets/images/facebook.svg" alt="#">
                </div>
              </div>
              <p class="footer-title">Plati sigure prin:</p>
              <div class="footer-top__payment">
                <div>
                  <img src="~/assets/images/visa.svg" alt="#">
                </div>
                <div>
                  <img src="~/assets/images/mastercard.svg" alt="#">
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="footer-top__newsletter">
                <p class="footer-title">Aboneaza-te la newsletter</p>
                <Newsletter/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="footer-bottom">
          <p>© Copyright 2019 Floraria Bella.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Newsletter from "@/components/UI/Newsletter";
export default {
  components: {
    Newsletter
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.appfooter {
  font-size: $size-6;
  font-family: $family-work-sans;
  position: relative;
  overflow: hidden;

  &__leaf-one {
    position: absolute;
    bottom: -80px;
    right: -210px;
  }

  &__leaf-two {
    position: absolute;
    bottom: -360px;
    right: -150px;
  }

  .footer-top {
    padding: 115px 0px;

    &__nav {
      display: flex;
      flex-direction: column;

      a {
        color: $color-primary-dark;
      }
    }

    &__social,
    &__payment {
      display: flex;

      img {
        margin-right: 20px;
      }
    }
  }

  .footer-title {
    font-weight: 600;
    color: $color-black;
    padding-bottom: 20px;
  }

  .footer-bottom {
    text-align: center;
    padding-bottom: 30px;
  }
}
</style>
