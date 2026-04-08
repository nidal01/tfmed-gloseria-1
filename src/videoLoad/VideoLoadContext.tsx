import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'

type VideoState = {
  isLoading: boolean
  pendingCount: number
  totalCount: number
}

type VideoLoadApi = VideoState & {
  register: (id: string) => void
  markLoaded: (id: string) => void
  unregister: (id: string) => void
}

type Status = 'pending' | 'loaded'

const VideoLoadContext = createContext<VideoLoadApi | null>(null)

function computeState(map: Map<string, Status>): VideoState {
  const totalCount = map.size
  let pendingCount = 0
  for (const status of map.values()) {
    if (status === 'pending') pendingCount += 1
  }
  return {
    totalCount,
    pendingCount,
    isLoading: pendingCount > 0,
  }
}

export function VideoLoadProvider({ children }: PropsWithChildren) {
  const mapRef = useRef<Map<string, Status>>(new Map())
  const [state, setState] = useState<VideoState>(() => computeState(mapRef.current))

  const bump = useCallback(() => {
    setState(computeState(mapRef.current))
  }, [])

  const register = useCallback(
    (id: string) => {
      const map = mapRef.current
      if (map.get(id) === 'loaded') return
      if (map.has(id)) return
      map.set(id, 'pending')
      bump()
    },
    [bump],
  )

  const markLoaded = useCallback(
    (id: string) => {
      const map = mapRef.current
      if (!map.has(id)) return
      if (map.get(id) === 'loaded') return
      map.set(id, 'loaded')
      bump()
    },
    [bump],
  )

  const unregister = useCallback(
    (id: string) => {
      const map = mapRef.current
      if (!map.has(id)) return
      map.delete(id)
      bump()
    },
    [bump],
  )

  const value = useMemo<VideoLoadApi>(
    () => ({
      ...state,
      register,
      markLoaded,
      unregister,
    }),
    [state, register, markLoaded, unregister],
  )

  return <VideoLoadContext.Provider value={value}>{children}</VideoLoadContext.Provider>
}

export function useVideoLoad() {
  const ctx = useContext(VideoLoadContext)
  if (!ctx) throw new Error('useVideoLoad must be used within <VideoLoadProvider />')
  return ctx
}

