<template>
  <div class="space-y-10">
    <GalleryLoop :gallery="gallery" />
  </div>
</template>

<script setup>
import GalleryLoop from "./GalleryLoop.vue";
import { ref, onMounted } from "vue";

const props = defineProps({
  cat: {
    type: String,
    required: true,
  },
});

const gallery = ref({})

const getGallery = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/images/?category=${props.cat}`);
    const data = await response.json();
    // console.log(data.data)
    gallery.value = data.data;
  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {

  await getGallery().then(() => {
    console.log('done');
  });
});


</script>
