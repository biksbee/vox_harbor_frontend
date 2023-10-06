import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.vox-harbor.com/',
})

export default api;