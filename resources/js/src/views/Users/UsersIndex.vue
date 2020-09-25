<template>
  <div>
    <the-breadcrumbs :paths="[{ name: 'Users', route: 'users.index' }]">
      <!-- TO IMPLEMENT LATER -->
      <!-- <template v-slot:createBtn>
        <router-link
          tag="div"
          :to="{ name: 'users.create' }"
          class="btn btn-success ml-3"
        >
          Create User
        </router-link>
      </template> -->
    </the-breadcrumbs>

    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table
                id="zero_config"
                class="table table-striped table-bordered"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td class="icon-col">{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td class="icon-col">
                      <inline-svg
                        @click="deleteUser(user.id)"
                        v-if="currentUser.id !== user.id"
                        width="25"
                        class="trash-icon icon"
                        height="25"
                        :src="require('../../../../svgs/trash.svg')"
                      ></inline-svg>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
              </table>
            </div>

            <pagination
              v-if="pagination.last_page > 1"
              :pagination="pagination"
              :offset="5"
              @paginate="fetchUsers()"
            ></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from "../../components/Pagination";
import userService from "../../services/UserService";
import Vue from "vue";
import { mapGetters } from "vuex";
import UsersCreateVue from "./UsersCreate.vue";

export default {
  name: "users-index",
  computed: {
    ...mapGetters({
      currentUser: "getUser",
    }),
  },
  methods: {
    fetchUsers() {
      userService
        .fetchUsers()
        .then((resp) => {
          this.users = resp.data.data;
          this.pagination = {
            current_page: resp.data.current_page,
            last_page: resp.data.last_page,
          };
        })
        .catch((err) => this.$helpers.handleError(err, "Cannot fetch users"));
    },
    deleteUser(id) {
      userService
        .deleteUser(id)
        .then((resp) => {
          this.users = this.users.filter((user) => user.id !== resp.data);
        })
        .catch((err) => this.$helpers.handleError(err, "Cannot delete user"));
    },
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },
  beforeRouteEnter: (to, from, next) => {
    userService
      .fetchUsers()
      .then((resp) => {
        to.params.users = resp.data.data;
        to.params.pagination = {
          current_page: resp.data.current_page,
          last_page: resp.data.last_page,
        };
        next();
      })
      .catch((err) =>
        Vue.prototype.$helpers.handleError(err, "Cannot fetch users")
      );
  },
  components: { pagination },
};
</script>

<style></style>
