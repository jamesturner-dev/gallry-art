<template>
  <div class="space-y-10">

    <!-- <ContentHeading :content="galInfo" /> -->
    <GalleryLoop :gallery="gallery" />
  </div>
</template>


<script setup>
// import { ref, onMounted } from "vue";
// import { useRoute } from "vue-router";
// //
import GalleryLoop from "./GalleryLoop.vue";
// import PocketBase from 'pocketbase';
// import ContentHeading from "../shared/ContentHeading.vue";



// const route = useRoute();
// const galleryName = route.params.name;


// const pb = new PocketBase('http://127.0.0.1:8090');


// const galleryInfo = ref(await pb.collection("gallry").getFirstListItem(`name="${galleryName}"`));

// galInfo = [
//   galleryInfo.value.name,
//   galleryInfo.value.description,
// ];



const gallery = [
  {
    name: 'Ronny Raygun',
    blurb: "In the 80s, Ronald Reagan was a popular president, and his image was used in many films and TV shows.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/1.webp',
  },
  {
    name: 'GOP Candidates',
    blurb: "While there are certainly some benefits to having a robot GOP candidate it can be difficult to connect with a robot. ",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/10.webp',
  },
  {
    name: 'Andy Griffith?',
    blurb: "President Andy Griffith? While it may seem like a strange idea, it is not as far fetched as you might think.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/11.webp',
  },
  {
    name: 'Up Close GOP',
    blurb: "Some say AI is the future, but what about the present? This is a close up of a GOP candidate.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/12.webp',
  },
  {
    name: 'The Bush Twins',
    blurb: "The Bush twins were a popular duo in the 80s and 90s. They were known for their good looks and their love of the outdoors.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/2.webp',
  },
  {
    name: 'George W',
    blurb: "We have a saying in Texas , maybe in Tennesee too Fool me once, shame on... you, fool me twice won't get fooled again.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/3.webp',
  },
  {
    name: 'One Term Bush',
    blurb: "Read my lips - no second term.  Bush Sr. was a one term president and he was not happy about it. Not at all. Nare.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/4.webp',
  },
  {
    name: 'American Archetype',
    blurb: "The Gipper is a symbol of the American spirit. A symbol of the American dream and the American way of life.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/5.webp',
  },
  {
    name: 'Romney Regan',
    blurb: "The 2012 GOP nominiee, Mitt Romney, is often compared to Ronald Reagan. He was no Regan.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/6.webp',
  },
  {
    name: 'GOP Nominiee',
    blurb: "The GOP standard bearer often share a similar look. They are all white, male, and have a similar haircut.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/7.webp',
  },
  {
    name: 'Rondal Ramgan',
    blurb: "Rondald Ragman was a popular president, and his image was used in many films and TV shows.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/8.webp',
  },
  {
    name: 'Ragam',
    blurb: "Ragam was a movie start in the fifties and a politician in the eighties. He was a popular dinner guest.",
    imageUrl:
      'https://storage.googleapis.com/vimage_images/gop-pres-images-webp/9.webp',
  },
]

</script>