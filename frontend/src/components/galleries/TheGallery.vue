<template>
  <section>
    <GalleryLoop :gallery="gallery" />
  </section>
</template>

<script setup>
import GalleryLoop from "./GalleryLoop.vue";
import { ref, onMounted } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const gallery = ref({})

const getGallery = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/gallery/${props.id}/images`);
    const data = await response.json();
    gallery.value = data.data;
  } catch (err) {
    console.log(err);
  }
}

onMounted(async () => {
  await getGallery().then(() => {
    console.log('getting the gallery...');
  });
});

</script>
