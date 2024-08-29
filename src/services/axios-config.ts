import axios from "axios";
import {AuthType, type UserProvider} from "@/core/auth";
import {OidcAuth} from "@/core/oidc-auth";

const axiosInstanceProvider = (sendCookie: boolean, userProvider: UserProvider) => {

    const instance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        withCredentials: sendCookie
    });

    if(userProvider.authType === AuthType.OIDC) {

        instance.interceptors.request.use(async config => {
            const user = await OidcAuth.getUser();
            if (user != null) config.headers.Authorization = `Bearer ${user.access_token}`;
            return config;
        });
    }

    return instance;
}

export default {newAxios: axiosInstanceProvider};