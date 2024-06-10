import {type App, reactive} from "vue";
import {
    logStoreProvider,
    logStoreProviderKey,
    messageStoreProvider,
    messageStoreProviderKey
} from "@/core/store-provider";

export const store = {
    install(app: App) {
        app.provide(messageStoreProviderKey, reactive(messageStoreProvider()));
        app.provide(logStoreProviderKey, reactive(logStoreProvider()));
    }
};