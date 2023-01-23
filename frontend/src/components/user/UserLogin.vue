<template>

    <div class="w-full space-y-8">

      <PageHeader :heading="content" />

      <form @submit.prevent="" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
              class="formInput focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
              placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
              required=""
              class="formInput focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <RememberMe />
          <MemberLink :login=true />
        </div>

        <div>
          <button @click="login" type="submit" 
          class="bigButton titleText button-85 focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2" aria-label="Login">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>

</template>

<script>
import MemberLink from './MemberLink.vue';
import RememberMe from './RememberMe.vue';
import PageHeader from "../page/PageHeader.vue";

export default {
  data: function () {
    return {
      errors: [],
      email: "",
      password: "",
      token: "",
      content: {
        header: "Sign in to your account",
        subHeader: "Please use this form to create an account.",
      }
    };
  },
 
  components: { MemberLink, RememberMe, PageHeader },
  mounted() { },
  methods: {
    async login() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/auth/login",
        requestOptions
      );
      const data = await response.json();
      this.token = data.token;

      if (this.token) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
