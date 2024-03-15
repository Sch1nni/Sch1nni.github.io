import axios from 'axios'
import { useBaseStore } from '@/stores/main'

let axiosInstance = axios.create({})

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        useBaseStore().setError(error)
        return Promise.reject(error)
    },
)

export { axios, axiosInstance }
