<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showToken">Show token</button>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
export default {
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
