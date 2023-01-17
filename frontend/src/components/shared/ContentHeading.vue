<template>
  <div class="sm:border-l-4 sm:border-fuchsia-700 sm:dark:border-purple-700 sm:pl-6">
    <h1
      class="text-2xl titleText bg-gradient-to-r from-pink-300 to-purple-400 dark:from-yellow-200 dark:to-lime-400 bg-clip-text text-transparent">
      {{ content[0] }}
    </h1>
    <p class="tinyText text-purple-200 dark:text-white">
      {{ content[1] }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>