<template>
  <el-row v-if="!ownerBrowsing">
    <el-tag class="tag" v-for="tag in tags" :key="tag.id" @click="goTo(tag.id)">
      {{ tag.name }}
    </el-tag>
  </el-row>

  <el-row v-if="ownerBrowsing">
    <el-tag
      class="tag"
      v-for="tag in tags"
      :key="tag"
      closable
      :disable-transitions="false"
      @close="deleteTag(tag)"
      @click="goTo(tag.id)"
    >
      {{ tag.name }}
    </el-tag>
  </el-row>

  <el-row v-if="ownerBrowsing">
    <el-select v-model="value" value-key="name" placeholder="Select new tag...">
      <el-option
        v-for="tag in allTags"
        :key="tag.id"
        :label="tag.name"
        :value="tag"
      />
    </el-select>
    <el-button @click="addTag()">
      <el-icon><Plus /></el-icon>
    </el-button>
  </el-row>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { ElMessage } from "element-plus";
export default {
  props: ["user", "image"],
  async setup(props) {
    const ownerBrowsing = ref(props.user.email == useAuth0().user.value.email);
    const { getAccessTokenSilently } = useAuth0();
    const router = useRouter();
    const value = ref("");

    function goTo(tag_id) {
      router.push("/tag/" + tag_id + "/images");
    }

    const responseTags = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/image/" +
        props.image.id +
        "/tags"
    );
    const tagsAux = await responseTags.json();
    const tags = ref(tagsAux);

    const responseAllTags = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/tags"
    );
    const allTags = await responseAllTags.json();

    async function deleteTag(tag) {
      const token = await getAccessTokenSilently();
      fetch(
        "https://proyecto-api-agusm97.herokuapp.com/image/" +
          props.image.id +
          "/tags/" +
          tag.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      tags.value.splice(tags.value.indexOf(tag), 1);
    }

    async function addTag() {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        "https://proyecto-api-agusm97.herokuapp.com/image/" +
          props.image.id +
          "/tags/" +
          value.value.id,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.ok) {
        const responseTag = await fetch(
          "https://proyecto-api-agusm97.herokuapp.com/tag/id/" + value.value.id
        );
        const newTag = await responseTag.json();
        tags.value.push(newTag);
      } else
        ElMessage({
          message: "Tag is already associated.",
          type: "error",
        });
    }

    return {
      ownerBrowsing,
      tags,
      allTags,
      deleteTag,
      addTag,
      goTo,
      value,
    };
  },
};
</script>

<style scoped>
.tag {
  margin-right: 7px;
  margin-bottom: 7px;
}
</style>
