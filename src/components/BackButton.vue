<template>
  <el-row>
    <el-button
      class="back-button"
      type="primary"
      icon="Back"
      @click="goBack()"
      text
    />
  </el-row>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "BackButton",

  setup() {
    const router = useRouter();
    function goBack() {
      router.go(-1);
    }

    return {
      goBack,
    };
  },
};
</script>

<style scoped>
.back-button {
  color: #8b8b8b;
  font-size: larger;
}
</style>
