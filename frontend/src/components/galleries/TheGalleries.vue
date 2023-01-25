<template>
  <div class="mt-10 space-y-12">
    <ContentHeading :heading="header" />
    <GalleriesLoop :galleries="theGalls" />
  </div>
</template>

<script setup>
import ContentHeading from "../shared/ContentHeading.vue";
import GalleriesLoop from "./GalleriesLoop.vue";
import { ref, onMounted } from "vue";

const header = 
  {
    header: "The Galleries",
    subHeader: "AI-generated images can be quite surreal and otherworldly. When left to their own devices, algorithms can create some pretty bizarre stuff.But that's part of the fun of AI-generated images - you never quite know what you're going to get.",
  }

const theGalls = ref({})

const gettheGalls = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/gallery`);
    const data = await response.json();
    data.data.forEach(e => {
      e.url = `/gallery/${e._id}`
    });
    theGalls.value = data.data;
  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {
  await gettheGalls().then(() => {
    console.log('done');
  });
});

</script>
