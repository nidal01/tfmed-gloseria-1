import { createRoute } from '@tanstack/react-router'
import { ContactPage } from '../pages/ContactPage'
import { Route as RootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/iletisim',
  component: ContactPage,
})

