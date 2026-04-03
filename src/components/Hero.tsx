import { hero } from '../data/content'

export function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="hero-image"
        decoding="async"
      />
      <div className="hero-content">
        <p className="hero-subtitle">{hero.subtitle}</p>
        <h1 id="hero-heading" className="hero-title">
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </h1>
      </div>
    </section>
  )
}
