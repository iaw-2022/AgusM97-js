<template>
  <el-menu
    class="top-menu"
    mode="horizontal"
    background-color="#ed7307"
    text-color="#fff"
    active-text-color="#fff"
  >
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/images">Images</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/galleries">Galleries</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/tags">Tags</router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to="/about">About</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script></script>

<style>
.top-menu {
  border: 0cm;
}
.flex-grow {
  flex-grow: 0.9;
}

a {
  text-decoration: none;
}
</style>
