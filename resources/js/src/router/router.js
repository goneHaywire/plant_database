import VueRouter from 'vue-router';

const routes = [{
        name: 'Home',
        path: '/',
        component: () => {
            import('../views/Home.vue')
        }
    },
    {
        name: 'Families',
        path: '/families',
        component: () => {
            import('../views/Families.vue')
        }
    },
    {
        name: 'Genera',
        path: '/genera',
        component: () => {
            import('../views/Genera.vue')
        }
    },
    {
        name: 'Species',
        path: '/species',
        component: () => {
            import('../views/Species.vue')
        }
    },
    {
        name: 'Albanian',
        path: '/albanian',
        component: () => {
            import('../views/Albanian.vue')
        }
    },
    {
        name: 'Favourites',
        path: '/favourites',
        component: () => {
            import('../views/Species.vue')
        }
    },
    {
        name: 'Users',
        path: '/users',
        component: () => {
            import('../views/Species.vue')
        }
    },
    {
        name: 'Filter',
        path: '/filter',
        component: () => {
            import('../views/Species.vue')
        }
    },
]

export default VueRouter(routes);
