/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
import router from "./src/router/router.js";
import store from "./src/store/store.js";
import apiClient from "./src/services/Api.js";
import authService from "./src/services/AuthService.js";
import InlineSvg from 'vue-inline-svg';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw/dist/leaflet.draw-src.css';

import helpers from './src/use/helpers.js'

const plugin = {
    install() {
        Vue.helpers = helpers
        Vue.prototype.$helpers = helpers
    }
}

window.Vue = require("vue");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./src/pages', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.use(plugin)
Vue.component("AppPage", require("./src/pages/AppPage.vue").default);
Vue.component(
    "TheBreadcrumbs",
    require("./src/components/TheBreadcrumbs.vue").default
);
Vue.component('BaseButton', require('./src/components/BaseButton.vue').default);
Vue.component('AlertContainer', require('./src/components/AlertContainer.vue').default)
// Vue.component('InlineSvg', require('./src/components/InlineSvg.js').default)
Vue.component('inline-svg', InlineSvg);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
    store,
    async created() {
        const userData = JSON.parse(localStorage.getItem("user"));

        if (userData) {
            // console.log("ka ne storage");
            await authService
                .verifyToken(userData.access_token)
                .then(data => {
                    this.$store.dispatch("login", userData);
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        this.$helpers.handleError(error, 'Invalid token, logging out ')
                        this.$store.dispatch("logout");
                    }
                });
        } else {
            router.push("/login");
        }

        // console.log('u vu kushti')
        apiClient.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch("logout");
                    this.$helpers.handleError(error, 'Invalid token, logging out')
                    return Promise.reject(error);
                }
            }
        );
    }
});
