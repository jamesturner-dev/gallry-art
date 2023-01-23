<template>
  <div class="mt-10 space-y-12">
    <ContentHeading :heading="header" />
    <ul role="list"
    class="mx-auto grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-6">
    <li v-for="gallery in theGalls" :key="gallery._id">
      <a :href="gallery.url" class="space-y-4 space-x-2 rounded-md block bg-fuchsia-600 bg-opacity-20 hover:bg-opacity-40 pt-2">
        <img class="h-20 w-20 ml-2 rounded-md lg:h-24 lg:w-24" :src="gallery.img" :alt=gallery.name />

        <div class="bg-fuchsia-600 rounded-md p-2 bg-opacity-25 text-purple-200 hover:text-white">
          <h3 class="titleGallry border-b-2 border-b-fuchsia-400 border-opacity-30">
            <a :href="gallery.url">{{ gallery.name }}</a>
          </h3>
          <p class="tinyText text-purple-200 dark:text-white pr-3 pt-1">{{ gallery.description }}</p>
        </div>

      </a>
    </li>
  </ul>

  </div>
</template>

<script setup>
import ContentHeading from "../shared/ContentHeading.vue";
// import GalleriesLoop from "./GalleriesLoop.vue";
import { ref, onMounted } from "vue";

// const props = defineProps({
//   id: {
//     type: String,
//     required: true,
//   },
// });


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
    console.log(data.data)

    // add the url to the gallery page to data

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
