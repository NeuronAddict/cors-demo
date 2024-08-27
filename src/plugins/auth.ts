import type {App} from "vue";
import {userProviderKey} from "@/core/auth";
import {cookieUserProvider} from "@/core/cookie-auth";
import {oidcUserProvider} from "@/core/oidc-auth";

export const authConfig = {
    install(app: App) {
        const userProvider = import.meta.env.VITE_COOKIE_AUTH === "true" ? cookieUserProvider : oidcUserProvider;
        app.provide(userProviderKey, userProvider);
        // Save to global properties for access by other plugins
        app.config.globalProperties.$userProvider = userProvider;
    }
};