import { heroVideoEmbedSrc } from '../data/content'
import { YouTubeEmbed } from './YouTubeEmbed'

export function InnerHero({ title, videoSrc }: { title: string; videoSrc?: string }) {
  return (
    <section className="inner-hero" aria-label={title}>
      <div className="inner-hero__videoFrame" aria-hidden="true">
        <YouTubeEmbed
          className="inner-hero__video"
          src={videoSrc ?? heroVideoEmbedSrc}
          title=""
        />
      </div>

      <div className="inner-hero__content">
        <h1 className="inner-hero__title">{title}</h1>
      </div>
    </section>
  )
}

