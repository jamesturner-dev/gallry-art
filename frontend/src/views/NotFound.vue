<template>
  <div class="py-20 px-5 grid place-items-center">
    <main class="mx-auto max-w-max sm:flex">
      <p class="responseCode"> 404 </p>
      <div class="ml-5">
        <ContentHeading :heading="header" />
        <BigButtons />
      </div>
    </main>
  </div>
</template>

<script setup>
import BigButtons from "../components/shared/BigButtons.vue";
import ContentHeading from "../components/shared/ContentHeading.vue";

const header = 
  {
    header: "Page not found",
    subHeader: "Please check the URL in the address bar and try again.",
  }
</script>
