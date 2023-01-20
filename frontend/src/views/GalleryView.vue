<template>
<!-- <ContentHeading :heading="heading" /> -->
  <div class="sm:border-l-4 sm:border-fuchsia-700 sm:dark:border-purple-700 sm:pl-6">
    <h1 
      class="bg-gradient-to-r from-pink-300 to-purple-400 dark:from-yellow-200 dark:to-lime-400 bg-clip-text text-transparent">
      {{ header }} 
    </h1>
    <p class="tinyText">
      {{ subHeader }}
    </p>
  </div>

  <div class="grid place-items-center mt-5">
    <main class="mx-auto max-w-max sm:flex">
      <TheGallery :id="galleryId" />
    </main>
  </div>
  
</template>

<script setup>
import TheGallery from "../components/galleries/TheGallery.vue";
import ContentHeading from "../components/shared/ContentHeading.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute(); // <--- this is the magic line
const galleryId = route.params.name; // (it is reactive)

const header = ref('')
const subHeader = ref('')

const getGallery = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/gallery/${galleryId}`);
    const data = await response.json();
    header.value = data.data.name;
    subHeader.value = data.data.description;

  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {

  await getGallery().then(() => {
    console.log('Get Gallery from Gallery View done');
    console.log(header);
  });
});






</script>
