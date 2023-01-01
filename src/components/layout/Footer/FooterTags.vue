<template>
  <div class="ml-5">
    <h3 class="text-sm font-medium text-gray-400">
      <a href="https://headlin3s.com">Headlin3s News:</a>
    </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href" class="px-2 text-sm">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories = [
  { name: "The Media", href: "https://headlin3s.com/categories/Media" },
  { name: "Florida Man", href: "https://headlin3s.com/places/Florida" },
  { name: "Social Media", href: "https://headlin3s.com/categories/Social%20Media" },
  { name: "Health News", href: "https://headlin3s.com/categories/Health" },
];
</script>