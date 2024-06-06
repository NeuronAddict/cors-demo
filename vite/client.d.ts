/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_VERSION: string
    readonly VITE_AUTHORITY_URL: string
    readonly VITE_AUTH_REALM: string
    readonly VITE_AUTH_CLIENT_ID: string

    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}