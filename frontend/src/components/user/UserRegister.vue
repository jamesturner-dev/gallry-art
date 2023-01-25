<template>
  <div class="w-full space-y-10">
    <PageHeader :heading="content" />
    <RegisterForm :freeSpots="freeSpotsRemaing" />
  </div>
</template>

<script setup>
import PageHeader from "../page/PageHeader.vue";
import RegisterForm from "./RegisterForm.vue";

const errors = []
const freeSpotsRemaing = 13
const content = {
  header: "New User Sign Up",
  subHeader: "Please use this form to create an account.",
}
</script>
