import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/images",
    name: "images",
    component: () =>
      import(/* webpackChunkName: "images" */ "../views/AllImagesView.vue"),
  },
  {
    path: "/image/:id",
    name: "image",
    component: () =>
      import(/* webpackChunkName: "image" */ "../views/ImageView.vue"),
  },
  {
    path: "/user/:username",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/ProfileView.vue"),
  },
  {
    path: "/user/:username/images",
    name: "userImages",
    component: () =>
      import(
        /* webpackChunkName: "userImages" */ "../views/UserImagesView.vue"
      ),
  },
  {
    path: "/user/:username/galleries",
    name: "userGalleries",
    component: () =>
      import(
        /* webpackChunkName: "userGalleries" */ "../views/UserGalleriesView.vue"
      ),
  },
  {
    path: "/galleries",
    name: "galleries",
    component: () =>
      import(
        /* webpackChunkName: "galleries" */ "../views/AllGalleriesView.vue"
      ),
  },
  {
    path: "/gallery/:id",
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/GalleryView.vue"),
  },
  {
    path: "/tags",
    name: "tags",
    component: () =>
      import(/* webpackChunkName: "tags" */ "../views/AllTagsView.vue"),
  },
  {
    path: "/tag/:id/images",
    name: "tagImages",
    component: () =>
      import(/* webpackChunkName: "tagImages" */ "../views/TagImagesView.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/UploadImageView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
