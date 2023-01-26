<template>
  <div class="p-3 pb-0 mb-2">
    <span v-for="tag in tags">
      <span class="tag">
        <a :href="getURL(tag)">
          {{ tag }}
        </a>
      </span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true,
  },
});

const getURL = (id) => {
  return `/tag/${id}`;
};
</script>
