<template>
  <el-menu
    class="top_menu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
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
.top_menu {
  border: 0cm;
}
.flex-grow {
  flex-grow: 0.9;
}
</style>
