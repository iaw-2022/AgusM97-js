<template>
  <BackButton />
  <h2>{{ gallery.name }}</h2>
  <MyLabel :msg="`Gallery by ${user.username}`" />
  <ImageList :images="imageList" />
</template>

<script>
import ImageList from "@/components/ImageList.vue";
import { useRoute } from "vue-router";
import MyLabel from "@/components/MyLabel.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "AllImagesView",
  components: {
    ImageList,
    MyLabel,
    BackButton,
  },
  async setup() {
    const route = useRoute();

    const responseGallery = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/gallery/" + route.params.id
    );
    const gallery = await responseGallery.json();

    const responseImages = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/gallery/" +
        route.params.id +
        "/images"
    );
    const imageList = await responseImages.json();

    const responseUser = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/user/id/" + gallery.user_id
    );
    const user = await responseUser.json();

    return {
      gallery,
      imageList,
      user,
    };
  },
};
</script>
