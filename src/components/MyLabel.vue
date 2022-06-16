<template>
  <label>{{ msg }}</label>
</template>

<script>
export default {
  name: "MyLabel",
  props: ["msg"],
};
</script>

<style scoped>
label {
  color: #8b8b8b;
  margin-bottom: 10px;
  margin-top: 20px;
}
</style>
