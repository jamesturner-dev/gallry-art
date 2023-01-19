<template>
  <section class="pageWrapper">
    <div v-if="pageRoute == 'help'">
      <HelpPage />
    </div>
    <div v-if="pageRoute == 'about'">
      <AboutPage />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from "../components/page/AboutPage.vue";
import HelpPage from "../components/page/HelpPage.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
