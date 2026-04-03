import { eventsSection } from '../data/content'

export function Events() {
  return (
    <section className="events-section" aria-labelledby="events-heading">
      <div className="section-container">
        <h2 id="events-heading" className="section-title">
          {eventsSection.title}
        </h2>
        <div className="events-grid">
          {eventsSection.items.map((event) => (
            <article key={event.id} className="event-card">
              <div className="event-image">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  loading="lazy"
                />
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
