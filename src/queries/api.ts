import Axios from 'axios'
import { 
    ZendeskCredentialsDTO,
    ZendeskSubdomainDTO,
    SunshineCredentialsDTO,
    SunshineAppDTO,
} from './dto'

const API_URL = 'http://localhost:8080/'

export const baseApi = Axios.create({
  baseURL: API_URL,
})

baseApi.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const postZendeskCredentials = (
    data: ZendeskCredentialsDTO
  ): Promise<any> =>
    baseApi.post('/ticket/credentials', data)

export const postZendeskSubdomain = (
    data: ZendeskSubdomainDTO
    ): Promise<any> =>
    baseApi.post('/ticket/subdomain', data)

export const postSunshineCredentials = (
    data: SunshineCredentialsDTO
    ): Promise<any> =>
    baseApi.post('/sunshine/credentials', data)

export const postSunshineApp = (
    data: SunshineAppDTO
    ): Promise<any> =>
    baseApi.post('/sunshine/app', data)

export const postSwitchboardChanges = (): Promise<any> =>
    baseApi.post('/switchboard/apply-changes')
    