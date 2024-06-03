import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import MessagesView from "@/components/MessagesView.vue";
import AuthView from "@/components/AuthView.vue";
import SilentRefreshView from "@/components/SilentRefreshView.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import UnauthView from "@/components/UnauthView.vue";
import Auth from "@/core/auth";


const routes: Readonly<RouteRecordRaw[]> = [
    {
        name: 'home',
        path: '/',
        component: MessagesView,
        meta: {requiresAuth: true}
    },
    {
        name: 'hello',
        path: '/hello',
        component: HelloWorld
    },
    {
        name: 'auth',
        path: '/auth',
        component: AuthView
    },
    {
        name: 'silentRefresh',
        path: '/silent-refresh',
        component: SilentRefreshView
    },
    {
        name: 'unauthenticated',
        path: '/unauthenticated',
        component: UnauthView
    }
    // { path: '/profile', component: ProfileView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const hasAuth = await Auth.getUser();
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!hasAuth) {
            return next({
                path: '/unauthenticated'
            })
        }
    }
    return next();
})