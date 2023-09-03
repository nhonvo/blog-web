import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { PaginatedResult } from '../models/pagination';
import { router } from '../router/Routes';
import { store } from '../stores/store';
import { Blog } from '../models/Blog';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(async response => {
    if (process.env.NODE_ENV === 'development') await sleep(1000)
    const pagination = response.headers['pagination']
    if (pagination) {
        response.data = new PaginatedResult(response.data, JSON.parse(pagination))
        return response as AxiosResponse<PaginatedResult<any>>
    }
    return response;
}, (error: AxiosError) => {
    const { data, status, config } = error.response as AxiosResponse
    switch (status) {
        case 400:
            if (config.method === 'get' && data.errors.hasOwnProperties('id')) {
                router.navigate('/not-found')
            }
            if (data.errors) {
                const modalStateErrors = []
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key])
                    }
                    throw modalStateErrors.flat()
                }
            } else {
                toast.error(data)
            }
            break;
        case 401:
            toast.error('unauthorised')
            break;
        case 403:
            toast.error('forbidden')
            break;
        case 404:
            router.navigate('not-found')
            break;
        case 500:
            store.commonStore.setServerError(data)
            router.navigate('/server-error')
            break;
    }
    return Promise.reject(error)
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use(config => {
    const token = store.commonStore.token
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
    return config
})

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const blog = {
    list: () => requests.get<Blog[]>(`/Blog`),
    // list: (id: string, pageIndex?: number, pageSize?: number) => requests.get<Posts>(`/Blog/${id}&PageIndex=${pageIndex}&PageSize=${pageSize}`),
    details: (id: string) => requests.get<Blog>(`/Blog/${id}`),
}
const agent = {
    blog
}

export default agent;