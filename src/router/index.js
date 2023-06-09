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
        {
            path:'/search-page',
            name:'search-page',
            component: () => import('../views/SearchView.vue')
        },
        {
            path:'/blog-page',
            name:'blog-page',
            component: () => import('../views/BlogView.vue')
        },
    ]
})

export default router