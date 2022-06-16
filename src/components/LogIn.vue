<template>
  <el-menu
    class="side-menu"
    active-text-color="#ed7307"
    background-color="#fff"
    default-active="2"
    text-color="#141414"
  >
    <el-menu-item index="1" @click="login">
      <el-icon><Avatar /></el-icon>
      <span>Log in</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "LogIn",
  setup() {
    const { loginWithRedirect } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
    };
  },
};
</script>
