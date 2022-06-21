<template>
  <el-button>
    <el-icon><Avatar /></el-icon>Log in
  </el-button>
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
