<template>
  <ul role="list" class="gallGrid sm:grid-cols-4 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-6">
    <li v-for="g in gallery" :key="g._id">
      <a href="#" class="space-y-4 space-x-2 rounded-md block  pt-2">
        <img class="h-20 w-20 ml-2 rounded-md lg:h-24 lg:w-24" :src="g.url" :alt=g.title />
        <div
          class="bg-fuchsia-600 dark:bg-purple-600 rounded-md p-2 bg-opacity-25 dark:bg-opacity-25 text-purple-200 hover:text-white">
          <h3 class="titleGallry border-b-2 border-b-fuchsia-400 border-opacity-30">
            {{ g.title }}
          </h3>
          <p class="tinyText secondaryText">
            {{ g.description }}
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  gallery: {
    type: Object,
    required: true,
  },
});
</script>