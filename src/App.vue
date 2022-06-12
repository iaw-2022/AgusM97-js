<template>
  <Login v-if="!isAuthenticated" />
  <NavigationShell v-else />
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import Login from "./components/LogIn.vue";
import NavigationShell from "./components/NavigationShell.vue";

export default {
  name: "App",
  components: {
    Login,
    NavigationShell,
  },
  data() {
    return {
      isAuthenticated: useAuth0().isAuthenticated,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0%;
}
</style>
