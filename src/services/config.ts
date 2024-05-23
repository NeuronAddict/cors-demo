import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.BASE_URL + 'api/v1',
    timeout: 30
});
