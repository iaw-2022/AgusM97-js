<template>
  <h2>All Galleries</h2>
  <GalleryList :galleries="galleryList" />
</template>

<script>
import GalleryList from "@/components/GalleryList.vue";

export default {
  name: "AllGalleriesView",
  components: {
    GalleryList,
  },
  async setup() {
    const response = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/galleries"
    );
    const galleryList = await response.json();

    return {
      galleryList,
    };
  },
};
</script>
