import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/business',
        component: () =>
            import ('../views/Business.vue')
    },
    {
        path: '/entertainment',
        component: () =>
            import ('../views/Entertainment.vue')
    },
    {
        path: '/health',
        component: () =>
            import ('../views/Health.vue')
    },
    {
        path: '/science',
        component: () =>
            import ('../views/Science.vue')
    },
    {
        path: '/sports',
        component: () =>
            import ('../views/Sport.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;