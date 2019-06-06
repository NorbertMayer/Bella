<template>
  <div :style="{backgroundImage: 'url(' + evThumbnail + ')'}" class="event-preview-thumbnail">
    <nuxt-link :to="id">
      <div class="event-preview-content is-size-7">
        <p>{{title}}</p>
        <p>{{location}}</p>
        <p>{{tematic}}</p>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    tematic: {
      type: String,
      required: true
    },
    evThumbnail: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "~assets/css/main.scss";

.event-preview-thumbnail {
  position: relative;
  background-position: center;
  background-size: cover;
  flex: auto;
  width: calc(50% - 32px);
  height: 250px;
  margin: 0 16px 16px 0; /* Some gutter */

  a,
  a:hover {
    color: $color-white;
  }

  .event-preview-content {
    position: absolute;
    width: 100%;
    background: $color-primary-dark;
    bottom: 0;
    opacity: 0.8;
    padding: 10px 0px;

    p {
      margin-left: 30px;
    }
  }
}

.event-preview-thumbnail:nth-child(2n) {
  height: 350px;
}
.event-preview-thumbnail:nth-child(2n + 1) {
  height: 550px;
}
.event-preview-thumbnail:nth-child(4n + 1) {
  height: 250px;
}
</style>
