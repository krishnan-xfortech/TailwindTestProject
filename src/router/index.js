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
        {
            path:'/faq-page',
            name:'faq-page',
            component: () => import('../views/FaqView.vue')
        },
        {
            path:'/settings-page',
            name:'settings-page',
            component: () => import('../views/SettingsView.vue')
        },
    ]
})

export default router