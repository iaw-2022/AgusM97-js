<template>
  <h2>All Images</h2>
  <ImageList :images="imageList" />
</template>

<script>
import ImageList from "@/components/ImageList.vue";

export default {
  name: "AllImagesView",
  components: {
    ImageList,
  },
  async setup() {
    const response = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/images"
    );
    const imageList = await response.json();

    return {
      imageList,
    };
  },
};
</script>
