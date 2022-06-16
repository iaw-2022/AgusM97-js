<template>
  <NavigationShell />
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import NavigationShell from "./components/NavigationShell.vue";

export default {
  name: "App",
  components: {
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-breadcrumb {
  margin-bottom: 20px;
}
body {
  margin: 0%;
}
h2 {
  color: #ed7307;
}
</style>
