import { createRoute } from '@tanstack/react-router'
import { LandingPage } from '../pages/LandingPage'
import { Route as RootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: LandingPage,
})

