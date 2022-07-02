<template>
  <BackButton />
  <h2>Images uploaded by {{ username }}</h2>
  <ImageList :images="imageList" />
</template>

<script>
import ImageList from "@/components/ImageList.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "AllImagesView",
  components: {
    ImageList,
    BackButton,
  },
  async setup() {
    const route = useRoute();

    const responseImages = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/user/" +
        route.params.username +
        "/images"
    );
    const imageListAux = await responseImages.json();
    const imageList = ref(imageListAux);

    const username = route.params.username;

    return {
      username,
      imageList,
    };
  },
};
</script>
