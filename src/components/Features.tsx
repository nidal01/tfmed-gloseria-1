import { useTranslation } from 'react-i18next'

type FeatureItem = {
  number: string
  title: string
  description: string
}

export function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as FeatureItem[]

  return (
    <section className="features-section" aria-label={t('features.aria')}>
      <div className="section-container">
        <div className="features-grid">
          {items.map((item) => (
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
