<template>
  <h2>Images taged with "{{ tag.name }}"</h2>
  <ImageList :images="imageList" />
</template>

<script>
import ImageList from "@/components/ImageList.vue";
import { useRoute } from "vue-router";

export default {
  name: "AllImagesView",
  components: {
    ImageList,
  },
  async setup() {
    const route = useRoute();

    const responseTag = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/tag/id/" + route.params.id
    );
    const tag = await responseTag.json();

    const responseImages = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/tag/" +
        route.params.id +
        "/images"
    );
    const imageList = await responseImages.json();

    return {
      tag,
      imageList,
    };
  },
};
</script>
