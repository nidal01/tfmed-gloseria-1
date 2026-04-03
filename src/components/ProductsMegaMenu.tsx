import { productsMegaMenu } from '../data/content'

export function ProductsMegaMenu() {
  const { columns, featured } = productsMegaMenu

  return (
    <div className="mega-menu" role="region" aria-label="Ürün kategorileri">
      <div className="mega-menu__panel">
        <div className="mega-menu__grid">
          {columns.map((col) => (
            <div key={col.id} className="mega-menu__column">
              <p className="mega-menu__column-title">{col.title}</p>
              <ul className="mega-menu__list">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="mega-menu__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mega-menu__column mega-menu__column--featured">
            <a href={featured.href} className="mega-menu__featured">
              <div className="mega-menu__featured-image-wrap">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className="mega-menu__featured-img"
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
              <span className="mega-menu__featured-label">{featured.label}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
