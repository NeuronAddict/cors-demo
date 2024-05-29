import {createMemoryHistory, createRouter} from 'vue-router'
import MessagesView from "@/components/MessagesView.vue";
import AuthView from "@/components/AuthView.vue";
import SilentRefreshView from "@/components/SilentRefreshView.vue";


const routes = [
    {
        name: 'home',
        path: '/',
        component: MessagesView
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
    }
    // { path: '/profile', component: ProfileView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})