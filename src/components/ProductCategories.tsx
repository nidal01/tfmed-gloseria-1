import { useTranslation } from 'react-i18next'
import { categoryCards } from '../data/content'

export function ProductCategories() {
  const { t } = useTranslation()
  const topCards = categoryCards.slice(0, 2)
  const bottomCard = categoryCards[2]

  return (
    <section className="product-categories" id="products">
      <div className="section-container">
        <div className="product-categories__layout">
          <div className="categories-grid categories-grid--top">
            {topCards.map((card) => (
              <article key={card.id} className="category-card">
                <img
                  src={card.image}
                  alt={t(`categories.${card.id}.alt`)}
                  loading="lazy"
                />
                <div className="category-overlay">
                  <h3 className="category-name">{t(`categories.${card.id}.name`)}</h3>
                  <span className="category-link">{t('categories.cta')}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="product-categories__bottom">
            <article key={bottomCard.id} className="category-card category-card--bottom">
              <img
                src={bottomCard.image}
                alt={t(`categories.${bottomCard.id}.alt`)}
                loading="lazy"
              />
              <div className="category-overlay">
                <h3 className="category-name">{t(`categories.${bottomCard.id}.name`)}</h3>
                <span className="category-link">{t('categories.cta')}</span>
              </div>
            </article>

            <div className="professional-text">
              <h2 className="professional-title">
                {t('professional.titleLine1')}
                <br />
                {t('professional.titleLine2')}
              </h2>
              <p className="professional-desc">{t('professional.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
