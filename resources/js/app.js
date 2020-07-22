/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('pagination', require('./components/Pagination.vue').default);

Vue.component('families-index', require('./components/families/index.vue').default);
Vue.component('species-index', require('./components/species/index.vue').default);
Vue.component('genera-index', require('./components/genera/index.vue').default);
Vue.component('albanian-index', require('./components/species/albanian_only.vue').default);
Vue.component('users-index', require('./components/users/index.vue').default);
Vue.component('favourites-index', require('./components/favourites/index.vue').default);
Vue.component('filter-index', require('./components/filter/index.vue').default);

Vue.component('species-show', require('./components/species/show.vue').default);

Vue.component('test', require('./components/test.vue').default);

Vue.component('inline-svg', require('./components/InlineSvg.js').default);

Vue.component('genera-for-family', require('./components/genera_for_family.vue').default);
Vue.component('genera-for-family-table', require('./components/genera_for_family_table.vue').default);
Vue.component('species-for-genera-table', require('./components/species_for_genera_table.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

// var cors = require('cors')
// const puppeteer = require('puppeteer')
//
// app.use(cors())
// app.use(puppeteer)
