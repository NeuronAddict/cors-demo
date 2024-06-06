import axios from "axios";
import Auth from "@/core/auth";

export default axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    transformRequest: [
        async (data, headers) => {
            try {
                const user = await Auth.getUser();
                if (user != null) headers.set('Authorization', `Bearer ${user.access_token}`);
                console.log('headers', headers);
                return data;
            } catch (error) {
                console.error('Error in transformRequest:', error);
                throw error;
            }
        }
    ]
});
