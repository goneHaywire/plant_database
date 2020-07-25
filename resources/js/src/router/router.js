import VueRouter from 'vue-router';
import Vue from 'vue';
import NProgress from 'nprogress';

Vue.use(VueRouter)

const routes = [{
        name: 'Home',
        path: '/',
        component: () =>
            import('../views/HomeView.vue')
    },
    {
        name: 'Families',
        path: '/families',
        component: () =>
            import('../views/Families/FamiliesIndex.vue')
    },
    {
        name: 'Families.create',
        path: '/families/create',
        component: () => import('../views/Families/FamiliesCreate.vue')
    },
    {
        name: 'Families.show',
        path: '/families/show',
        component: () => import('../views/Families/FamiliesShow.vue')
    },
    {
        name: 'Genera',
        path: '/genera',
        component: () =>
            import('../views/Genera/GeneraIndex.vue')

    },
    {
        name: 'genera.create',
        path: '/genera/create',
        component: () =>
            import('../views/Genera/GeneraCreate.vue')

    },
    {
        name: 'genera.show',
        path: '/genera/show',
        component: () =>
            import('../views/Genera/GeneraShow.vue')

    },
    {
        name: 'Species',
        path: '/species',
        component: () =>
            import('../views/Species/SpeciesIndex.vue')
    },
    {
        name: 'Species.create',
        path: '/species/create',
        component: () =>
            import('../views/Species/SpeciesCreate.vue')
    },
    {
        name: 'Species.show',
        path: '/species/show',
        component: () =>
            import('../views/Species/SpeciesShow.vue')
    },
    {
        name: 'Albanian',
        path: '/albanian',
        component: () =>
            import('../views/AlbanianIndex.vue')
    },
    {
        name: 'Favourites',
        path: '/favourites',
        component: () =>
            import('../views/FavouritesView.vue')
    },
    {
        name: 'Users',
        path: '/users',
        component: () =>
            import('../views/Users/UsersIndex.vue')
    },
    {
        name: 'Users.create',
        path: '/users/create',
        component: () => import('../views/Users/UsersIndex.vue')
    },
    {
        name: 'Filter',
        path: '/filter',
        component: () =>
            import('../views/FilterView.vue')
    },
    {
        name: 'Filter.form',
        path: '/filter/form',
        component: () => import('../views/FilterForm.vue')
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    // base: process.env.BASE_URL
})

router.beforeEach((routeTo, routeFrom, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => NProgress.done())

export default router;
