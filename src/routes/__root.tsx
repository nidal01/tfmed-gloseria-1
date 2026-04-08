import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createRootRoute({
  component: function RootLayout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <SiteFooter />
      </>
    )
  },
})

