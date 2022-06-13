<template>
  <el-menu
    class="side-menu"
    active-text-color="#ed7307"
    background-color="#fff"
    default-active="2"
    text-color="#141414"
  >
    <el-menu-item index="1"> My Galleries </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Upload /></el-icon>
      <span>My Images</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>
