<template>
  <div class="relative overflow-hidden py-5">
    <PageHeader :heading="header" />
    <HelpQuestions />
  </div>
</template>

<script setup>
import HelpQuestions from './HelpQuestions.vue';
import PageHeader from './PageHeader.vue';

const header = 
  {
    header: "What's This Then?",
    subHeader: "Gallry.Art is a free image gallery based on Node and Vue.",
  }
</script>

