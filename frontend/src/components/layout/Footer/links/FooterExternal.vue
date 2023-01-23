<template>
  <div class="mt-12 md:mt-0">
    <h4>External:</h4>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in external" :key="item.name">
        <a :href="item.href" class="footerLinks">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const external = [
  { name: "James' Resume", href: "https://jamesturner.dev/resume" },
  { name: "James on Twitter", href: "https://twitter.com/JamesTurnerDev" },
  { name: "Linkz.Network", href: "https://linkz.network" },
  { name: "Headlin3s", href: "https://headlin3s.com" },
]
</script>