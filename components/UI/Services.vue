<template>
  <div class="container">
    <div class="row services">
      <div class="column is-4 is-offset-4">
        <div class="services__description">
          <img src="~/assets/images/Group91.svg" alt="#">
          <p>Asiguram livrare la domiciliu pentru comenzile online in Baia Mare</p>
        </div>
      </div>
      <div class="column is-8 is-offset-2">
        <div class="services__shop">
          <div class="services__shop_item">
            <img src="~/assets/images/013-security.svg" alt="#">
            <p>Plati securizate</p>
          </div>
          <div class="services__shop_item">
            <img src="~/assets/images/013-security.svg" alt="#">
            <p>Transport gratuit</p>
          </div>
          <div class="services__shop_item">
            <img src="~/assets/images/009-hourglass.svg" alt="#">
            <p>Livrare in 2 ore</p>
          </div>
          <div class="services__shop_item">
            <img src="~/assets/images/002-block-1.svg" alt="#">
            <p>Garantia calitatii</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~assets/css/main.scss";

.services {
  font-size: $size-5;
  font-family: $family-work-sans;
  margin-bottom: 160px;

  &__description {
    text-align: center;
    margin-bottom: 30px;
  }

  &__shop {
    display: flex;
    justify-content: space-between;
    text-align: center;

    &_item {
      display: flex;
      flex-direction: column;

      img {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
