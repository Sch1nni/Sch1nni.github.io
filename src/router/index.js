import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/default/TheModule.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/pages/home/HomeView.vue'),
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/pages/contact/TheContact.vue'),
                },
                {
                    path: 'info',
                    name: 'info',
                    component: () => import('@/pages/info/InfoView.vue'),
                },
            ],
        },
    ],
})

import { useBaseStore } from "@/stores/main"
router.beforeEach(async (to, from, next) => {
    // console.log('to', to);
    // console.log('from', from);
    next()
    // PINIA ----------------------------------------


})


router.afterEach(async (to, from) => {

    await new Promise((resolve) => setTimeout(resolve, 800)) // simula ritardo
    let st_base = useBaseStore()

    st_base.setCursorEvent()
    st_base.setTargetEvent()
})

export default router
