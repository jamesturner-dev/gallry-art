<template>
  <div class="mt-12 md:mt-0">
    <h4>Categories:</h4>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href" class="footerLinks">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories =  [
    { name: "People", href: "/cat/people" },
    { name: "Politics", href: "/cat/politics" },
    { name: "Merica", href: "/tag/merica" },
    { name: "Lady", href: "/tag/lady" },
  ];
</script>