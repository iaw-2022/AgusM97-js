<template>
  <NavigationShell v-if="isAuthenticated" />
  <LogIn v-else />
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { defineAsyncComponent } from "vue";
const NavigationShell = defineAsyncComponent(() =>
  import("./components/NavigationShell.vue")
);
import LogIn from "./components/LogIn.vue";

export default {
  name: "App",
  components: {
    NavigationShell,
    LogIn,
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
