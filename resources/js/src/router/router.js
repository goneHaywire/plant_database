import VueRouter from "vue-router";
import Vue from "vue";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

import DashboardPage from '../pages/DashboardPage.vue'
import HomeView from '../views/HomeView.vue'
import FamiliesIndex from '../views/Families/FamiliesIndex.vue'
import GeneraIndex from '../views/Genera/GeneraIndex.vue'
import SpeciesIndex from '../views/Species/SpeciesIndex.vue'
import SpeciesForm from '../views/Species/SpeciesForm.vue'
import AlbanianIndex from '../views/AlbanianIndex.vue'
import FavouritesIndex from '../views/FavouritesView.vue'
import LoginPage from '../pages/LoginPage.vue'

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/dashboard",
        component: DashboardPage,
        children: [{
                name: "home",
                path: "/",
                component: HomeView,
                props: true
            },
            {
                name: "families.index",
                path: "families",
                component: FamiliesIndex,
                props: true,
            },
            {
                name: "families.form",
                path: "families/form",
                component: () => import("../views/Families/FamiliesForm.vue"),
                props: true
            },
            {
                name: "families.show",
                path: "families/:id",
                component: () => import("../views/Families/FamiliesShow.vue"),
                props: true
            },
            {
                name: "genera.index",
                path: "genera",
                component: GeneraIndex,
                props: true,
            },
            {
                name: "genera.form",
                path: "genera/form",
                component: () => import("../views/Genera/GeneraForm.vue"),
                props: true
            },
            {
                name: "genera.show",
                path: "genera/:id",
                component: () => import("../views/Genera/GeneraShow.vue"),
                props: true
            },
            {
                name: "species.index",
                path: "species",
                component: SpeciesIndex,
                props: true,
            },
            {
                name: "species.form",
                path: "species/form",
                component: SpeciesForm,
                props: true
            },
            {
                name: "species.show",
                path: "species/:id",
                component: () => import("../views/Species/SpeciesShow.vue"),
                props: true
            },
            {
                name: "albanian.index",
                path: "albanian",
                component: AlbanianIndex,
                props: true
            },
            {
                name: "favourites.index",
                path: "favourites",
                component: FavouritesIndex,
                props: true
            },
            {
                name: "users.index",
                path: "users",
                component: () => import("../views/Users/UsersIndex.vue"),
                props: true
            },
            {
                name: "users.create",
                path: "users/create",
                component: () => import("../views/Users/UsersIndex.vue"),
            },
            {
                name: "maps.index",
                path: "/maps",
                component: () => import('../views/Maps/MapsIndex.vue'),
                props: true
            },
            {
                name: "maps.create",
                path: '/maps/create',
                component: () => import('../views/Maps/MapsCreate.vue'),
                props: true
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
    // base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach(() => NProgress.done());

export default router;
