import { lazy } from 'react'

export const UserInfoAsync = lazy(async () => await import('./UserInfo'))
