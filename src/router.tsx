import { createRouter } from '@tanstack/react-router'
import { Route as RootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'
import { Route as CorporateRoute } from './routes/kurumsal'

const routeTree = RootRoute.addChildren([IndexRoute, CorporateRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

