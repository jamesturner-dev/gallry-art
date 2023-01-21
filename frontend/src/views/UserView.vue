<template>
  <div class="mainFlex">
    <div class="w-full max-w-md space-y-4">
      <section v-if="pageName == 'login'">
        <UserLogin />
      </section>
      <section v-if="pageName == 'register'">
        <UserRegister />
      </section>
      <section v-if="pageName == 'forgot'">
        <ForgotPassword />
      </section>
    </div>
  </div>
</template>

<script>
import UserLogin from "../components/user/UserLogin.vue";
import UserRegister from "../components/user/UserRegister.vue";
import ForgotPassword from "../components/user/ForgotPassword.vue";

export default {
  data: function () {
    return {
      pageName: this.$route.params.name,
      error: null,
    };
  },
  props: ["name"],
  components: { UserLogin, UserRegister, ForgotPassword },
};
</script>
