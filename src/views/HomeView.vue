<template>
  <div class="home">
    <h2>Popular Images</h2>
    <ImageList :images="images" />
    <h2>Popular Galleries</h2>
    <GalleryList :galleries="galleries" />
  </div>
</template>

<script>
import ImageList from "@/components/ImageList.vue";
import GalleryList from "@/components/GalleryList.vue";
export default {
  name: "HomeView",
  components: {
    ImageList,
    GalleryList,
  },
  async setup() {
    const responseImage1 = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/image.random"
    );
    const responseImage2 = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/image.random"
    );
    const responseImage3 = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/image.random"
    );
    const image1 = await responseImage1.json();
    const image2 = await responseImage2.json();
    const image3 = await responseImage3.json();
    const images = {
      image1,
      image2,
      image3,
    };

    const responseGallery1 = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/gallery.random"
    );
    const responseGallery2 = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/gallery.random"
    );
    const responseGallery3 = await fetch(
      "https://proyecto-api-agusm97.herokuapp.com/gallery.random"
    );
    const gallery1 = await responseGallery1.json();
    const gallery2 = await responseGallery2.json();
    const gallery3 = await responseGallery3.json();
    const galleries = {
      gallery1,
      gallery2,
      gallery3,
    };

    return {
      images,
      galleries,
    };
  },
};
</script>
