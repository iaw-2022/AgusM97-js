<template>
  <MyLabel v-if="isEmpty" msg="No results" />
  <el-row class="image-list">
    <div class="image-container" v-for="image in images" v-bind:key="image.id">
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
import MyLabel from "./MyLabel.vue";
export default {
  name: "ImagesList",
  props: ["images"],
  components: {
    MyLabel,
  },
  setup(props) {
    return {
      isEmpty: Object.keys(props.images).length === 0,
    };
  },
};
</script>

<style scoped>
.image-list {
  margin-top: 35px;
}
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
