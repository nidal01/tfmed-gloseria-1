import { AboutIntro } from './components/AboutIntro'
import { Events } from './components/Events'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProductCategories } from './components/ProductCategories'
import { SiteFooter } from './components/SiteFooter'
import { Workshop } from './components/Workshop'
import './styles/landing.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <AboutIntro />
        <Features />
        <Workshop />
        <Events />
      </main>
      <SiteFooter />
    </>
  )
}
