import VueRouter from "vue-router";
import Vue from "vue";
import NProgress from "nprogress";
Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "Login",
        component: () => import("../pages/LoginPage.vue")
    },
    {
        path: "/dashboard",
        component: () => import("../pages/DashboardPage.vue"),
        children: [{
                name: "home",
                path: "/",
                component: () => import("../views/HomeView.vue")
            },
            {
                name: "families",
                path: "families",
                component: () => import("../views/Families/FamiliesIndex.vue")
            },
            {
                name: "families.create",
                path: "families/create",
                component: () => import("../views/Families/FamiliesCreate.vue")
            },
            {
                name: "families.show",
                path: "families/show",
                component: () => import("../views/Families/FamiliesShow.vue")
            },
            {
                name: "genera",
                path: "genera",
                component: () => import("../views/Genera/GeneraIndex.vue")
            },
            {
                name: "genera.create",
                path: "genera/create",
                component: () => import("../views/Genera/GeneraCreate.vue")
            },
            {
                name: "genera.show",
                path: "genera/show",
                component: () => import("../views/Genera/GeneraShow.vue")
            },
            {
                name: "species",
                path: "species",
                component: () => import("../views/Species/SpeciesIndex.vue")
            },
            {
                name: "species.create",
                path: "species/create",
                component: () => import("../views/Species/SpeciesCreate.vue")
            },
            {
                name: "species.show",
                path: "species/show",
                component: () => import("../views/Species/SpeciesShow.vue")
            },
            {
                name: "albanian",
                path: "albanian",
                component: () => import("../views/AlbanianIndex.vue")
            },
            {
                name: "favourites",
                path: "favourites",
                component: () => import("../views/FavouritesView.vue")
            },
            {
                name: "users",
                path: "users",
                component: () => import("../views/Users/UsersIndex.vue")
            },
            {
                name: "users.create",
                path: "users/create",
                component: () => import("../views/Users/UsersIndex.vue")
            },
            {
                name: "filter",
                path: "filter",
                component: () => import("../views/FilterView.vue")
            },
            {
                name: "filter.form",
                path: "/filter/form",
                component: () => import("../views/FilterForm.vue")
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
    // base: process.env.BASE_URL
});

router.beforeEach((routeTo, routeFrom, next) => {
    NProgress.start();
    next();
});
router.afterEach(() => NProgress.done());

export default router;
