<template>
  <el-menu
    class="top-menu"
    mode="horizontal"
    background-color="#ed7307"
    text-color="#fff"
    active-text-color="#fff"
  >
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">Galleries</el-menu-item>
    <el-menu-item index="3">
      <router-link to="/about">About</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/images">Images</router-link>
    </el-menu-item>
    <div class="flex-grow"></div>
    <el-menu-item index="5" @click="logout">Log out</el-menu-item>
  </el-menu>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "HeaderMenu",
  setup() {
    const { logout } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

    return {
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      showToken: async () => {
        const token = await getAccessTokenSilently();
        console.log(token);
      },
    };
  },
};
</script>

<style>
.top-menu {
  border: 0cm;
}
.flex-grow {
  flex-grow: 0.9;
}

a {
  text-decoration: none;
}
</style>
