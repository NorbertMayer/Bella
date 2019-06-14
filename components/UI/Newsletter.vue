<template>
  <div class="newsletter">
    <div class="newsletter__item">
      <input type="text" placeholder="Adresa ta de email">
    </div>
    <div class="newsletter__item">
      <button>Trimite</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.newsletter {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-family: $family-work-sans;

  input {
    border: 1px solid #000000;
    text-align: center;
    padding: 27px 60px;
    background: #f5f5f5;
  }

  button {
    padding: 27px 40px;
    color: $color-white;
    font-size: $size-6;
    border: none;
    background: $color-black;
  }

  ::placeholder {
    font-size: $size-6;
    color: $color-black;
  }
}
</style>
