<template>
  <div>
    <Header>
      <h1 slot="headerTitle">{{ headerTitle }}</h1>
    </Header>
    <div class="container">
      <MainDescription>
        <img slot="icon" src="~/assets/images/Group91.svg" alt="#">
        <p slot="text">{{catalogText}}</p>
      </MainDescription>
      <EventsTabs/>
      <div class="masonry">
        <EventPreview
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :location="event.location"
          :tematic="event.tematic"
          :evThumbnail="event.evThumbnail"
          :id="event.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import EventPreview from "@/components/Event/EventPreview";
import MainDescription from "@/components/UI/MainDescription";
import EventsTabs from "@/components/UI/EventsTabs";

export default {
  components: {
    Header,
    EventPreview,
    MainDescription,
    EventsTabs
  },
  data() {
    return {
      headerTitle: "evenimente",
      catalogText:
        "Floraria Bella poate duce evenimentul dumneavoastra la urmatorul nivel cu designul de flori personalizat si un decor artistic unic"
    };
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: context.isDev ? "published" : "draft",
        starts_with: "event/"
      })
      .then(res => {
        return {
          events: res.data.stories.map(event => {
            return {
              id: event.slug,
              title: event.content.title,
              location: event.content.location,
              tematic: event.content.theme,
              evThumbnail: event.content.thumbnail
            };
          })
        };
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  }
};
</script>

<style lang="scss">
.masonry {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
</style>
