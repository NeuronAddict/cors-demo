import {Log, UserManager, WebStorageStateStore} from 'oidc-client-ts'

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
    response_type: 'code',
    userStore: new WebStorageStateStore(),
    loadUserInfo: true
});

Log.setLogger(console);

export default Auth
