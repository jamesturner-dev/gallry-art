<template>
  <ul role="list" class="gallGrid sm:grid-cols-4 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-6">
    <li v-for="g in gallery" :key="g._id">
      <a @click="showImage(g.url)" class="galleryLink">
        <img class="galleryImg lg:h-24 lg:w-24" :src="g.url" :alt=g.title />
        <div class="galleryBlurb">
          <h3 class="titleGallry">
            {{ g.title }}
          </h3>
          <p class="tinyText secondaryText">
            {{ g.description }}
          </p>
        </div>
        <LinkTags :tags="g.tags" />
      </a>
    </li>
  </ul>
</template>

<script setup>
import swal from "sweetalert2";
import LinkTags from "../shared/TheTags.vue";
defineProps({
  gallery: {
    type: Object,
    required: true,
  },
});

const showImage = (url) => {
  swal.fire({
    
    confirmButtonText: 'Close',
    imageUrl: url,
    imageAlt: "Custom image",
  });
};
</script>
