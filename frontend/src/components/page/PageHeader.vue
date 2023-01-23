<template>
  <img class="h-24 mx-auto rounded-full mb-10" :src="avatar" />
  <h3 class="block text-center">{{ heading.subHeader }} </h3>
  <h1 class="pageHeader block text-center bg-gradient-to-r 
    from-yellow-200 to-lime-600
    dark:from-pink-200 dark:to-purple-700 
    bg-clip-text text-transparent">
    {{ heading.header }}
  </h1>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  heading: {
    type: Object,
    required: true,
  },
})
const avatar = ref("https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/7f23edde-534b-4a88-8642-55fc9880e300/public")
</script>
