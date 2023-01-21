<template>
  <div class="theWrapper">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 theHeading"> Sign in to your account </h2>
        <p class="more"> Or {{ " " }}
          <a href="/user/register" class="font-medium text-emerald-400 hover:text-sky-400">
            sign up today to get started.
          </a>
        </p>
      </div>
      <form @submit.prevent="" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
              class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
              required=""
              class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <RememberMe />
          <MemberLink :login=true />
        </div>

        <div>
          <button @click="login" type="submit" class="primary w-full" aria-label="Login">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MemberLink from './MemberLink.vue';
import RememberMe from './RememberMe.vue';
export default {
  data: function () {
    return {
      errors: [],
      email: "",
      password: "",
      token: "",
      content: {
        heading: "Sign in to your account",
        subHeading: "Please use this form to create an account.",
      }
    };
  },
  props: ["tags"],
  components: { MemberLink, RememberMe },
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
