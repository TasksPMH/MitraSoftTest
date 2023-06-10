import { lazy } from 'react'

export const AboutMeAsync = lazy(async () => await import('./AboutMe'))
