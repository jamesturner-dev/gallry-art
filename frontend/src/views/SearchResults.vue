<template>
  <section>

    <ContentHeading :heading="{
      header: searchTerm,
      subHeader: `${numberOfResults} Search results for ${searchTerm}`
    }" />

    <GalleryLoop :gallery="returnedImages" />

  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import ContentHeading from "../components/shared/ContentHeading.vue";
import GalleryLoop from "../components/galleries/GalleryLoop.vue";

const route = useRoute();
const searchTerm = route.params.searchTerm; // (it is reactive)
const returnedImages = ref([]);


const getSearchedLinks = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      searchTerm: searchTerm,
    }),
  };

  const response = await fetch(
    "http://localhost:5000/api/v1/search",
    requestOptions
  );

  const data = await response.json();

  if (data.count != 0) {
    const _lyst = data.data;
    _lyst.forEach((item) => {
      returnedImages.value.push(item);
    });
  }

};

const getURL = (id) => {
  return `/cat/${id}`;
};



onMounted(() => {
  try {
    getSearchedLinks();
  } catch (error) {
    console.log(error);
  }

});

const numberOfResults = computed(() => {
  return returnedImages.value.length;
});
</script>
