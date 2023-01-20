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
  { name: "James' Resume", href: "https://cv.jamesturner.dev/" },
  { name: "James on Twitter", href: "https://twitter.com/SaltyAp3" },
  { name: "Tweet 'O the Day", href: "https://tweetotheday.com" },
  { name: "Headlin3s", href: "https://headlin3s.com" },
]
</script>