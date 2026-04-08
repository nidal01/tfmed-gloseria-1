import { createRoute } from '@tanstack/react-router'
import { CorporatePage } from '../pages/CorporatePage'
import { Route as RootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/kurumsal',
  component: CorporatePage,
})

