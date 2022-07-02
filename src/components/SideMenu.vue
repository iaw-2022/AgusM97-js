<template>
  <el-menu
    class="side-menu"
    active-text-color="#ed7307"
    background-color="#fff"
    text-color="#141414"
  >
    <el-menu-item index="5">
      <el-button color="#ed7307" plain round @click="goToUpload">
        <el-icon><Plus /></el-icon>
        <span>Upload New Image</span>
      </el-button>
    </el-menu-item>
    <el-menu-item index="4" @click="goToMyProfile">
      <el-icon><User /></el-icon>
      <span>My Profile</span>
    </el-menu-item>
    <el-menu-item index="1" @click="goToMyImages">
      <el-icon><Picture /></el-icon>
      <span> My Images </span>
    </el-menu-item>
    <el-menu-item index="2" @click="goToMyGalleries">
      <el-icon><Collection /></el-icon>
      <span>My Galleries</span>
    </el-menu-item>
    <el-menu-item index="3" @click="logout">
      <el-icon><CloseBold /></el-icon>
      <span>Logout</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
export default {
  name: "SideMenu",
  async setup() {
    const { logout, user } = useAuth0();
    const router = useRouter();

    const responseUser = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/user/email/" +
        user.value.email
    );
    const currentUser = await responseUser.json();

    function goToMyProfile() {
      router.push("/user/" + currentUser.username);
    }

    function goToMyImages() {
      router.push("/user/" + currentUser.username + "/images");
    }

    function goToMyGalleries() {
      router.push("/user/" + currentUser.username + "/galleries");
    }
    function goToUpload() {
      router.push("/upload");
    }

    return {
      logout: () => {
        logout({ returnTo: window.location.origin });
        router.push("/");
      },
      currentUser,
      goToMyProfile,
      goToMyImages,
      goToMyGalleries,
      goToUpload,
    };
  },
};
</script>

<style scoped></style>
