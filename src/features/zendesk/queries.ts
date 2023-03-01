import { useMutation } from '@tanstack/react-query'
import { postZendeskSubdomain, postZendeskCredentials } from './api'
import { ZendeskSubdomainDTO, ZendeskCredentialsDTO } from './types'

export const useSetZendeskSubdomain = () =>
  useMutation((data: ZendeskSubdomainDTO) => postZendeskSubdomain(data))

export const useSetZendeskCredentials = () =>
  useMutation((data: ZendeskCredentialsDTO) => postZendeskCredentials(data))