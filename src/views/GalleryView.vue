<template>
  <!-- {{ content }}}
  {{ id }} -->
  <ContentHeading :content="[content.name, content.description]" />
  <div class="grid place-items-center mt-5">
    <main class="mx-auto max-w-max sm:flex">
      <TheGallery :id="id" />
    </main>
  </div>
</template>

<script setup>
import TheGallery from "../components/galleries/TheGallery.vue";
import ContentHeading from "../components/shared/ContentHeading.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import PocketBase from 'pocketbase';

const route = useRoute();
const pb = new PocketBase('http://127.0.0.1:8090');
const content = ref({})
const id = ref('')

const getGallery = async () => {
  // yes this the way it works confirmed by @pocketbase on twitter
  // https://twitter.com/JamesTurnerDev/status/1609605777848778753
  const galleryInfo = await pb.collection("gallry").getFirstListItem(`name="${route.params.name}"`);
  content.value = galleryInfo;
  id.value = galleryInfo.collectionId;
  console.log(content.value);
}

onMounted(async () => {
  await getGallery().then(() => {
    console.log('done');
  });
});

</script>
