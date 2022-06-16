<template>
  <h2>Galleries by {{ username }}</h2>
  <GalleryList :galleries="galleryList" />
</template>

<script>
import GalleryList from "@/components/GalleryList.vue";
import { useRoute } from "vue-router";

export default {
  name: "AllImagesView",
  components: {
    GalleryList,
  },
  async setup() {
    const route = useRoute();

    const responseGalleries = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/user/" +
        route.params.username +
        "/galleries"
    );
    const galleryList = await responseGalleries.json();

    const username = route.params.username;

    return {
      username,
      galleryList,
    };
  },
};
</script>
