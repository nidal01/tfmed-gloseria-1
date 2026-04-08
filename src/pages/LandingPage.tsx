import { AboutIntro } from '../components/AboutIntro'
import { Events } from '../components/Events'
import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { ProductCategories } from '../components/ProductCategories'
import { Workshop } from '../components/Workshop'

export function LandingPage() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <AboutIntro />
      <Features />
      <Workshop />
      <Events />
    </main>
  )
}

