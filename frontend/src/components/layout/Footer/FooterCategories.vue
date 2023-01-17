<template>
  <div class="mt-12 md:mt-0">
    <h3 class="text-sm font-medium text-gray-400">Categories:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href"
          class="px-2 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories =  [
    { name: "Technology", href: "/cat/technology" },
    { name: "News Services", href: "/cat/news" },
    { name: "Online Services", href: "/cat/services" },
    { name: "Podcasts", href: "/cat/podcast" },
  ];
</script>