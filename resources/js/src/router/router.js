import VueRouter from "vue-router";
import Vue from "vue";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import AuthService from '../services/AuthService'
import authService from "../services/AuthService";
import FamiliesIndex from '../views/Families/FamiliesIndex.vue'
import GeneraIndex from '../views/Genera/GeneraIndex.vue'
import SpeciesIndex from '../views/Species/SpeciesIndex.vue'
import AlbanianIndex from '../views/AlbanianIndex.vue'
import FavouritesIndex from '../views/FavouritesView.vue'

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: () => import("../pages/LoginPage.vue"),
    },
    {
        path: "/dashboard",
        component: () => import("../pages/DashboardPage.vue"),
        children: [{
                name: "home",
                path: "/",
                component: () => import("../views/HomeView.vue"),
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
                component: () => import("../views/Species/SpeciesForm.vue"),
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
                name: "filter.index",
                path: "filter",
                component: () => import("../views/FilterView.vue"),
            },
            {
                name: "filter.form",
                path: "/filter/form",
                component: () => import("../views/FilterForm.vue"),
            },
            {
                name: "maps.index",
                path: "/maps/",
                component: () => import('../views/Maps/MapsIndex.vue')
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
