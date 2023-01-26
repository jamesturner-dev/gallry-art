<template>
  <ContentHeading :heading="header" />
  <GalleryLoop :gallery="tagLinks" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import GalleryLoop from "../components/galleries/GalleryLoop.vue";
import ContentHeading from "../components/shared/ContentHeading.vue";
const route = useRoute(); // <--- this is the magic line
const tagRoute = route.params.name; // (it is reactive)
const tagLinks = ref([]);
const tagUrl = `http://localhost:5000/api/v1/images/?tags=${tagRoute}`;
// const tagUrl = 'http://localhost:5000/api/v1/images/?tags=lady'
const getTagLinks = async () => {
  const response = await fetch(tagUrl);
  const data = await response.json();
  const lyst = data.data;
  lyst.forEach((item) => {
    tagLinks.value.push(item);
  });
};

const header = 
  {
    header: tagRoute,
    subHeader: `Images tagged with ${tagRoute}`,
  }

onMounted(() => {
  getTagLinks(tagRoute);
});
</script>
