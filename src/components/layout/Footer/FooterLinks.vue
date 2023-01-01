<template>
  <div class="grid grid-cols-2 gap-8 xl:col-span-4 pb-10">
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <FooterTags />
      <FooterCategories />
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <FooterInternal />
      <FooterExternal />
    </div>
  </div>
</template>

<script setup>
import FooterTags from "./FooterTags.vue";
import FooterCategories from "./FooterCategories.vue";
import FooterInternal from "./FooterInternal.vue";
import FooterExternal from "./FooterExternal.vue";
</script>
