import { useTranslation } from 'react-i18next'
import { heroVideoEmbedSrc } from '../data/content'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="hero-video-frame">
        <iframe
          className="hero-video"
          src={heroVideoEmbedSrc}
          title={t('hero.videoTitle')}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
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
