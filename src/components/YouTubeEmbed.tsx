import { useEffect, useId, useMemo, useRef } from 'react'
import { useVideoLoad } from '../videoLoad/VideoLoadContext'

type Props = {
  src: string
  className?: string
  title: string
  allow?: string
  allowFullScreen?: boolean
  referrerPolicy?: React.HTMLAttributeReferrerPolicy
}

function toStableKey(src: string) {
  let hash = 0
  for (let i = 0; i < src.length; i += 1) {
    hash = (hash * 31 + src.charCodeAt(i)) | 0
  }
  return Math.abs(hash).toString(36)
}

export function YouTubeEmbed({
  src,
  className,
  title,
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  allowFullScreen = true,
  referrerPolicy = 'strict-origin-when-cross-origin',
}: Props) {
  const reactId = useId()
  const { register, unregister, markLoaded } = useVideoLoad()
  const loadedOnceRef = useRef(false)

  const id = useMemo(() => `yt-${reactId}-${toStableKey(src)}`, [reactId, src])

  useEffect(() => {
    loadedOnceRef.current = false
    register(id)
    return () => unregister(id)
  }, [id, register, unregister])

  return (
    <iframe
      className={className}
      src={src}
      title={title}
      allow={allow}
      allowFullScreen={allowFullScreen}
      referrerPolicy={referrerPolicy}
      onLoad={() => {
        if (loadedOnceRef.current) return
        loadedOnceRef.current = true
        markLoaded(id)
      }}
    />
  )
}

