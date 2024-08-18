import {Log, UserManager, WebStorageStateStore} from 'oidc-client-ts'
import type {InjectionKey} from "vue";

export const kc = {
    authorityUrl: import.meta.env.VITE_AUTHORITY_URL,
    realm: import.meta.env.VITE_AUTH_REALM,
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
}

const Auth = new UserManager({
    authority: `${kc.authorityUrl}/realms/${kc.realm}`,
    client_id: kc.clientId,
    redirect_uri: `${window.location.origin}/auth`,
    silent_redirect_uri: `${window.location.origin}/silent-refresh`,
    post_logout_redirect_uri: `${window.location.origin}`,
    revokeTokensOnSignout: true,
    response_type: 'code',
    userStore: new WebStorageStateStore(),
    loadUserInfo: true
});

Log.setLogger(console);

// export default Auth

export interface GenericUser {
    username: string;
}

export interface UserProvider {
    getUser: () => Promise<GenericUser | null>;
}

export const cookieUserProvider: UserProvider = {
    getUser: () => Promise.resolve(null)
}

export const userProviderKey: InjectionKey<UserProvider> = Symbol("userProvider");
