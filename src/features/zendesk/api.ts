import { baseAPI } from '../../lib/api'
import { ZendeskSubdomainDTO, ZendeskCredentialsDTO } from './types'

export const postZendeskSubdomain = (data: ZendeskSubdomainDTO ): Promise<void> =>
baseAPI.post('/ticket/subdomain', data)

export const postZendeskCredentials = (data: ZendeskCredentialsDTO ): Promise<void> =>
baseAPI.post('/ticket/credentials', data)
