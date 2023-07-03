//import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '../views/HomeView.vue'

//Vue.useAttrs(Router)

/*export default new Router({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        }
    ]
})*/

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'home',
        component: HomeView
        }
    ]
})

export default router