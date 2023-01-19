<template>
  <section>
    <h4>
      <a href="https://headlin3s.com">Headlin3s News:</a>
    </h4>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href" class="footerLinks">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const categories = [
  { name: "The Media", href: "https://headlin3s.com/categories/Media" },
  { name: "Florida Man", href: "https://headlin3s.com/places/Florida" },
  { name: "Social Media", href: "https://headlin3s.com/categories/Social%20Media" },
  { name: "Health News", href: "https://headlin3s.com/categories/Health" },
];
</script>