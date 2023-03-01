import { baseAPI } from '../../lib/api'

export const postSunshineAppID = (data: { subdomain: string } ): Promise<void> =>
baseAPI.post('/ticket/subdomain', data)

export const postSunshineCredentials = (data: { keyId: string; keySecret: string } ): Promise<void> =>
baseAPI.post('/ticket/credentials', data)