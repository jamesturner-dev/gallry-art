<template>
  <ul role="list" class="gallGrid sm:grid-cols-4 md:gap-x-4 lg:gap-x-6 lg:gap-y-10 xl:grid-cols-6">
    <li v-for="g in gallery" :key="g._id" class="galleryItem">

      <a @click="showImage(g.url)" class="galleryLink">
        <img class="galleryImg lg:h-24 lg:w-24" :src="g.url" :alt=g.title />

        <h3 class="titleGallry">
          {{ g.title }}
        </h3>
      </a>

      <div class="galleryBlurb">
        
   
          <p class="tinyText secondaryText">
          {{ g.description }}
        </p>

        <section class="flex">
          <p v-if="g.publicRating" class="tinyText secondaryText flex-1">
          Rated: {{ g.publicRating }}
        </p>
      

        <span class="flex">
          <ArrowUpCircleIcon @click="voteUp" class="flex-1 h-5 w-5" aria-hidden="true" />
          <ArrowDownCircleIcon  @click="voteDown" class="h-5 w-5" aria-hidden="true" />
        </span>  
        </section>
        

      </div>
      <LinkTags :tags="g.tags" />

    </li>
  </ul>
</template>

<script setup>
import swal from "sweetalert2";
import LinkTags from "../shared/TheTags.vue";

import { ArrowUpCircleIcon } from "@heroicons/vue/24/outline";
import { ArrowDownCircleIcon } from "@heroicons/vue/24/outline";

defineProps({
  gallery: {
    type: Object,
    required: true,
  },
});

const showImage = (url) => {
  swal.fire({
    confirmButtonText: 'Close',
    imageUrl: url,
    imageAlt: "Custom image",
  });
};

const voteUp = (url) => {
  swal.fire({
  icon: 'info',
  title: 'Thanks for voting!',
  text: 'You voted up this image.',
  footer: '<a href="/page/help">Have Questions?</a>'
})
};

const voteDown = (url) => {
  swal.fire({
  icon: 'info',
  title: 'Thanks for voting!',
  text: 'You voted down this image.',
  footer: '<a href="/page/help">Have Questions?</a>'
})
};


</script>
