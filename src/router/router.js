import Vue from 'vue';
import Router from 'vue-router';

// import Home from "@/views/";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '',
            // component: () => import('./views/')
        }
    ]
})

export default router