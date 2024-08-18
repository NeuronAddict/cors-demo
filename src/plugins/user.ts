import {type App} from "vue";
import {cookieUserProvider, userProviderKey} from "@/core/auth";

export const user = {
    install(app: App) {
        app.provide(userProviderKey, cookieUserProvider);
    }
};