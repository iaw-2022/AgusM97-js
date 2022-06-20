<template>
  <BackButton />
  <el-col>
    <img
      class="image"
      :src="`data:image/png;base64,${image.file}`"
      :alt="`Image #${image.id}`"
    />
  </el-col>
  <el-col class="info">
    <el-row>
      <Suspense>
        <DeleteImageButton :user="user" :image="image" />
      </Suspense>
    </el-row>
    <el-row><MyLabel msg="Uploaded By" /></el-row>
    <el-row>
      <router-link :to="`/user/${user.username}`">
        <span>
          <img
            class="profile-picture"
            v-bind:src="`data:image/png;base64,${user.picture}`"
            alt=""
          />
          {{ user.username }}
        </span>
      </router-link>
    </el-row>
    <el-row><MyLabel msg="Date" /></el-row>
    <el-row>
      <span>{{ formatedDate }}</span>
    </el-row>
    <div v-if="image.description">
      <el-row><MyLabel msg="Description" /></el-row>
      <el-row>
        <span>{{ image.description }}</span>
      </el-row>
    </div>
    <el-row><MyLabel msg="Tags" /></el-row>
    <Suspense>
      <ImageTagList :user="user" :image="image" />
    </Suspense>
  </el-col>
</template>

<script>
import { useRoute } from "vue-router";
import { defineAsyncComponent } from "vue";
import MyLabel from "@/components/MyLabel.vue";
import BackButton from "@/components/BackButton.vue";
const DeleteImageButton = defineAsyncComponent(() =>
  import("../components/DeleteImageButton.vue")
);
const ImageTagList = defineAsyncComponent(() =>
  import("../components/ImageTagList.vue")
);

export default {
  name: "ImageView",
  components: {
    MyLabel,
    BackButton,
    DeleteImageButton,
    ImageTagList,
  },

  async setup() {
    const route = useRoute();

    const responseImage = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/image/" + route.params.id
    );
    const image = await responseImage.json();

    const responseUser = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/user/id/" + image.user_id
    );
    const user = await responseUser.json();

    const date = new Date(image.created_at);
    const month = date.getMonth() + 1;
    const formatedDate =
      date.getDate() + "/" + month + "/" + date.getFullYear();

    return {
      image,
      user,
      formatedDate,
    };
  },
};
</script>

<style scoped>
.image-container {
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-right: 30px;
}
.image {
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  max-width: 850px;
  max-height: 750px;
  margin: 25px;
}
.info {
  margin-top: 35px;
  font-size: 0.9em;
  max-width: 300px;
}
.profile-picture {
  height: 40px;
  border-radius: 80%;
  margin-right: 10px;
  vertical-align: middle;
}
</style>
