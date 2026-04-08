import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { SiteFooter } from '../components/SiteFooter'
import { GlobalVideoLoaderOverlay } from '../components/GlobalVideoLoaderOverlay'
import { VideoLoadProvider } from '../videoLoad/VideoLoadContext'

export const Route = createRootRoute({
  component: function RootLayout() {
    return (
      <VideoLoadProvider>
        <GlobalVideoLoaderOverlay />
        <Navbar />
        <Outlet />
        <SiteFooter />
      </VideoLoadProvider>
    )
  },
})

