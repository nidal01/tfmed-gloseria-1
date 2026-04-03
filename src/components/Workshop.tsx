import { workshop } from '../data/content'

export function Workshop() {
  return (
    <section className="workshop-section" aria-labelledby="workshop-heading">
      <img
        src={workshop.backgroundImage}
        alt=""
        className="workshop-bg-image"
        decoding="async"
      />
      <div className="workshop-container">
        <h2 id="workshop-heading" className="workshop-title">
          {workshop.title}
        </h2>
        <div className="workshop-content">
          <div className="workshop-text">
            <p>{workshop.introColumn}</p>
          </div>
          <div className="workshop-text">
            {workshop.detailParagraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div className="workshop-cta-wrap">
          <a href={workshop.ctaHref} className="workshop-btn">
            {workshop.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
