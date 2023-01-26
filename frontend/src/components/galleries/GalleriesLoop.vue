<template>
  <ul role="list" class="gallGrid sm:grid-cols-4 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-6">
    <li v-for="gallery in galleries" :key="gallery._id">
      <a :href="gallery.url" class="galleryLink">
        <img class="galleryImg lg:h-24 lg:w-24" :src="gallery.img" :alt=gallery.name />
        <div class="galleryBlurb">
          <h3 class="titleGallry">
            <a :href="gallery.url">
              {{ gallery.name }}
            </a>
          </h3>
          <p class="tinyText description">
            {{ gallery.description }}
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  galleries: {
    type: Object,
    required: true,
  },
});
</script>