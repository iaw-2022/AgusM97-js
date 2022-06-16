<template>
  <el-row>
    <img
      class="profile-picture"
      v-bind:src="`data:image/png;base64,${user.picture}`"
      alt=""
    />
  </el-row>
  <el-row>
    <h2>{{ user.username }}</h2>
  </el-row>
  <el-row>
    <MyLabel :msg="`Joined ${formatedDate}`" />
  </el-row>
  <el-row>
    <router-link class="button" :to="`/user/${user.username}/images`">
      <el-button color="#ed7307" plain round>Images</el-button>
    </router-link>
    <router-link class="button" :to="`/user/${user.username}/galleries`">
      <el-button color="#ed7307" plain round>Galleries</el-button>
    </router-link>
  </el-row>
  <el-row v-if="user.bio">
    <MyLabel msg="Bio" />
  </el-row>
  <el-row>
    <div class="bio">{{ user.bio }}</div>
  </el-row>
</template>

<script>
import { useRoute } from "vue-router";
import MyLabel from "@/components/MyLabel.vue";

export default {
  name: "ProfileView",
  components: {
    MyLabel,
  },

  async setup() {
    const route = useRoute();

    const responseUser = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/user/" + route.params.username
    );
    const user = await responseUser.json();

    const date = new Date(user.created_at);
    const formatedDate =
      date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

    return {
      user,
      formatedDate,
    };
  },
};
</script>

<style scoped>
.el-row {
  justify-content: center;
}
.button {
  margin: 10px;
}
.profile-picture {
  height: 200px;
  border-radius: 100%;
  vertical-align: middle;
  margin-top: 45px;
}
.bio {
  text-align: center;
  width: 500px;
}
</style>
