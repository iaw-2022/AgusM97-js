<template>
  <h2>Upload a new image</h2>
  <el-divider />
  <div id="alert-container"></div>
  <el-row>
    <textarea
      name="Description"
      id="description"
      cols="40"
      rows="7"
      placeholder="Description (optional)"
    ></textarea>
  </el-row>
  <el-row>
    <input id="input-file" type="file" @change="encodeImageFileAsURL" />
  </el-row>
  <el-row>
    <el-button class="ml-3" @click="uploadImage" plain round color="#ed7307">
      Upload
    </el-button>
  </el-row>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const { getAccessTokenSilently } = useAuth0();
    var encodedData = null;

    function encodeImageFileAsURL(element) {
      var file = element.target.files[0];
      const reader = new FileReader();
      reader.onloadend = function () {
        encodedData = reader.result
          .replace("data:image/png;base64,", "")
          .replace("data:image/jpeg;base64,", "");
      };
      reader.readAsDataURL(file);
    }

    async function uploadImage() {
      const data = {
        description: document.getElementById("description").value,
        file: encodedData,
      };
      const token = await getAccessTokenSilently();
      fetch("https://proyecto-api-agusm97.herokuapp.com/image.new", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });
      ElMessage({
        message: "Image uploaded succesfully.",
        type: "success",
      });
      document.getElementById("input-file").value = "";
      document.getElementById("description").value = "";
    }

    return {
      encodeImageFileAsURL,
      uploadImage,
    };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 30px;
}
.alert {
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 500px;
}
</style>
