import VueRouter from "vue-router";
import Vue from "vue";
import NProgress from "nprogress";
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: "families.index",
                path: "families",
                component: FamiliesIndex,
                meta: {
                    requiresAuth: true
                },
                props: true,
            },
            {
                name: "families.create",
                path: "families/create",
                component: () => import("../views/Families/FamiliesCreate.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: "families.show",
                path: "families/:id",
                component: () => import("../views/Families/FamiliesShow.vue"),
                meta: {
                    requiresAuth: true
                },
                props: true
            },
            {
                name: "genera.index",
                path: "genera",
                component: GeneraIndex,
                meta: {
                    requiresAuth: true
                },
                props: true,
            },
            {
                name: "genera.create",
                path: "genera/create",
                component: () => import("../views/Genera/GeneraCreate.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: "genera.show",
                path: "genera/:id",
                component: () => import("../views/Genera/GeneraShow.vue"),
                meta: {
                    requiresAuth: true
                },
                props: true
            },
            {
                name: "species.index",
                path: "species",
                component: SpeciesIndex,
                meta: {
                    requiresAuth: true
                },
                props: true,
            },
            {
                name: "species.create",
                path: "species/create",
                component: () => import("../views/Species/SpeciesCreate.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: "species.show",
                path: "species/:id",
                component: () => import("../views/Species/SpeciesShow.vue"),
                meta: {
                    requiresAuth: true
                },
                props: true
            },
            {
                name: "albanian.index",
                path: "albanian",
                component: AlbanianIndex,
                meta: {
                    requiresAuth: true
                },
                props: true
            },
            {
                name: "favourites.index",
                path: "favourites",
                component: FavouritesIndex,
                meta: {
                    requiresAuth: true
                },
                props: true
            },
            {
                name: "users.index",
                path: "users",
                component: () => import("../views/Users/UsersIndex.vue"),
                meta: {
                    requiresAuth: true
                },
                props: true
            },
            {
                name: "users.create",
                path: "users/create",
                component: () => import("../views/Users/UsersIndex.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: "filter.index",
                path: "filter",
                component: () => import("../views/FilterView.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: "filter.form",
                path: "/filter/form",
                component: () => import("../views/FilterForm.vue"),
                meta: {
                    requiresAuth: true
                }
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

    // const loggedIn = localStorage.getItem('user')

    // if (!loggedIn) {
    //     next('/login')
    // }

    // if (to.meta.requiresAuth) {
    //     const userData = localStorage.getItem('user');
    //     authService.verifyToken(userData.access_token)
    //         .then(data => console.log(data))
    // } else {
    //     if (!to.meta.requiresAuth)
    //         next()
    //     next('/login')
    // }
    // const loggedIn = localStorage.getItem('user');
    // console.log(loggedIn)

    // console.log(to)

    // if (!loggedIn)
    //     next({
    //         name: 'login'
    //     })
    // else {
    //     if (to.matched.some(route => route.meta.requiresAuth)) {
    //         authService.verifyToken()
    //             .then(data => console.log(data))
    //     } else {
    //         next()
    // }
    // }
    // console.log({
    //     auth: loggedIn
    // })
    // if (to.matched.some(route => route.meta.requiresAuth)) {
    //     if (!loggedIn)
    //         next({
    //             name: 'login'
    //         })
    //     else
    //         next()
    // }
    next();
});
router.afterEach(() => NProgress.done());

export default router;
