import {
  categoryCards,
  categoryCta,
  professionalBlock,
} from '../data/content'

export function ProductCategories() {
  return (
    <section className="product-categories" id="products">
      <div className="section-container">
        <div className="categories-grid">
          {categoryCards.map((card) => (
            <article key={card.id} className="category-card">
              <img src={card.image} alt={card.alt} loading="lazy" />
              <div className="category-overlay">
                <h3 className="category-name">{card.name}</h3>
                <span className="category-link">{categoryCta}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="professional-text">
          <h2 className="professional-title">
            {professionalBlock.titleLine1}
            <br />
            {professionalBlock.titleLine2}
          </h2>
          <p className="professional-desc">{professionalBlock.description}</p>
        </div>
      </div>
    </section>
  )
}
