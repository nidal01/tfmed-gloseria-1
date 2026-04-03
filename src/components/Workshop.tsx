import { useTranslation } from 'react-i18next'
import { images, workshopCtaHref } from '../data/content'

export function Workshop() {
  const { t } = useTranslation()

  return (
    <section className="workshop-section" aria-labelledby="workshop-heading">
      <img
        src={images.workshopBg}
        alt=""
        className="workshop-bg-image"
        decoding="async"
      />
      <div className="workshop-container">
        <h2 id="workshop-heading" className="workshop-title">
          {t('workshop.title')}
        </h2>
        <div className="workshop-content">
          <div className="workshop-text">
            <p>{t('workshop.intro')}</p>
          </div>
          <div className="workshop-text">
            <p>{t('workshop.paragraph1')}</p>
            <p>{t('workshop.paragraph2')}</p>
          </div>
        </div>
        <div className="workshop-cta-wrap">
          <a href={workshopCtaHref} className="workshop-btn">
            {t('workshop.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
