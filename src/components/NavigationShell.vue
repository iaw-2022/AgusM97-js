<template>
  <div>
    <el-container>
      <el-header class="header">
        <HeaderMenu />
      </el-header>
      <el-container>
        <el-aside class="aside">
          <el-row>{{ currentUser.email }}</el-row>
          <SideMenu />
        </el-aside>
        <el-main>
          <Suspense>
            <template #default>
              <router-view />
            </template>
            <template #fallback> Loading... </template>
          </Suspense>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import HeaderMenu from "./HeaderMenu.vue";
import SideMenu from "./SideMenu.vue";

export default {
  name: "NavigationShell",
  components: {
    HeaderMenu,
    SideMenu,
  },
  setup() {
    const { logout, getAccessTokenSilently, user } = useAuth0();
    const currentUser = user.value;

    return {
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      showToken: async () => {
        const token = await getAccessTokenSilently();
        console.log(token);
      },
      currentUser,
    };
  },
};
</script>

<style>
.header {
  padding-left: 0%;
  padding-right: 0%;
  border-width: 0px;
  height: 100%;
  border: 0cm;
}
.aside {
  padding-top: 3%;
}
</style>
