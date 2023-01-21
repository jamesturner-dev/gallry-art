<template>
  <div class="theWrapper">
    <div class="w-full max-w-md space-y-10">

      <PageHeader :content="content" />
      

      <form @submit.prevent="" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input id="name" v-model="name" name="name" type="text" autocomplete="name" required=""
              class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              placeholder="Name" />
          </div>
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
          <div>
            <label for="confirm-password" class="sr-only">Password</label>
            <input id="confirm-password" v-model="confirmPassword" name="confirm-password" type="password"
              autocomplete="confirm-password" required=""
              class="formInput focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              placeholder="Confirm Password" />
          </div>
        </div>

        <MemberLink :login=false />

        <button @click="register" type="submit" class="primary w-full" aria-label="Register">
          Register
        </button>

      </form>
    </div>
  </div>
</template>

<script>
import MemberLink from "./MemberLink.vue";
import PageHeader from "../page/PageHeader.vue";


export default {
  data: function () {
    return {
      errors: [],
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
      token: "",
      freeSpotsRemaing: null,
      content: {
        heading: "New User Sign Up",
        subHeading: "Please use this form to create an account.",
      }
    };
  },

  components: { MemberLink, PageHeader },

  methods: {


    async register() {
      if (this.password !== this.confirmPassword) {
        this.errors.push("Passwords do not match");
        return;
      }

      if (this.freeSpotsRemaing <= 0) {
        this.errors.push("No free spots remaining");
        return;
      }

      if (this.email === "" || this.password === "" || this.name === "") {
        this.errors.push("Please fill out all fields");
        return;
      }

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/auth/register",
        requestOptions
      );
      const data = await response.json();
      this.token = data.token;
      console.log(this.token);
      // localStorage.setItem("token", this.token);
      if (this.token) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
