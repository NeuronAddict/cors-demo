import type {App} from "vue";
import {userProviderKey} from "@/core/auth";
import {cookieUserProvider} from "@/core/cookie-auth";
import {oidcUserProvider} from "@/core/oidc-auth";

export const authConfig = {
    install(app: App) {
        if( import.meta.env.VITECOOKIE_AUTH == "true" ) {
            app.provide(userProviderKey, cookieUserProvider);
        }
        else {
            app.provide(userProviderKey, oidcUserProvider);
        }
    }
};