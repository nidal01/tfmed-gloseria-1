import { useTranslation } from 'react-i18next'
import { heroVideoEmbedSrc } from '../data/content'
import { YouTubeEmbed } from './YouTubeEmbed'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="hero-video-frame">
        <YouTubeEmbed
          className="hero-video"
          src={heroVideoEmbedSrc}
          title={t('hero.videoTitle')}
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
