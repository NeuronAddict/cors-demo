import {type App} from "vue";
import config from "@/services/axios-config";
import {
    axiosInstanceProviderKey,
    loginServiceProviderKey,
    logsServiceProviderKey,
    messageServiceProviderKey,
    profileServiceProviderKey
} from "@/core/service-provider";
import {loginService, logService, messageService, profileService} from "@/services/service";
import {type UserProvider, userProviderKey} from "@/core/auth";

export const service = {
    install(app: App) {
        const userProvider: UserProvider = app.config.globalProperties[userProviderKey];
        const axiosInstance = config.newAxios((import.meta.env.VITE_COOKIE_AUTH === "true"), userProvider);
        app.provide(axiosInstanceProviderKey, axiosInstance);
        app.provide(messageServiceProviderKey, messageService(axiosInstance));
        app.provide(logsServiceProviderKey, logService(axiosInstance));
        app.provide(loginServiceProviderKey, loginService(axiosInstance));
        app.provide(profileServiceProviderKey, profileService(axiosInstance));
    }
};