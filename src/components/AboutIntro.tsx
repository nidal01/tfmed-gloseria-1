import { useTranslation } from 'react-i18next'

export function AboutIntro() {
  const { t } = useTranslation()

  return (
    <section className="about-intro" aria-labelledby="about-intro-heading">
      <div className="section-container">
        <h2 id="about-intro-heading">{t('about.headline')}</h2>
      </div>
    </section>
  )
}
