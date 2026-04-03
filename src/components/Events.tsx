import { useTranslation } from 'react-i18next'
import { eventImages } from '../data/content'

const EVENT_KEYS = ['national', 'international'] as const

export function Events() {
  const { t } = useTranslation()

  return (
    <section className="events-section" aria-labelledby="events-heading">
      <div className="section-container">
        <h2 id="events-heading" className="section-title">
          {t('events.title')}
        </h2>
        <div className="events-grid">
          {EVENT_KEYS.map((key) => (
            <article key={key} className="event-card">
              <div className="event-image">
                <img
                  src={eventImages[key]}
                  alt={t(`events.${key}.imageAlt`)}
                  loading="lazy"
                />
              </div>
              <div className="event-content">
                <h3>{t(`events.${key}.title`)}</h3>
                <p>{t(`events.${key}.description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
