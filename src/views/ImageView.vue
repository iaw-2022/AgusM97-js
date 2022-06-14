<template>
  <div>
    <el-col :span="16" class="image-container">
      <img
        class="image"
        :src="`data:image/png;base64,${image.file}`"
        :alt="`Image #${image.id}`"
      />
    </el-col>
    <el-col :span="6" class="info">
      <el-row><label>Uploaded By</label></el-row>
      <el-row>
        <span>{{ user.username }}</span>
      </el-row>
      <el-row><label>Date</label></el-row>
      <el-row>
        <span>{{ formatedDate }}</span>
      </el-row>
      <div v-if="image.description">
        <el-row><label>Description</label></el-row>
        <el-row>
          <span>{{ image.description }}</span>
        </el-row>
      </div>
      <el-row><label>Tags</label></el-row>
      <el-row>
        <el-tag class="tag" v-for="tag in tags" :key="tag.id">
          {{ tag.name }}
        </el-tag>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "ImageView",

  async setup() {
    const route = useRoute();

    const responseImage = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/image/" + route.params.id
    );
    const image = await responseImage.json();

    const responseTags = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/image/" +
        route.params.id +
        "/tags"
    );
    const tags = await responseTags.json();

    const responseUser = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/user/id/" + image.user_id
    );
    const user = await responseUser.json();

    const date = new Date(image.created_at);
    const formatedDate =
      date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

    return {
      image,
      user,
      tags,
      formatedDate,
    };
  },
};
</script>

<style scoped>
label {
  color: #8b8b8b;
  margin-bottom: 10px;
  margin-top: 20px;
}
.tag {
  margin-right: 7px;
  margin-bottom: 7px;
}
.image-container {
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-right: 30px;
}
.image {
  max-width: 650px;
  max-height: 650px;
  margin: 15px;
}
.info {
  margin-top: 35px;
  font-size: 0.9em;
}
</style>
