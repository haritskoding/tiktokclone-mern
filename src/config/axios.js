import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tiktok-backend-teguh.herokuapp.com/'
})

export default instance;