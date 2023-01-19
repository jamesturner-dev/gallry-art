<template>
  <div class="sm:border-l-4 sm:border-fuchsia-700 sm:dark:border-purple-700 sm:pl-6">
    <h1 v-if="heading.header"
      class="bg-gradient-to-r from-pink-300 to-purple-400 dark:from-yellow-200 dark:to-lime-400 bg-clip-text text-transparent">
      {{ heading.header }}
    </h1>
    <p class="tinyText">
      {{ heading.subHeader }}
    </p>
  </div>
</template>

<script setup>

const props = defineProps({
  heading: {
    type: Object,
    required: true,
  },
})
</script>