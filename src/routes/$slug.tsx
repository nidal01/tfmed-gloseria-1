import { createRoute } from '@tanstack/react-router'
import { ProductPage } from '../pages/ProductPage'
import { Route as RootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/$slug',
  component: ProductPage,
})

