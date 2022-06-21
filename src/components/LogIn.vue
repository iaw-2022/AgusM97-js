<template>
  <div>
    <el-button class="button" size="large" icon="Avatar" @click="login">
      Log in
    </el-button>
  </div>
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

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background-color: #ed7307;
}
.button {
  margin: auto;
  font-size: larger;
}
</style>
