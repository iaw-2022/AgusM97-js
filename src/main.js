import { createApp } from "vue";
import App from "./App.vue";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-0f-5co-0.us.auth0.com",
    client_id: "yJyGr32ely63D7pigU7bSI5h9GClY0fW",
    redirect_uri: window.location.origin,
    audience: "https://proyecto-IAW/api",
  })
);

app.mount("#app");
