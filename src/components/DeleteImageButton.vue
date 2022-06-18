<template>
  <el-popconfirm
    confirm-button-text="Yes"
    cancel-button-text="No"
    title="Are you sure to delete this?"
    @confirm="deleteImage()"
    v-if="ownerBrowsing"
  >
    <template #reference>
      <el-button type="danger" round>
        <el-icon><Delete /></el-icon>
      </el-button>
    </template>
  </el-popconfirm>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
export default {
  props: ["user", "image"],
  setup(props) {
    const ownerBrowsing = props.user.email == useAuth0().user.value.email;
    const router = useRouter();
    const { getAccessTokenSilently } = useAuth0();

    async function deleteImage() {
      const token = await getAccessTokenSilently();
      fetch(
        "https://proyecto-api-agusm97.herokuapp.com/image/" + props.image.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      router.push(`/user/${props.user.username}/images`);
    }

    return {
      ownerBrowsing,
      deleteImage,
    };
  },
};
</script>
