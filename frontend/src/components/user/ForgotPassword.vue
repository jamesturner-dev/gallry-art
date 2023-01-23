<template>
  <div class="flex min-h-full items-center justify-center px-5">
    <div class="w-full max-w-md space-y-5">

      <h1 class="text-pink-500">Forgot your password?</h1>
      <p class="text-white">
        Enter your email to reset your password or
        <a href="/user/register" class="primaryText">
          sign up if you are a new user.
        </a>
      </p>

      <form @submit.prevent="" class="mt-8 space-y-3">
        <div class="-space-y-px rounded-md shadow-sm">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required=""
            class="formInput focus:border-pink-500"
            placeholder="Email address" />
        </div>
        <button @click="login" type="submit" class="mt-2 bigButton titleText button-85 focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2" aria-label="Sign In">
          Sign in
        </button>
      </form>

    </div>
  </div>
</template>

<script>
// export default {
//   data: function () {
//     return {
//       errors: [],
//       email: "",
//       password: "",
//       token: "",
//     };
//   },

//   methods: {
//     async login() {
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: this.email,
//           password: this.password,
//         }),
//       };

//       const response = await fetch(
//         "http://localhost:5000/api/v1/auth/forgotpassword",
//         requestOptions
//       );

//       const data = await response.json();
//       this.token = data.token;
//       console.log(this.token);
//       // localStorage.setItem("token", this.token);
//       if (this.token) {
//         this.$router.push({ name: "home" });
//       }
//     },
//   },
// };
</script>
