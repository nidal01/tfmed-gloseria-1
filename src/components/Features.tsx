import { features } from '../data/content'

export function Features() {
  return (
    <section className="features-section" aria-label="Özellikler">
      <div className="section-container">
        <div className="features-grid">
          {features.map((item) => (
            <div key={item.number} className="feature-item">
              <div className="feature-number">{item.number}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
