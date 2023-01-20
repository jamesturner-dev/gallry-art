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
  { name: "GOP Clones", href: "http://localhost:3000/gallery/6393dd7c808ecbae77fe9f24" },
  { name: "Ai Women", href: "http://localhost:3000/gallery/63c9b18c9eea8cb2a0e86ad5" },
  { name: "Donald Trump", href: "http://localhost:3000/gallery/63ca95989eea8cb2a0e86b6e" },
  { name: "Mermaids", href: "http://localhost:3000/gallery/6393734ceeb01a6d62e44354" },
];
</script>