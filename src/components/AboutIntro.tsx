import { aboutIntro } from '../data/content'

export function AboutIntro() {
  return (
    <section className="about-intro" aria-labelledby="about-intro-heading">
      <div className="section-container">
        <h2 id="about-intro-heading">{aboutIntro.headline}</h2>
      </div>
    </section>
  )
}
