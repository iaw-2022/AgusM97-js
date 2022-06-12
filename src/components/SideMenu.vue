<template>
  <el-menu
    class="side-menu"
    active-text-color="#ed7307"
    background-color="#fff"
    default-active="2"
    text-color="#141414"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item one</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><Upload /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "SideMenu",
  setup() {
    const { getAccessTokenSilently } = useAuth0();

    return {
      showToken: async () => {
        const token = await getAccessTokenSilently();
        console.log(token);
      },
    };
  },
};
</script>
