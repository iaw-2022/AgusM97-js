<template>
  <el-row v-for="gallery in galleries" v-bind:key="gallery.id">
    <router-link :to="`/gallery/${gallery.id}`">
      <div class="gallery-container">
        <h3>{{ gallery.name }}</h3>
        <MyLabel :msg="`Created ${formatedDate(gallery.created_at)}`" />
      </div>
    </router-link>
    <el-divider />
  </el-row>
</template>

<script>
import MyLabel from "./MyLabel.vue";
export default {
  name: "GalleryList",
  props: ["galleries"],
  components: {
    MyLabel,
  },
  async setup() {
    function formatedDate(timestamp) {
      const date = new Date(timestamp);
      return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    return {
      formatedDate,
    };
  },
};
</script>

<style scoped></style>
