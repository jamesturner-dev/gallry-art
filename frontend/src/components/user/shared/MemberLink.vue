<template>
  <div class="flex items-center justify-between">
    
    <div class="flex items-center"></div>
    
    <div v-if="!login" class="text-sm">
      <div class="flex items-center justify-between">
        <span class="bg-pink-400 h-3 w-3 rounded-full flex items-center justify-center mr-1">
          <span class="bg-pink-500 h-2 w-2 rounded-full" />
        </span>
        <a href="/user/login" class="primaryText mr-1">Already a Member?</a>
      </div>
    </div>

    <div v-else class="text-sm">
      <div class="flex items-center justify-between">
        <span class="bg-pink-400 h-3 w-3 rounded-full flex items-center justify-center mr-1">
          <span class="bg-pink-500 h-2 w-2 rounded-full" />
        </span>
        <a href="/user/forgot" class="primaryText">Forgot your password?</a>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  login: {
    type: Boolean,
    required: true,
  },
});
</script>
