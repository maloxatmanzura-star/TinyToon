import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

const AppContext = createContext(null)

function getStored(key, fallback) {
  try {
    const value = localStorage.getItem(key)

    return value
      ? JSON.parse(value)
      : fallback
  } catch {
    return fallback
  }
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('tt-theme') || 'rainbow'
  )

  const [favorites, setFavorites] = useState(
    () => getStored('tt-favorites', [])
  )

  const [history, setHistory] = useState(
    () => getStored('tt-history', [])
  )

  const [list, setList] = useState(
    () => getStored('tt-list', [])
  )

  const [parent, setParent] = useState(
    () =>
      getStored('tt-parent', {
        limit: 90,
        bedtime: '20:30',
        age: '7–9',
        content: 'Balanced',
        educational: true,
        language: 'English',
        safeSearch: true,
        pin: null
      })
  )

  useEffect(() => {
    localStorage.setItem('tt-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(
      'tt-favorites',
      JSON.stringify(favorites)
    )
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(
      'tt-history',
      JSON.stringify(history)
    )
  }, [history])

  useEffect(() => {
    localStorage.setItem(
      'tt-list',
      JSON.stringify(list)
    )
  }, [list])

  useEffect(() => {
    localStorage.setItem(
      'tt-parent',
      JSON.stringify(parent)
    )
  }, [parent])

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  const toggleList = (id) => {
    setList((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  const addHistory = (
    id,
    progress = 0,
    episodeId = null
  ) => {
    setHistory((current) =>
      [
        {
          id,
          progress,
          episodeId,
          watchedAt: Date.now()
        },
        ...current.filter(
          (item) => item.id !== id
        )
      ].slice(0, 12)
    )
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,

      favorites,
      toggleFavorite,

      history,
      addHistory,

      list,
      toggleList,

      parent,
      setParent
    }),
    [
      theme,
      favorites,
      history,
      list,
      parent
    ]
  )

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}