import axios from 'axios'

const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

export default API