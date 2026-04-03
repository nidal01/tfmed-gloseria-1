import { useTranslation } from 'react-i18next'
import { images } from '../data/content'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <img
        src={images.hero}
        alt={t('hero.imageAlt')}
        className="hero-image"
        decoding="async"
      />
      <div className="hero-content">
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <h1 id="hero-heading" className="hero-title">
          {t('hero.titleLine1')}
          <br />
          {t('hero.titleLine2')}
        </h1>
      </div>
    </section>
  )
}
