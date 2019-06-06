<template>
  <div class="container">
    <div class="review-wrap">
      <div class="review-image">
        <img src="~/assets/images/rocknwool-636347-unsplash.png" alt="#">
      </div>

      <div class="review-box column is-9 is-offset-2">
        <div class="review-text">
          <div class="review-text-content">
            <div>
              <span class="review-text-content-semic-one">
                <img src="~/assets/images/semic2.svg" alt="#">
              </span>Pe langa faptul ca mereu buchetele comandate au fost cu mult peste cuvantul superb,
              am avut parte de decorul mult visat in ziua cea mai importanta nunta ! Recomand cu mare drag!!!
              <span
                class="review-text-content-semic-two"
              >
                <img src="~/assets/images/semic.svg" alt="#">
              </span>
            </div>
          </div>
        </div>

        <div class="review-text-footer">
          <p>Fernando de la Caransebes</p>
          <div class="review-text-footer-arrows">
            <div class="arrows-left">
              <img src="~/assets/images/001-right-arrow.svg" alt="#">
            </div>
            <div class="arrows-right">
              <img src="~/assets/images/001-right-arrow.svg" alt="#">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.review-wrap {
  display: flex;
  height: 500px;
  align-items: center;
  font-size: $size-5;
  color: $color-black;
  font-family: $family-work-sans;

  .review-image {
    position: absolute;
    left: -150px;
  }

  .review-box {
    z-index: 10;
    border: 3px solid #d9d9d9;
    padding: 60px 196px 130px 97px;
    background: $color-primary-light;

    .review-text {
      position: relative;
      text-align: left;

      .review-text-content {
        position: relative;

        .review-text-content-semic-one,
        .review-text-content-semic-two {
          position: absolute;
          z-index: -1;
        }

        .review-text-content-semic-two {
          right: 0;
        }
      }
    }

    .review-text-footer {
      margin-top: 24px;
      text-align: right;
      font-weight: 600;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 0;
      height: 70px;
      align-items: center;

      .review-text-footer-arrows {
        display: flex;
        justify-content: flex-end;

        .arrows-left,
        .arrows-right {
          background: $color-black;
          padding: 24px 24px;
        }

        .arrows-left {
          margin: 0px 10px 0px 140px;
        }

        .arrows-right {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
