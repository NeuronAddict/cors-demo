import {type App} from "vue";
import {cookieUserProvider} from "@/core/cookie-auth";
import {userProviderKey} from "@/core/auth";
import {oidcUserProvider} from "@/core/oidc-auth";

export const user = {
    install(app: App) {
        if (import.meta.env.VITE_COOKIE_AUTH === 'true') {
            app.provide(userProviderKey, cookieUserProvider);
        } else {
            app.provide(userProviderKey, oidcUserProvider);
        }
    }
};