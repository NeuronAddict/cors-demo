import type {App} from "vue";
import config from "@/services/axios-config";
import {
    axiosInstanceProviderKey,
    loginServiceProviderKey,
    logsServiceProviderKey,
    messageServiceProviderKey
} from "@/core/service-provider";
import {loginService, logService, messageService} from "@/services/service";

export const service = {
    install(app: App) {
        const axiosInstance = config.newAxios();
        app.provide(axiosInstanceProviderKey, axiosInstance);
        app.provide(messageServiceProviderKey, messageService(axiosInstance));
        app.provide(logsServiceProviderKey, logService(axiosInstance));
        app.provide(loginServiceProviderKey, loginService(axiosInstance))
    }
};