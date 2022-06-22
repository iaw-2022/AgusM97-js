import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import { createAuth0 } from "@auth0/auth0-vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";

const app = createApp(App).use(router);

app.use(
  createAuth0({
    domain: process.env.DOMAIN,
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URI,
    audience: process.env.AUDIENCE,
  })
);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
