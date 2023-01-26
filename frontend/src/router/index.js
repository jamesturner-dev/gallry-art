import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Category from "../views/CategoryView.vue";
import Tags from "../views/TagView.vue";
import NotFound from "../views/NotFound.vue";
import GalleryView from "../views/GalleryView.vue";
import Page from "../views/PageView.vue";
// import SearchResults from "../views/SearchResults.vue";
import SuggestImage from "../views/SuggestImage.vue";
import UserView from "../views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  // {
  //   path: "/Admin",
  //   name: "Admin",
  //   component: Admin,
  // },
  {
    path: "/page/:name",
    name: "Page",
    component: Page,
  },
  {
    path: "/cat/:name",
    name: "Category",
    component: Category,
  },
  {
    path: "/user/:name",
    name: "UserView",
    component: UserView,
  },
  {
    path: "/tag/:name",
    name: "Tags",
    component: Tags,
  },
  {
    path: "/gallery/:name",
    name: "GalleryView",
    component: GalleryView,
  },
  // {
  //   path: "/search/:searchTerm",
  //   name: "SearchResults",
  //   component: SearchResults,
  // },
  {
    path: "/suggest",
    name: "SuggestImage",
    component: SuggestImage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
