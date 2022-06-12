<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button v-if="!isAuthenticated" @click="login">Log in</button>
    <button v-else @click="logout">Log out</button>
    <button @click="showToken">Show token</button>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      isAuthenticated: useAuth0().isAuthenticated,
    };
  },
  setup() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
