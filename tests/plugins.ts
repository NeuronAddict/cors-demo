import {Message} from "../src/core/message";
import {logStoreProviderKey, messageStoreProviderKey, Store} from "../src/core/store-provider";
import LogEntry from "../src/core/log-entry";
import {App, reactive} from "vue";
import {AxiosInstance} from "axios";
import {
    axiosInstanceProviderKey,
    logsServiceProviderKey,
    messageServiceProviderKey
} from "../src/core/service-provider";
import {logService, messageService} from "../src/services/service";
import {GenericUser, UserProvider, userProviderKey} from "../src/core/auth";

export const testStorePlugin = (messageStore: Store<Message>, logStore: Store<LogEntry> = null) => {
    return {
        install(app: App) {
            app.provide(messageStoreProviderKey, reactive(messageStore));
            app.provide(logStoreProviderKey, reactive(logStore));
        }
    }
}

export const testServicePlugin = (axiosInstance: AxiosInstance) => {
    return {
        install(app: App) {
            app.provide(axiosInstanceProviderKey, axiosInstance);
            app.provide(messageServiceProviderKey, messageService(axiosInstance));
            app.provide(logsServiceProviderKey, logService(axiosInstance));
        }
    }
}

export const testUserManagerPlugin = (user: string) => {
    return {
        install(app: App) {
            app.provide(userProviderKey, {
                getUser: () => {
                    return Promise.resolve({username: user} as GenericUser);
                }
            } as UserProvider);
        }
    }
};