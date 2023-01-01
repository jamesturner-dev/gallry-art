<template>
  <footer class="mt-5" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <aside class="sectionContain">
      <FooterLinks />
      <FooterNav />
    </aside>
  </footer>
</template>

<script setup>
import FooterNav from "./Footer/FooterNav.vue";
import FooterLinks from "./Footer/FooterLinks.vue";
</script>
