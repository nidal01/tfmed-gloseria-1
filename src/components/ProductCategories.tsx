import { useTranslation } from 'react-i18next'
import { categoryCards } from '../data/content'

export function ProductCategories() {
  const { t } = useTranslation()

  return (
    <section className="product-categories" id="products">
      <div className="section-container">
        <div className="categories-grid">
          {categoryCards.map((card) => (
            <article key={card.id} className="category-card">
              <img
                src={card.image}
                alt={t(`categories.${card.id}.alt`)}
                loading="lazy"
              />
              <div className="category-overlay">
                <h3 className="category-name">
                  {t(`categories.${card.id}.name`)}
                </h3>
                <span className="category-link">{t('categories.cta')}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="professional-text">
          <h2 className="professional-title">
            {t('professional.titleLine1')}
            <br />
            {t('professional.titleLine2')}
          </h2>
          <p className="professional-desc">{t('professional.description')}</p>
        </div>
      </div>
    </section>
  )
}
