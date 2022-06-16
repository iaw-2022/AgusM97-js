<template>
  <h2>All Tags</h2>
  <el-row class="tag-list">
    <router-link
      class="tag"
      v-for="tag in tags"
      :key="tag.id"
      :to="`/tag/${tag.id}/images`"
    >
      <el-tag>
        {{ tag.name }}
      </el-tag>
    </router-link>
  </el-row>
</template>

<script>
export default {
  name: "AllTagsView",
  async setup() {
    const response = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/tags"
    );
    const tags = await response.json();

    return {
      tags,
    };
  },
};
</script>

<style>
.tag-list {
  margin-top: 35px;
  max-width: 1000px;
}
.tag {
  margin-bottom: 12px;
  margin-right: 12px;
}
</style>
