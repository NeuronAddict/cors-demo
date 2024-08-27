import type {InjectionKey} from "vue";


export interface GenericUser {
    username: string;
}

export enum AuthType {
    Cookie,
    OIDC
}

export interface UserProvider {
    getUser: () => Promise<GenericUser | null>;
    authType: AuthType;
}

export const userProviderKey: InjectionKey<UserProvider> = Symbol("userProvider");




