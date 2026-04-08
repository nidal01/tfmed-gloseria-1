import { heroVideoEmbedSrc } from '../data/content'

export function InnerHero({ title }: { title: string }) {
  return (
    <section className="inner-hero" aria-label={title}>
      <div className="inner-hero__videoFrame" aria-hidden="true">
        <iframe
          className="inner-hero__video"
          src={heroVideoEmbedSrc}
          title=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="inner-hero__content">
        <h1 className="inner-hero__title">{title}</h1>
      </div>
    </section>
  )
}

