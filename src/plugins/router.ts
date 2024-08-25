import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import MessagesView from "@/components/MessagesView.vue";
import AuthView from "@/components/AuthView.vue";
import SilentRefreshView from "@/components/SilentRefreshView.vue";
import UnauthView from "@/components/UnauthView.vue";
import ProfileView from "@/components/ProfileView.vue";
import {inject} from "vue";
import LoginView from "@/components/LoginView.vue";
import {userProviderKey} from "@/core/auth";


const routes: Readonly<RouteRecordRaw[]> = [
    {
        name: 'home',
        path: '/',
        component: MessagesView,
        meta: {requiresAuth: true}
    },
    {
        name: 'auth',
        path: '/auth',
        component: AuthView,
        meta: {requiresAuth: true}
    },
    {
        name: 'silentRefresh',
        path: '/silent-refresh',
        component: SilentRefreshView,
        meta: {requiresAuth: true}
    },
    {
        name: 'unauthenticated',
        path: '/unauthenticated',
        component: UnauthView,
        meta: {requiresAuth: true}
    },
    {
        name: 'profile',
        path: '/profile',
        component: ProfileView,
        meta: {requiresAuth: true}
    },
    {
        name: 'login',
        path: '/login',
        component: LoginView,
        meta: {requiresAuth: true}
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {

    const userManager = inject(userProviderKey);

    const hasAuth = await userManager.getUser();
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!hasAuth) {
            return next({
                path: '/login'
            })
        }
    }
    return next();
})