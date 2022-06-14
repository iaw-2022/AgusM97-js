<template>
  <el-row>
    <img
      class="profile-picture"
      v-bind:src="`data:image/png;base64,${user.picture}`"
      alt=""
    />
    {{ user.username }}</el-row
  >
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "ProfileView",

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

<style>
.profile-picture {
  height: 100px;
  border-radius: 100%;
  vertical-align: middle;
}
</style>
