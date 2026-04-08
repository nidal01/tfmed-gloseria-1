import { createRouter } from '@tanstack/react-router'
import { Route as RootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'
import { Route as CorporateRoute } from './routes/kurumsal'
import { Route as ProductRoute } from './routes/$slug'

const routeTree = RootRoute.addChildren([IndexRoute, CorporateRoute, ProductRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

