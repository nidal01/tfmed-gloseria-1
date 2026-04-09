import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { InnerHero } from '../components/InnerHero'
import { workshopVideoEmbedSrc } from '../data/content'
import { YouTubeEmbed } from '../components/YouTubeEmbed'

type CorporateValue = { title: string; text: string }

export function CorporatePage() {
  const { t } = useTranslation()

  const values = useMemo(() => t('corporatePage.values', { returnObjects: true }) as CorporateValue[], [t])

  return (
    <main>
      <InnerHero title={t('nav.corporate')} />

      <section className="corporate">
        <div className="corporate__container">
          <h2 className="corporate__heading">{t('corporatePage.heading')}</h2>
          <p className="corporate__paragraph">{t('corporatePage.intro')}</p>

          <div className="corporate__missionVision">
            <div className="corporate__callout">
              <h5 className="corporate__calloutTitle">{t('corporatePage.missionTitle')}</h5>
              <p className="corporate__calloutText">{t('corporatePage.missionText')}</p>
            </div>

            <div className="corporate__callout">
              <h5 className="corporate__calloutTitle">{t('corporatePage.visionTitle')}</h5>
              <p className="corporate__calloutText">{t('corporatePage.visionText')}</p>
            </div>
          </div>

          <section className="corporate__split">
            <div className="corporate__media">
              <img
                className="corporate__image"
                src="/images/gloseria-about.webp"
                alt={t('corporatePage.aboutImageAlt')}
                loading="lazy"
              />
              <p className="corporate__paragraph corporate__paragraph--belowMedia">{t('corporatePage.splitParagraph')}</p>
            </div>

            <div className="corporate__valuesBlock">
              <h3 className="corporate__subheading corporate__subheading--tight">{t('corporatePage.valuesHeading')}</h3>
              <div className="corporate__valuesList">
                {values.map((item) => (
                  <div key={item.title} className="corporate__value">
                    <h6 className="corporate__valueTitle">{item.title}</h6>
                    <p className="corporate__valueText">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <p className="corporate__paragraph corporate__paragraph--afterSplit">{t('corporatePage.closingParagraph')}</p>

          <section className="corporate__workshopCard" aria-label={t('corporatePage.workshop.aria')}>
            <div className="corporate__workshopMedia" aria-hidden="true">
              <YouTubeEmbed className="corporate__workshopVideo" src={workshopVideoEmbedSrc} title="" />
            </div>
            <div className="corporate__workshopContent">
              <h3 className="corporate__workshopTitle">{t('corporatePage.workshop.title')}</h3>
              <p className="corporate__workshopText">{t('corporatePage.workshop.text')}</p>
              <a className="corporate__workshopCta" href="#workshop">
                {t('corporatePage.workshop.cta')}
              </a>
            </div>
          </section>

          <section className="corporate__future">
            <h3 className="corporate__subheading">{t('corporatePage.futureHeading')}</h3>
            <h5 className="corporate__futureLead">{t('corporatePage.futureLead')}</h5>
          </section>
        </div>
      </section>
    </main>
  )
}
