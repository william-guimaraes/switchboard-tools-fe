import { useQuery, useMutation } from '@tanstack/react-query'
import { 
    postZendeskCredentials,
    postZendeskSubdomain,
    postSunshineCredentials,
    postSunshineApp,
    postSwitchboardChanges,
} from './api'
import { 
    ZendeskCredentialsDTO,
    ZendeskSubdomainDTO,
    SunshineCredentialsDTO,
    SunshineAppDTO,
} from './dto'

export const useConfigureZendeskCredentials = () =>
  useMutation((data: ZendeskCredentialsDTO) => postZendeskCredentials(data))
  
export const useConfigureZendeskSubdomain = () =>
  useMutation((data: ZendeskSubdomainDTO) => postZendeskSubdomain(data))

export const useConfigureSunshineCredentials = () =>
  useMutation((data: SunshineCredentialsDTO) => postSunshineCredentials(data))

export const useConfigureSunshineAppId = () =>
  useMutation((data: SunshineAppDTO) => postSunshineApp(data))

export const useApplySwitchboardChanges = () => 
  useMutation(() => postSwitchboardChanges())
  
