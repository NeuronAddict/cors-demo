import type {InjectionKey} from "vue";

export interface GenericUser {
    username: string;
}

export interface UserProvider {
    getUser: () => Promise<GenericUser | null>;
}

export const userProviderKey: InjectionKey<UserProvider> = Symbol("userProvider");