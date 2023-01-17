<script setup>
import PageHeader from './PageHeader.vue';
const content = [
  "About Salty Ape's cb.link",
  "What is this all about then?"
];
</script>

<template>
  <div class="relative overflow-hidden p-5">
    <div class="mx-auto max-w-prose text-lg">

      <PageHeader :content="content" />

      <p class="mt-10 text-xl leading-8 text-gray-500">
        Not too long ago I got fired from my job. <span class="text-purple-700">
          Without cause</span>. The worst part about it was that I could not continue
        working on the project I was the sole developer on. You know, it was
        <span class="text-purple-700">my</span> project.
      </p>
      <p class="text-gray-600 font-bold mt-10 text-xl">
        Not legally of course, so I had to let it go.
      </p>
      <p class="text-gray-500 dark:gray-300 mt-5">
        I had a couple of projects I had started before that gig, one being
        <a class="text-purple-700" href="https://headlin3s.com">
          Headlin3s </a> but I wanted to create something new and fresh - the
        way I wanted to do it. I also wanted to create something that I could
        get posted before my severance ran out as a resume piece.
      </p>
      <p class="text-gray-500 mt-5">
        I decided to create a system to track all the links from my various
        web projects. I decided to go ahead and implement a short url type of
        scheme, and then I thought why not create some directory type views of
        the links?
      </p>
      <h2 class="text-gray-600 font-bold mb-5 mt-10 text-xl">
        It would be cooler if it was multi-user
      </h2>
      <p class="text-gray-500">
        It still felt a little flimsy so I thought - why not make it multi
        user so other people could use it to create their own directory and
        manage their own links?
      </p>
      <p class="text-gray-500 my-5">
        If nothing else it does show how I approach a full stack project. You can
        <a class="text-purple-700" href="https://github.com/jamesturner-dev/cb">
          read more about it here as well as check out the code itself
        </a>.
      </p>

    </div>
  </div>
</template>
