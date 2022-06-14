<template>
  <el-row>
    <div
      class="image-container"
      v-for="image in imageList"
      v-bind:key="image.id"
    >
      <router-link :to="`/image/${image.id}`">
        <img
          class="thumbnail"
          :src="`data:image/png;base64,${image.file}`"
          :key="image.id"
          :alt="`Image #${image.id}`"
        />
      </router-link>
    </div>
  </el-row>
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

<style scoped>
.image-container {
  width: 190px;
  height: 190px;
}
.thumbnail {
  max-width: 75%;
  max-height: 75%;
  display: block;
  margin: auto;
}
</style>
