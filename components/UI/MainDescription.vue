<template>
  <div class="colums">
    <div class="column is-4 is-offset-4">
      <div class="event-description">
        <slot name="icon"></slot>
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/css/main.scss";

.event-description {
  padding: 91px 0px;
  text-align: center;

  & > *:nth-child(2) {
    font-size: $size-5;
    font-family: $family-work-sans;
  }
}
</style>
