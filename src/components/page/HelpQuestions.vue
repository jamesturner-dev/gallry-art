<template>
  <div class="w-full">
    <div class="mx-auto w-full max-w-lg rounded-2xl mt-10 p-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Can I get this code?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            Yes, you can get the code for this site at
            <a class="text-purple-700" href="https://github.com/jamesturner-dev/cb">
              the github repository.</a> If you just want a directory of your own you can
            <a class="text-purple-700" href="http://localhost:5173/user/register">
              a free account</a> and get started right away.
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Do you offer technical support?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5"> Sure. I do consulting.
            You can
            <a href="https://commerce.coinbase.com/checkout/5699e4ab-924d-4ad5-affb-daf2e64afd8c"
              class="text-purple-700">click here</a> to book a session with me. I can help you with your
            project, or just answer questions about the code.
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>What are Directories?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            Directories are a way to organize your links. You can create a directory for
            your favorite websites, or for your favorite topics. You can also create
            directories for your friends and family. You can even create a directory for
            your favorite links on cb.link.
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Is cb.link Finished?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            No. I am still working on it. I am adding new features all the time. If you would like to see a new feature,
            or have a suggestion, please let me know. If you would like to help out
            <a class="text-purple-500" href="https://github.com/jamesturner-dev/cb">
            grab a copy of the source</a> and get hacking.
          </p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
// lets put these questions and answers in an object instead of inline as time permits
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const help = [
  {
    question: "What is your refund policy?",
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  },
  {
    question: "Do you offer technical support?",
    answer: "Did you try turning it off and back on again?"
  }
]; 
</script>
