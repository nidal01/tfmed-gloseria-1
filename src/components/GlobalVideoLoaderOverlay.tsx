import { useEffect, useMemo, useRef, useState } from 'react'
import { useVideoLoad } from '../videoLoad/VideoLoadContext'

type Props = {
  showDelayMs?: number
  maxWaitMs?: number
}

export function GlobalVideoLoaderOverlay({ showDelayMs = 200, maxWaitMs = 10_000 }: Props) {
  const { isLoading } = useVideoLoad()
  const [isVisible, setIsVisible] = useState(false)
  const [isTimedOut, setIsTimedOut] = useState(false)
  const loadingSessionRef = useRef(0)
  const maxWaitTimerRef = useRef<number | null>(null)
  const showDelayTimerRef = useRef<number | null>(null)

  const shouldShow = isLoading && !isTimedOut

  useEffect(() => {
    if (!isLoading) {
      setIsTimedOut(false)
      loadingSessionRef.current += 1
      return
    }

    const session = loadingSessionRef.current
    setIsTimedOut(false)

    if (maxWaitTimerRef.current) window.clearTimeout(maxWaitTimerRef.current)
    maxWaitTimerRef.current = window.setTimeout(() => {
      if (loadingSessionRef.current !== session) return
      setIsTimedOut(true)
    }, maxWaitMs)

    return () => {
      if (maxWaitTimerRef.current) window.clearTimeout(maxWaitTimerRef.current)
      maxWaitTimerRef.current = null
    }
  }, [isLoading, maxWaitMs])

  useEffect(() => {
    if (!shouldShow) {
      if (showDelayTimerRef.current) window.clearTimeout(showDelayTimerRef.current)
      showDelayTimerRef.current = null
      setIsVisible(false)
      return
    }

    if (showDelayTimerRef.current) window.clearTimeout(showDelayTimerRef.current)
    showDelayTimerRef.current = window.setTimeout(() => {
      setIsVisible(true)
    }, showDelayMs)

    return () => {
      if (showDelayTimerRef.current) window.clearTimeout(showDelayTimerRef.current)
      showDelayTimerRef.current = null
    }
  }, [shouldShow, showDelayMs])

  const className = useMemo(() => {
    return `global-video-loader${isVisible ? ' global-video-loader--visible' : ''}`
  }, [isVisible])

  return (
    <div className={className} aria-hidden={isVisible ? undefined : true}>
      <div className="global-video-loader__panel" role="status" aria-live="polite">
        <div className="global-video-loader__spinner" aria-hidden="true" />
        <div className="global-video-loader__text">Yükleniyor…</div>
      </div>
    </div>
  )
}

