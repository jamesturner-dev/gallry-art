<template>
  <img class="h-28 mx-auto"
    src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/38e6afbc-8036-4227-a33e-81ad5db8d100/public" />
  <h1>
    <span class="block text-center text-lg font-semibold text-purple-700">
      {{ content[0] }}
    </span>
    <span class="mb-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-700">
      {{ content[1] }}
    </span>
  </h1>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>
