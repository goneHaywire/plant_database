<template>
  <div
    class="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark"
  >
    <div class="auth-box bg-dark border-top border-secondary">
      <div class="login-header">
        <img src="images/logo.png" alt="Logo" width="15%" />
        <span class="title"> Herbarium </span>
      </div>
      <div id="loginform">
        <form
          class="form-horizontal m-t-20"
          id="loginform"
          action="index.html"
          @submit.prevent="handleLogin()"
        >
          <div class="row p-b-30">
            <div class="col-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-success text-white"
                    id="basic-addon1"
                  >
                    <i class="ti-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  v-model="email"
                  class="form-control form-control-lg"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-success text-white"
                    id="basic-addon2"
                  >
                    <i class="ti-pencil"></i>
                  </span>
                </div>
                <input
                  type="password"
                  v-model="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row border-top border-secondary">
            <div class="col-12">
              <div class="form-group">
                <div class="p-t-20">
                  <input
                    class="btn btn-success w-100 mt-3"
                    type="submit"
                    value="Login"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AuthService from "../services/AuthService.js";

export default {
  name: "LoginPage",
  data() {
    return {
      email: undefined,
      password: undefined,
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      const user = {};

      AuthService.login(payload)
        .then((data) => {
          const user = {
            access_token: data.data.access_token,
            id: data.data.user.id,
            name: data.data.user.name,
            email: data.data.user.email,
          };
          this.login(user);
          this.$helpers.handleSuccess("Successfully logged in");
        })
        .catch((err) => this.$helpers.handleError(err, "Cannot login"));
    },
  },
};
</script>

<style>
input[type="submit"] {
  font-size: 20px;
}
</style>
