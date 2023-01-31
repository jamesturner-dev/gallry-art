<template>
  <ul role="list" class="gallGrid sm:grid-cols-4 md:gap-x-4 lg:gap-x-6 lg:gap-y-8 xl:grid-cols-6">
    <li v-for="g in gallery" :key="g._id" class="galleryItem">

      <a @click="showImage(g.url)" class="galleryLink">
        <img class="galleryImg lg:h-24 lg:w-24" :src="g.url" :alt=g.title />
        <h3 class="titleGallry"> {{ g.title }} </h3>
      </a>

      <div class="galleryBlurb">

        <p class="tinyText secondaryText"> {{ g.description }} </p>

        <section class="flex">
          <p v-if="g.publicRating" class="tinyText secondaryText flex-1">
            Rated: {{ g.publicRating }}
          </p>
          <span class="flex pt-1 pr-1">
            <ArrowUpCircleIcon @click="voteUp(g._id)" aria-hidden="true"
              class="flex-1 h-5 w-5 text-purple-400 hover:text-white dark:text-pink-300 dark:hover:text-white" />
            <ArrowDownCircleIcon @click="voteDown(g._id)" aria-hidden="true"
              class="h-5 w-5 text-purple-400 hover:text-white dark:text-pink-300 dark:hover:text-white" />
          </span>
        </section>

      </div>

      <LinkTags :tags="g.tags" />

    </li>
  </ul>
</template>

<script setup>
import { defineProps, ref } from "vue";
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

const votes = ref(0);

const showImage = (url) => {
  swal.fire({
    confirmButtonText: 'Close',
    imageUrl: url,
    imageAlt: "Custom image",
  })
};

const voteUp = (i) => {
  swal.fire({
    icon: 'info',
    title: i,
    text: 'You voted up this image.',
    footer: '<a href="/page/help">Have Questions?</a>'
  }).then(() => {
    vote(true, i)
  })
};

const voteDown = (i) => {
  swal.fire({
    icon: 'info',
    title: i,
    text: 'You voted down this image.',
    footer: '<a href="/page/help">Have Questions?</a>'
  }).then(() => {
    vote(false, i)
  })
};

const vote = async (v, i) => {

  votes.value = votes.value + 1;

  if (votes.value > 6) {
    swal.fire({
      title: "Too Many Votes",
      text: "You have already voted half a dozen times. Please wait a few minutes before voting again.",
      icon: "error",
      confirmButtonText: "Cool",
    });
    return;
  }

  const apiURL = `http://localhost:5000/api/v1/vote`;

  const response = await fetch(apiURL, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      "id": i,
      "vote": v
    }),
  });

  try {
    const data = await response.json();
    const result = data.success;
    swal.fire({
      title: result,
      text: "Vote Recorded",
      icon: "success",
      confirmButtonText: "Cool",
    }).then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    console.log(error);
  }
};





</script>
