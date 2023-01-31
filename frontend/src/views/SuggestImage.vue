<template>
  
  <PageHeader :heading="header" />

  <form action="https://formkeep.com/f/f56e76731c31"
   accept-charset="UTF-8"
   enctype="multipart/form-data"
   method="POST">
   
    <dl class="max-w-4xl mx-auto mt-10">
      <div class="grid grid-cols-3 gap-1 p-3 hover:bg-pink-100 hover:bg-opacity-10 rounded-md ">
        <dt class="pt-4 text-white">URL:</dt>
        <dd class="flex text-sm sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <input type="text" class="formInput" v-model="imageUrl" />
          </span>
        </dd>
      </div>

      <div class="grid grid-cols-3 gap-1 p-3 hover:bg-pink-100 hover:bg-opacity-10 rounded-md ">
        <dt class="pt-5 text-white">Title:</dt>
        <dd class="pt-3 flex text-xs sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <input type="text" class="formInput" v-model="imageTitle" />
          </span>
        </dd>
      </div>

      <div class="grid grid-cols-3 gap-1 p-3 hover:bg-pink-100 hover:bg-opacity-10 rounded-md ">
        <dt class="pt-5 text-white">Description:</dt>
        <dd class="pt-5 flex text-sm sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <textarea rows="4" cols="50" class="formInput" v-model="imageDescription" />
          </span>
        </dd>
      </div>

      <div class="grid grid-cols-3 gap-1 p-3 hover:bg-pink-100 hover:bg-opacity-10 rounded-md ">
        <dt class="pt-5 text-white">Category:</dt>
        <dd class="pt-3 flex text-sm sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <select id="selected-tab" name="selected-tab" v-model="currentCat"
              class="formInput focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm">
              <option v-for="cat in cats" :key="cat">
                {{ cat }}
              </option>
            </select>
          </span>
        </dd>
      </div>

      <div class="grid grid-cols-3 gap-1 p-3 hover:bg-pink-100 hover:bg-opacity-10 rounded-md ">
        <dt class="pt-4 text-white">Tags:</dt>
        <dd class="flex text-sm sm:col-span-2 sm:mt-0">
          <span class="flex-grow">
            <input type="text" class="formInput" v-model="imageTags" />
          </span>
        </dd>
      </div>
    </dl>

    <div class="flex mx-auto justify-end mb-10 max-w-4xl">
      <button type="submit"
      class="my-5 ml-2 bigButton titleText rainbowButton focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2">
      Suggest a Image for Gallery
    </button>
    </div>

  </form>
</template>

<script setup>
import { ref } from "vue";
import swal from "sweetalert2";
import PageHeader from "../components/page/PageHeader.vue";

const imageTitle = ref("");
const imageDescription = ref("");
const imageUrl = ref("");
const imageTags = ref("");

const header = { 
  header: "Suggest a Image for Gallery",
  subHeader: "Suggest a Image for Gallery",
}

const cats = [
  "cool",
  "hot",
  "art",
  "food",
  "media",
  "sports",
  "travel",
  "social",
  "politics",
  "people",
  "things",
  "other",
];

const currentCat = ref(cats[0]);

const handleSubmit = async () => {
  if (imageTitle.value === undefined || imageTitle.value === "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a Title",
    });
    return;
  }

  if (imageDescription.value === undefined || imageDescription.value === "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a Description",
    });
    return;
  }

  if (imageUrl.value === undefined || imageUrl.value === "") {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a URL",
    });
    return;
  }

  const apiURL = `http://localhost:5000/api/v1/suggested`;
  const tagList = imageTags.value.split(",").map((e) => e.trim());

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: imageTitle.value,
      description: imageDescription.value,
      longUrl: imageUrl.value,
      tags: tagList,
      category: currentCat.value,
    }),
  });

  try {
    const data = await response.json();
    const result = data.success;
    swal.fire({
      title: result,
      text: "Your link has been added to the queue for approval",
      icon: "success",
      confirmButtonText: "Cool",
    }).then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    console.log(error);
  }
};

const fireLogger = () => {
  console.log(`${currentCat.value}`);
};

</script>
