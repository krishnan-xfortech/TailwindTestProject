import { createRouter, createWebHistory } from "vue-router"
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'dashboard',
            component: Dashboard
        },
        {
            path:'/manage',
            name:'manage',
            component: () => import('../views/ManageSubs.vue')
        },
    ]
})

export default router