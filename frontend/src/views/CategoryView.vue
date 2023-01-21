<template>
  <ContentHeading :heading="header" />
  <div class="grid place-items-center mt-5">
    <main class="mx-auto max-w-max sm:flex">
      <TheCategory :cat="catRoute" />
    </main>
  </div>
</template>

<script setup>
import TheCategory from "../components/galleries/TheCategory.vue";
import ContentHeading from "../components/shared/ContentHeading.vue";
import { useRoute } from "vue-router";
const route = useRoute(); // <--- this is the magic line
const catRoute = route.params.name; // (it is reactive)
const header =
  {
    header: catRoute,
    subHeader: `This is the ${catRoute} page`,
  }
</script>
