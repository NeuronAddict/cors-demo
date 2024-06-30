import {type App} from "vue";
import Auth, {userProviderKey} from "@/core/auth";

export const user = {
    install(app: App) {
        app.provide(userProviderKey, Auth);
    }
};