import { useTranslation } from 'react-i18next'
import { workshopCtaHref, workshopVideoEmbedSrc } from '../data/content'

export function Workshop() {
  const { t } = useTranslation()

  return (
    <section className="workshop-section" aria-labelledby="workshop-heading">
      <div className="workshop-video-frame">
        <iframe
          className="workshop-video"
          src={workshopVideoEmbedSrc}
          title={t('workshop.videoTitle')}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
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
