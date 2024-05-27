import {createMemoryHistory, createRouter} from 'vue-router'
import MessagesView from "@/components/MessagesView.vue";


const routes = [
    {path: '/', component: MessagesView},
    // { path: '/profile', component: ProfileView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})