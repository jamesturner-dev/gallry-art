<template>
  <section>
    <h4>
      <a href="https://headlin3s.com">Hot Galleries:</a>
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
  { name: "GOP Bots", href: "http://localhost:3000/gallery/63cb3461a2cb24d5d1310790" },
  { name: "Hillary Clinton", href: "http://localhost:3000/gallery/63cd7305a2cb24d5d131092b" },
  { name: "Horror", href: "http://localhost:3000/gallery/63ce9f6da2cb24d5d1310a71" },
  { name: "Mermaids", href: "http://localhost:3000/gallery/63cadcdda2cb24d5d13106b1" },
];
</script>