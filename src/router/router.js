import MainOne from "@/components/MainOne";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import ShopWrapper from "@/components/ShopWrapper";

const routes =[
    {
        path: '/',
        component: MainOne,
    },
    {
        path: '/shop',
        component: ShopWrapper,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active-link',
})

export default router;