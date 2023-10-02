import axios from "axios";

const api = axios.create({
    baseURL: 'https://vox-harbor.com/api',
})

export default api;