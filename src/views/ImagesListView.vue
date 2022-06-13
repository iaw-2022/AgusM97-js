<template>
  <img
    v-for="image in imageList"
    :src="`data:image/png;base64,${image.file}`"
    :key="image.id"
  />
</template>

<script>
export default {
  name: "ImagesListView",

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
