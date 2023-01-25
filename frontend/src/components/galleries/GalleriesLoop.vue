<template>
    <ul role="list"
    class="mx-auto grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-6">
    <li v-for="gallery in galleries" :key="gallery._id">
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
</template>

<script setup>
defineProps({
  galleries: {
    type: Object,
    required: true,
  },
});
</script>