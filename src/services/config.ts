import axios from "axios";
import Auth from "@/core/auth";

const instanceProvider = () => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
    });

    instance.interceptors.request.use(async config => {
        const user = await Auth.getUser();
        if (user != null) config.headers.Authorization = `Bearer ${user.access_token}`;
        return config;
    });

    return instance;
}

export default instanceProvider();