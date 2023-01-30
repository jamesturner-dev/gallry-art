<template>
  <section>
    <div class="flex sectionContain">
      <div class="flex-1">
        <div class="flex">
          <!-- Leave in-case of logo -->
          <div>
            <a href="/">
              <h1 id="titleText"
                class="bg-gradient-to-r from-lime-200 to-yellow-400 dark:from-pink-200 dark:to-purple-400">
                Gallry.Art
              </h1>
            </a>
            <a class="text-purple-300 dark:text-lime-300 hover:text-white dark:hover:text-white"
              href="https://github.com/jamesturner-dev/gallry-art">
              (<span class="text-xs thinTitle">The Github Repository is Here</span>)
            </a>
          </div>
        </div>
      </div>
      <div>
        <Switch v-model="isDark" :class="isDark ? 'bg-purple-700' : 'bg-pink-400'"
          class="relative inline-flex h-6 w-11 items-center rounded-full">
          <span class="sr-only">Toggle Dark Mode</span>
          <span :class="isDark ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-fuchsia-500 transition" />
        </Switch>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const isDark = ref(useDark());
</script>
