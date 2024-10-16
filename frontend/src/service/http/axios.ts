import axios from 'axios'
import { useAuthStore } from '../../store/auth'
import { useRouter, useRoute } from 'vue-router'
import LocalStorageService from '../localstorage';
import { TOKEN } from '../const';

const localStorageService = new LocalStorageService(TOKEN)

class ServiceInstances {
    serviceInstance;
    constructor() {
        this.serviceInstance = this.getAxiosInstance()

    }

    getAxiosInstance() {
        const axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {}
        })

        axiosInstance.interceptors.request.use(
            (config) => {
                const authStore = useAuthStore()
                const token = authStore.token
                if (token) {
                    config.headers['Authorization'] = token ? 'Bearer ' + token : null
                } else {
                    delete config.headers['Authorization']
                }
                return config
            },
            (error) => {
                Promise.reject(error)
            }
        )

        axiosInstance.interceptors.response.use((response) => {
            return response
        }, (error) => {
            const originalRequest = error.config;

            // If it is unauthorized and refresh token api is also expire
            if (error.response.status === 401 && originalRequest.url.contains("/auth/token")) {
                const router = useRouter()
                router.push('/login');
                return Promise.reject(error);
            }

            // If access token is unauthorized
            if (error.response.status === 401 && !originalRequest._retry) {
                const refresh_token = localStorageService.getItem().refresh_token
                originalRequest._retry = true;

                return axios.post('/auth/token',
                    {
                        "refresh_token": refresh_token
                    })
                    .then(res => {
                        if (res.status === 201) {
                            localStorageService.setItem(res.data);
                            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getItem().refresh_token
                            return axios(originalRequest);
                        }
                    })

            }
            return Promise.reject(error)
        })

        return axiosInstance
    }
}

export default ServiceInstances