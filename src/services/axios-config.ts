import axios from "axios";

const axiosInstanceProvider = (sendCookie: boolean, userProvider: UserProvider) => {

    const instance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        withCredentials: sendCookie
    });

    if (!sendCookie) {
        instance.interceptors.request.use(async config => {
            const user = await userProvider.getUser();
            if (user != null) config.headers.Authorization = `Bearer ${user.access_token}`;
            return config;
        });
    }

    return instance;
}

export default {newAxios: axiosInstanceProvider};