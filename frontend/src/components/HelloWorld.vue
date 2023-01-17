<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1
    class="bg-gradient-to-r from-green-600 to-sky-400 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
    {{ msg }}
  </h1>

  <p class="mt-3 text-gray-600 space-x-4 font-semibold">Full Stack = Node . Express . MongoDb . Vue 3</p>

  <p class="mt-4 space-x-4">
    <a href="tel:+1-850-270-3180" class="text-emerald-500 underline transition-all duration-200 ease-in-out hover:no-underline
      hover:bg-gradient-to-r hover:from-green-600 hover:to-sky-400 p-2 hover:text-white rounded-md">
      1.850.270.3180
    </a>
    &nbsp; &nbsp; .
    <a href="mailto:james@jamesturner.dev" class="text-emerald-500 underline transition-all duration-200 ease-in-out hover:no-underline
      hover:bg-gradient-to-r hover:from-green-600 hover:to-sky-400 p-2 hover:text-white rounded-md"
      target="_blank">james@jamesturner.dev</a>
  </p>

  <a href="https://twitter.com/JamesTurnerDev">
    <button type="button" class="my-10 rounded bg-gray-200 px-4 py-2 transition-all hover:no-underline
          hover:bg-gradient-to-r hover:from-green-600 hover:to-sky-400 p-2 hover:text-white">
      You Contact Me Here
    </button>
  </a>

  <a href="https://github.com/jamesturner-dev/cb">
    <button type="button" class="m-10 rounded bg-gray-200 px-4 py-2 transition-all hover:no-underline
              hover:bg-gradient-to-r hover:from-green-600 hover:to-sky-400 p-2 hover:text-white">
      What I am Working On
    </button>
  </a>

</template>
