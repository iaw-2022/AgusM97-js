<template>
  <el-button type="primary" @click="login">Log in</el-button>
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
