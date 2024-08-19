import {Log, UserManager, WebStorageStateStore} from 'oidc-client-ts'
import type {GenericUser, UserProvider} from "@/core/auth";

export const kc = {
    authorityUrl: import.meta.env.VITE_AUTHORITY_URL,
    realm: import.meta.env.VITE_AUTH_REALM,
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
}

export const OidcAuth = new UserManager({
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

export const oidcUserProvider: UserProvider = {
    getUser: () => OidcAuth.getUser().then(value => ({username: value?.profile.given_name} as GenericUser))
}
