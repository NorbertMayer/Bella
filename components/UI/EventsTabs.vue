<template>
  <div class="row">
    <div class="columns">
      <div class="column is-2 is-offset-5 events-tabs">
        <div class="tabs">Nunta</div>
        <div class="tabs">Botez</div>
        <div class="events-tab-leaf">
          <img src="~/assets/images/tableaf.svg" alt="#">
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

.events-tabs {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  font-family: $family-work-sans;
  margin-bottom: 20px;
  position: relative;

  .tabs {
    z-index: 10;
    font-weight: 800;
    font-size: $size-4;
    color: $color-primary-dark;
  }

  .events-tab-leaf {
    position: absolute;
    top: -22px;
    z-index: 2;
    width: 80px;
    left: 30px;
  }
}
</style>