<template>
  <div class="mt-10 space-y-12">
    <ContentHeading :heading="header" />
    <GalleriesLoop :galleries="galleries" />
  </div>
</template>

<script setup>
import ContentHeading from "../shared/ContentHeading.vue";
import GalleriesLoop from "./GalleriesLoop.vue";
const galleries = [
  {
    name: 'The Mermaids',
    blurb: "If you're looking for something different, click into the Mermaid Gallery. It's hard to believe they're not real, but thank goodness they're not. ",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/758c2e4b-de48-4bf6-5d7d-93336d8e7d00/public',
  },
  {
    name: 'GOP Candidates',
    blurb: "While there are certainly some benefits to having a robot GOP candidate it can be difficult to connect with a robot on a personal level. ",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/8eb894c3-e946-437d-16f1-3657900c1b00/public',
  },
  {
    name: 'Hot Moms',
    blurb: "Milf's have always been a force to be reckoned with,  take a moment to appreciate their powerful presence in the world today.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/e044af99-df09-4a47-b417-7019bf48ae00/public',
  },
  {
    name: 'Bands Gallery',
    blurb: "Some say AI bands are better because they can create music that is more complex and interesting. However ai bands lack emotion and feeling.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/5f89e6b1-da13-4104-db4b-7ad2c3c4ef00/public',
  },
  {
    name: 'Lady of Liberty',
    blurb: "Best known for her appearances in patriotic films and TV shows Lady Liberty been a staple of American pop culture for decades",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/4343b83c-ddb5-4ab1-ea09-14a774f82f00/public',
  },
  {
    name: 'Donald J Trump',
    blurb: "First appearing on television in the early 80s, featured in numerous cartoons, movies, and TV shows,  catchphrase: Make America great again.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/8cbcc007-6c8d-4337-328f-9e4110879600/public',
  },
  {
    name: 'Wonder Woman',
    blurb: "Synonymous with feminine power, Wonder Woman has always been a champion of truth, justice, and the American way.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/76ffe9ae-06e0-4731-b5cc-8b4c820c6300/public',
  },
  {
    name: 'American Football',
    blurb: "Two teams of eleven players (on each offense and defence), trying to score points by getting the ball into the other team's end zone.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/6730f1d2-6b4f-45b6-3b02-50f0431f3900/public',
  },
  {
    name: 'Karen Sue',
    blurb: "Karens always have their finger on the pulse of what's going on and they are never afraid to voice their busy-body opinions.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/a846bb47-936d-4403-fd05-c2a29620ae00/public',
  },
  {
    name: 'Tom Brady',
    blurb: "Widely regarded as one of the greatest footballers of all time, Tom Brady has been a staple of ball sports for over 20 years.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/e7d5f33a-5552-43bc-c8e9-1ad93394ef00/public',
  },
  {
    name: 'Kat Woman',
    blurb: "Katwoman is sleek and she's stealthy; she will prowl the streets of Gotham Kitty more agile than any other cat.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/897190cb-9ada-4036-7b21-ec0d83e6e100/public',
  },
  {
    name: 'Hillary Clinton',
    blurb: "From her Delete your account tweet to her Texts from Hillary, Hillary is one of the most memed people in history.",
    imageUrl:
      'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/cb1221de-1b65-4c3d-0745-d178aeb24f00/public',
  },
]


const header = 
  {
    header: "The Galleries",
    subHeader: "AI-generated images can be quite surreal and otherworldly. When left to their own devices, algorithms can create some pretty bizarre stuff.But that's part of the fun of AI-generated images - you never quite know what you're going to get.",
  }
</script>