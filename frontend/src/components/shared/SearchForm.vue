<template>
  <section id="searchContainer">
    <div id="searchBox">
      <div class="flex flex-1 justify-between">
        <div class="flex flex-1">

          <form class="flex w-full md:ml-0" @submit.prevent="siteSearch">
            <label for="search-field" class="sr-only">Search</label>
            <div class="ml-8 searchInput relative w-full text-pink-400">

              <div class="searchIcon">
                <MagnifyingGlassCircleIcon class="h-5 w-5 flex-shrink-0 cursor-pointer" aria-hidden="true" />
              </div>

              <input name="desktop-search-field" id="searchField"
                class=" h-full w-full py-2 pl-8 pr-3 focus:outline-none focus:ring-0 sm:block"
                placeholder="Search Gallry.art" v-model="searchTerm" @keyup.enter="siteSearch" type="search" />
            </div>
          </form>

        </div>
        
        <div class="mx-5 flex items-center">
          <button type="submit"
            class="rounded-full bg-pink-500 dark:bg-purple-400 p-1 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            <ChevronDoubleRightIcon @click="siteSearch" class="h-3 w-3" aria-hidden="true" />
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/20/solid";
const searchTerm = ref("");

const siteSearch = () => {
  if (searchTerm) {
    window.location.href = `/search/${searchTerm.value}`;
  }
};
</script>
